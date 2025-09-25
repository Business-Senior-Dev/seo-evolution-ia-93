-- Create accounts table
CREATE TABLE public.accounts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  company TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('SEO', 'SEM', 'WEB', 'ECOMMERCE', 'FICHA_GOOGLE', 'RANK_TO_RENT')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed', 'cancelled')),
  start_date DATE,
  end_date DATE,
  notes TEXT,
  budget DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for accounts
CREATE POLICY "Staff can manage accounts" 
ON public.accounts 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Create policies for projects
CREATE POLICY "Staff can manage projects" 
ON public.projects 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_accounts_updated_at
BEFORE UPDATE ON public.accounts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample accounts for testing
INSERT INTO public.accounts (name, email, company, created_by) VALUES
('TechCorp Solutions', 'contact@techcorp.com', 'TechCorp Inc.', (SELECT id FROM auth.users LIMIT 1)),
('LocalBiz Restaurant', 'info@localbiz.com', 'LocalBiz S.L.', (SELECT id FROM auth.users LIMIT 1)),
('EcommercePlus Store', 'admin@ecommerceplus.com', 'EcommercePlus Ltd.', (SELECT id FROM auth.users LIMIT 1)),
('Digital Marketing Pro', 'hello@digitalmarketing.com', 'DMP Agency', (SELECT id FROM auth.users LIMIT 1)),
('StartupXYZ', 'team@startupxyz.com', 'StartupXYZ S.A.', (SELECT id FROM auth.users LIMIT 1));