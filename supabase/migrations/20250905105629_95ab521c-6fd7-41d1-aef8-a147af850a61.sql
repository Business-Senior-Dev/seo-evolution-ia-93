-- Add missing columns to accounts table
ALTER TABLE public.accounts ADD COLUMN IF NOT EXISTS type TEXT NOT NULL DEFAULT 'client';
ALTER TABLE public.accounts ADD COLUMN IF NOT EXISTS vat_id TEXT;
ALTER TABLE public.accounts ADD COLUMN IF NOT EXISTS billing_address JSONB;
ALTER TABLE public.accounts ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add check constraint for account types
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'accounts_type_check' 
        AND conrelid = 'public.accounts'::regclass
    ) THEN
        ALTER TABLE public.accounts ADD CONSTRAINT accounts_type_check 
        CHECK (type IN ('client', 'partner', 'vendor', 'internal'));
    END IF;
END $$;

-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id UUID NOT NULL,
  org_id UUID NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  position TEXT,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for contacts
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for contacts
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE policyname = 'Staff can manage organization contacts'
        AND tablename = 'contacts'
        AND schemaname = 'public'
    ) THEN
        CREATE POLICY "Staff can manage organization contacts" 
        ON public.contacts 
        FOR ALL 
        USING (EXISTS (
          SELECT 1 FROM profiles 
          WHERE profiles.user_id = auth.uid() 
          AND profiles.org_id = contacts.org_id 
          AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
        ));
    END IF;
END $$;

-- Create storage bucket for attachments
INSERT INTO storage.buckets (id, name, public) 
VALUES ('attachments', 'attachments', false)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for attachments
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE policyname = 'Organization members can view attachments'
        AND tablename = 'objects'
        AND schemaname = 'storage'
    ) THEN
        CREATE POLICY "Organization members can view attachments" 
        ON storage.objects 
        FOR SELECT 
        USING (
          bucket_id = 'attachments' 
          AND EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.user_id = auth.uid() 
            AND profiles.org_id::text = (storage.foldername(name))[1]
            AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
          )
        );
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE policyname = 'Organization members can upload attachments'
        AND tablename = 'objects'
        AND schemaname = 'storage'
    ) THEN
        CREATE POLICY "Organization members can upload attachments" 
        ON storage.objects 
        FOR INSERT 
        WITH CHECK (
          bucket_id = 'attachments' 
          AND EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.user_id = auth.uid() 
            AND profiles.org_id::text = (storage.foldername(name))[1]
            AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
          )
        );
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE policyname = 'Organization members can delete attachments'
        AND tablename = 'objects'
        AND schemaname = 'storage'
    ) THEN
        CREATE POLICY "Organization members can delete attachments" 
        ON storage.objects 
        FOR DELETE 
        USING (
          bucket_id = 'attachments' 
          AND EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.user_id = auth.uid() 
            AND profiles.org_id::text = (storage.foldername(name))[1]
            AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
          )
        );
    END IF;
END $$;

-- Create trigger for updated_at on contacts
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'update_contacts_updated_at'
    ) THEN
        CREATE TRIGGER update_contacts_updated_at
        BEFORE UPDATE ON public.contacts
        FOR EACH ROW
        EXECUTE FUNCTION public.update_updated_at_column();
    END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_account_id ON public.contacts(account_id);
CREATE INDEX IF NOT EXISTS idx_contacts_org_id ON public.contacts(org_id);
CREATE INDEX IF NOT EXISTS idx_accounts_type ON public.accounts(type);
CREATE INDEX IF NOT EXISTS idx_accounts_org_id ON public.accounts(org_id);

-- Create function to get account financial metrics
CREATE OR REPLACE FUNCTION public.get_account_metrics(account_uuid UUID, org_uuid UUID)
RETURNS TABLE (
  mrr_cents INTEGER,
  arr_cents INTEGER,
  pending_cents INTEGER,
  paid_ytd_cents INTEGER,
  last_invoice_date DATE,
  active_subscriptions_count INTEGER
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  WITH subscription_mrr AS (
    SELECT 
      COALESCE(SUM(
        CASE 
          WHEN p.interval = 'month' THEN p.price_cents
          WHEN p.interval = 'year' THEN p.price_cents / 12
          ELSE 0
        END
      ), 0)::INTEGER as mrr
    FROM subscriptions s
    JOIN plans p ON s.plan_id = p.id
    WHERE s.account_id = account_uuid 
    AND s.org_id = org_uuid
    AND s.status IN ('trialing', 'active', 'past_due')
  ),
  subscription_arr AS (
    SELECT 
      COALESCE(SUM(
        CASE 
          WHEN p.interval = 'year' THEN p.price_cents
          WHEN p.interval = 'month' THEN p.price_cents * 12
          ELSE 0
        END
      ), 0)::INTEGER as arr
    FROM subscriptions s
    JOIN plans p ON s.plan_id = p.id
    WHERE s.account_id = account_uuid 
    AND s.org_id = org_uuid
    AND s.status IN ('trialing', 'active', 'past_due')
  ),
  pending_amount AS (
    SELECT COALESCE(SUM(amount_cents), 0)::INTEGER as pending
    FROM invoices
    WHERE account_id = account_uuid 
    AND org_id = org_uuid
    AND status IN ('open', 'past_due')
  ),
  paid_ytd AS (
    SELECT COALESCE(SUM(amount_cents), 0)::INTEGER as paid
    FROM invoices
    WHERE account_id = account_uuid 
    AND org_id = org_uuid
    AND status = 'paid'
    AND EXTRACT(YEAR FROM invoice_date) = EXTRACT(YEAR FROM CURRENT_DATE)
  ),
  last_invoice AS (
    SELECT MAX(invoice_date) as last_date
    FROM invoices
    WHERE account_id = account_uuid 
    AND org_id = org_uuid
  ),
  active_subs AS (
    SELECT COUNT(*)::INTEGER as count
    FROM subscriptions
    WHERE account_id = account_uuid 
    AND org_id = org_uuid
    AND status IN ('trialing', 'active', 'past_due')
  )
  SELECT 
    sm.mrr,
    sa.arr,
    pa.pending,
    py.paid,
    li.last_date,
    ac.count
  FROM subscription_mrr sm, subscription_arr sa, pending_amount pa, paid_ytd py, last_invoice li, active_subs ac;
END;
$$;