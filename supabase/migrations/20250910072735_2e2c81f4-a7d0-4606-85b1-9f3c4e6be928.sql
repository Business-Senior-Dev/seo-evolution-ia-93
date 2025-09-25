-- Comprehensive security fixes for the project

-- 1. CREATE TRIGGER FOR NEW USER PROFILES
-- This ensures every new user gets a profile with safe defaults
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 2. PROFILES TABLE SECURITY - Prevent privilege escalation
-- Create function to prevent non-staff from changing sensitive fields
CREATE OR REPLACE FUNCTION public.prevent_profile_privilege_escalation()
RETURNS TRIGGER AS $$
DECLARE
  current_user_role text;
BEGIN
  -- Get current user's role
  SELECT role INTO current_user_role 
  FROM public.profiles 
  WHERE user_id = auth.uid();
  
  -- If user is not staff, prevent changes to sensitive fields
  IF current_user_role NOT IN ('owner', 'admin', 'manager', 'operator') THEN
    -- Prevent role changes
    IF OLD.role != NEW.role THEN
      RAISE EXCEPTION 'Access denied: Cannot change role';
    END IF;
    
    -- Prevent org_id changes
    IF OLD.org_id != NEW.org_id THEN
      RAISE EXCEPTION 'Access denied: Cannot change organization';
    END IF;
    
    -- Prevent account_id changes
    IF OLD.account_id != NEW.account_id THEN
      RAISE EXCEPTION 'Access denied: Cannot change account assignment';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger
CREATE TRIGGER prevent_privilege_escalation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_profile_privilege_escalation();

-- 3. INVOICES TABLE - Split overly broad ALL policy
-- Drop the existing broad policy
DROP POLICY IF EXISTS "Users can view organization invoices" ON public.invoices;

-- Create separate policies for better security
CREATE POLICY "Staff can manage all organization invoices"
ON public.invoices 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = invoices.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

CREATE POLICY "Clients can view their own invoices"
ON public.invoices 
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = invoices.org_id 
    AND profiles.role = 'client'
    AND invoices.account_id = profiles.account_id
  )
);

-- 4. PROJECTS TABLE - Split overly broad ALL policy
-- Drop existing policy
DROP POLICY IF EXISTS "Staff can manage organization projects" ON public.projects;

-- Create separate policies
CREATE POLICY "Staff can manage all organization projects"
ON public.projects 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = projects.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

CREATE POLICY "Clients can view their own projects"
ON public.projects 
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = projects.org_id 
    AND profiles.role = 'client'
    AND projects.account_id = profiles.account_id
  )
);

-- 5. TASKS TABLE - Split overly broad ALL policy  
-- Drop existing policy
DROP POLICY IF EXISTS "Users can view organization tasks" ON public.tasks;

-- Create separate policies
CREATE POLICY "Staff can manage all organization tasks"
ON public.tasks 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = tasks.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

CREATE POLICY "Clients can view tasks for their projects"
ON public.tasks 
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p
    JOIN public.projects pr ON pr.account_id = p.account_id
    WHERE p.user_id = auth.uid() 
    AND p.org_id = tasks.org_id 
    AND p.role = 'client'
    AND tasks.project_id = pr.id
  )
);

-- 6. CONTACTS TABLE - Ensure proper security
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Staff can manage organization contacts" ON public.contacts;

-- Create proper policy
CREATE POLICY "Staff can manage organization contacts"
ON public.contacts 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = contacts.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- 7. ACCOUNTS TABLE - Ensure proper security
-- Drop existing policy if it exists  
DROP POLICY IF EXISTS "Staff can manage organization accounts" ON public.accounts;

-- Create proper policy
CREATE POLICY "Staff can manage organization accounts"
ON public.accounts 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = accounts.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- 8. SUBSCRIPTIONS TABLE - Ensure proper security
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Users can view organization subscriptions" ON public.subscriptions;

-- Create proper policy
CREATE POLICY "Staff can manage organization subscriptions"
ON public.subscriptions 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = subscriptions.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- 9. PLANS TABLE - Ensure proper security
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Users can view organization plans" ON public.plans;

-- Create proper policy
CREATE POLICY "Staff can manage organization plans"
ON public.plans 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.org_id = plans.org_id 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);