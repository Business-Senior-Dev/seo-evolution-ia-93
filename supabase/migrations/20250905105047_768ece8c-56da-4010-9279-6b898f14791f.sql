-- Create organizations table
CREATE TABLE public.organizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create plans table for subscription pricing
CREATE TABLE public.plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  interval TEXT NOT NULL CHECK (interval IN ('month', 'year')),
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.plans(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('trialing', 'active', 'past_due', 'canceled', 'unpaid')),
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ended_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create invoices table
CREATE TABLE public.invoices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES public.subscriptions(id) ON DELETE SET NULL,
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  amount_cents INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'EUR',
  status TEXT NOT NULL CHECK (status IN ('draft', 'open', 'paid', 'past_due', 'canceled')),
  invoice_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE,
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add org_id to existing tables
ALTER TABLE public.profiles ADD COLUMN org_id UUID REFERENCES public.organizations(id);
ALTER TABLE public.accounts ADD COLUMN org_id UUID REFERENCES public.organizations(id);
ALTER TABLE public.projects ADD COLUMN org_id UUID REFERENCES public.organizations(id);

-- Enable RLS on new tables
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for organizations
CREATE POLICY "Users can view their organization" 
ON public.organizations 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = organizations.id
  )
);

-- Create RLS policies for plans
CREATE POLICY "Users can view organization plans" 
ON public.plans 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = plans.org_id
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Create RLS policies for subscriptions
CREATE POLICY "Users can view organization subscriptions" 
ON public.subscriptions 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = subscriptions.org_id
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Create RLS policies for invoices
CREATE POLICY "Users can view organization invoices" 
ON public.invoices 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = invoices.org_id
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Update RLS policies for existing tables to include org filtering
DROP POLICY IF EXISTS "Staff can manage accounts" ON public.accounts;
CREATE POLICY "Staff can manage organization accounts" 
ON public.accounts 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = accounts.org_id
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

DROP POLICY IF EXISTS "Staff can manage projects" ON public.projects;
CREATE POLICY "Staff can manage organization projects" 
ON public.projects 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() AND org_id = projects.org_id
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Create triggers for timestamp updates
CREATE TRIGGER update_organizations_updated_at
BEFORE UPDATE ON public.organizations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_plans_updated_at
BEFORE UPDATE ON public.plans
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at
BEFORE UPDATE ON public.subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at
BEFORE UPDATE ON public.invoices
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample organization and update existing data
INSERT INTO public.organizations (id, name, slug) 
VALUES ('550e8400-e29b-41d4-a716-446655440000', 'EvolucionaSEO', 'evolucionaseo');

-- Update profiles to have org_id
UPDATE public.profiles SET org_id = '550e8400-e29b-41d4-a716-446655440000' WHERE org_id IS NULL;

-- Update accounts to have org_id  
UPDATE public.accounts SET org_id = '550e8400-e29b-41d4-a716-446655440000' WHERE org_id IS NULL;

-- Update projects to have org_id
UPDATE public.projects SET org_id = '550e8400-e29b-41d4-a716-446655440000' WHERE org_id IS NULL;

-- Make org_id NOT NULL for required tables
ALTER TABLE public.profiles ALTER COLUMN org_id SET NOT NULL;
ALTER TABLE public.accounts ALTER COLUMN org_id SET NOT NULL;
ALTER TABLE public.projects ALTER COLUMN org_id SET NOT NULL;

-- Insert sample plans
INSERT INTO public.plans (name, price_cents, interval, org_id) VALUES
('Básico Mensual', 2999, 'month', '550e8400-e29b-41d4-a716-446655440000'),
('Premium Mensual', 4999, 'month', '550e8400-e29b-41d4-a716-446655440000'),
('Empresarial Mensual', 9999, 'month', '550e8400-e29b-41d4-a716-446655440000'),
('Básico Anual', 29990, 'year', '550e8400-e29b-41d4-a716-446655440000'),
('Premium Anual', 49990, 'year', '550e8400-e29b-41d4-a716-446655440000'),
('Empresarial Anual', 99990, 'year', '550e8400-e29b-41d4-a716-446655440000');

-- Insert sample subscriptions and invoices for demonstration
INSERT INTO public.subscriptions (account_id, plan_id, org_id, status) 
SELECT 
  a.id, 
  p.id, 
  '550e8400-e29b-41d4-a716-446655440000',
  CASE 
    WHEN random() < 0.8 THEN 'active'
    WHEN random() < 0.9 THEN 'trialing'
    ELSE 'past_due'
  END
FROM public.accounts a
CROSS JOIN public.plans p 
WHERE p.interval = 'month'
ORDER BY random()
LIMIT 3;

-- Insert sample invoices
INSERT INTO public.invoices (account_id, subscription_id, org_id, amount_cents, status, invoice_date, paid_at)
SELECT 
  s.account_id,
  s.id,
  s.org_id,
  p.price_cents,
  CASE 
    WHEN random() < 0.85 THEN 'paid'
    WHEN random() < 0.95 THEN 'open'
    ELSE 'past_due'
  END,
  CURRENT_DATE - (random() * 365)::integer,
  CASE 
    WHEN random() < 0.85 THEN now() - (random() * 30)::integer * interval '1 day'
    ELSE NULL
  END
FROM public.subscriptions s
JOIN public.plans p ON s.plan_id = p.id
UNION ALL
-- Add some additional random invoices for the last 12 months
SELECT 
  a.id,
  NULL,
  a.org_id,
  (random() * 50000 + 10000)::integer,
  'paid',
  CURRENT_DATE - (random() * 365)::integer,
  now() - (random() * 365)::integer * interval '1 day'
FROM public.accounts a
CROSS JOIN generate_series(1, 5);