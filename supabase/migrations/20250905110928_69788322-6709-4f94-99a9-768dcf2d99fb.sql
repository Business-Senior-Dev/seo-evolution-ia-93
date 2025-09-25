-- Add account_id to profiles for client access control
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS account_id UUID REFERENCES public.accounts(id) ON DELETE SET NULL;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_account_id ON public.profiles(account_id);

-- Create tasks table for support tickets and project management
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  org_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'done')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  due_date DATE,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for tasks
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for tasks
CREATE POLICY "Users can view organization tasks" 
ON public.tasks 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.org_id = tasks.org_id 
  AND (
    profiles.role IN ('owner', 'admin', 'manager', 'operator') 
    OR (profiles.role = 'client' AND tasks.project_id IN (
      SELECT p.id FROM projects p WHERE p.account_id = profiles.account_id
    ))
  )
));

-- Create trigger for tasks updated_at
CREATE TRIGGER update_tasks_updated_at
BEFORE UPDATE ON public.tasks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update RLS policies for client access to projects
DROP POLICY IF EXISTS "Staff can manage organization projects" ON public.projects;
CREATE POLICY "Staff can manage organization projects" 
ON public.projects 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.org_id = projects.org_id 
  AND (
    profiles.role IN ('owner', 'admin', 'manager', 'operator')
    OR (profiles.role = 'client' AND projects.account_id = profiles.account_id)
  )
));

-- Update RLS policies for client access to invoices  
DROP POLICY IF EXISTS "Users can view organization invoices" ON public.invoices;
CREATE POLICY "Users can view organization invoices" 
ON public.invoices 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.org_id = invoices.org_id 
  AND (
    profiles.role IN ('owner', 'admin', 'manager', 'operator')
    OR (profiles.role = 'client' AND invoices.account_id = profiles.account_id)
  )
));

-- Create client dashboard metrics function
CREATE OR REPLACE FUNCTION public.get_client_dashboard_metrics(client_account_uuid UUID, org_uuid UUID)
RETURNS TABLE (
  paid_ytd_cents INTEGER,
  pending_cents INTEGER,
  active_projects_count INTEGER,
  open_tasks_count INTEGER
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  WITH paid_ytd AS (
    SELECT COALESCE(SUM(amount_cents), 0)::INTEGER as paid
    FROM invoices
    WHERE account_id = client_account_uuid 
    AND org_id = org_uuid
    AND status = 'paid'
    AND EXTRACT(YEAR FROM invoice_date) = EXTRACT(YEAR FROM CURRENT_DATE)
  ),
  pending_amount AS (
    SELECT COALESCE(SUM(amount_cents), 0)::INTEGER as pending
    FROM invoices
    WHERE account_id = client_account_uuid 
    AND org_id = org_uuid
    AND status IN ('open', 'past_due')
  ),
  active_projects AS (
    SELECT COUNT(*)::INTEGER as count
    FROM projects
    WHERE account_id = client_account_uuid 
    AND org_id = org_uuid
    AND status = 'active'
  ),
  open_tasks AS (
    SELECT COUNT(*)::INTEGER as count
    FROM tasks t
    JOIN projects p ON t.project_id = p.id
    WHERE p.account_id = client_account_uuid 
    AND t.org_id = org_uuid
    AND t.status != 'done'
  )
  SELECT 
    py.paid,
    pa.pending,
    ap.count,
    ot.count
  FROM paid_ytd py, pending_amount pa, active_projects ap, open_tasks ot;
END;
$$;