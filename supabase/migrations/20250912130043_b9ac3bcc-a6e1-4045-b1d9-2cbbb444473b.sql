-- Create table for informational subscriptions management
CREATE TABLE public.crm_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id UUID NOT NULL,
  org_id UUID NOT NULL,
  concepto TEXT NOT NULL,
  precio_cents INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'EUR',
  fecha_inicio DATE NOT NULL,
  estado TEXT NOT NULL CHECK (estado IN ('Pagado', 'Pendiente', 'Rechazado')),
  notas TEXT,
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.crm_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Staff can manage organization CRM subscriptions"
ON public.crm_subscriptions
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.user_id = auth.uid()
    AND profiles.org_id = crm_subscriptions.org_id
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

CREATE POLICY "Clients can view their own CRM subscriptions"
ON public.crm_subscriptions
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.user_id = auth.uid()
    AND profiles.org_id = crm_subscriptions.org_id
    AND profiles.role = 'client'
    AND crm_subscriptions.account_id = profiles.account_id
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_crm_subscriptions_updated_at
BEFORE UPDATE ON public.crm_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();