-- Fix seo_leads table security
-- Currently only allows public inserts but no SELECT access
-- Need to add admin-only SELECT access for marketing personnel

-- Allow only admins to view marketing leads
CREATE POLICY "Only admins can view seo_leads" 
ON public.seo_leads 
FOR SELECT 
USING (is_user_admin(auth.uid()));

-- Allow only admins to update leads if needed
CREATE POLICY "Only admins can update seo_leads" 
ON public.seo_leads 
FOR UPDATE 
USING (is_user_admin(auth.uid()));

-- Allow only admins to delete leads if needed
CREATE POLICY "Only admins can delete seo_leads" 
ON public.seo_leads 
FOR DELETE 
USING (is_user_admin(auth.uid()));