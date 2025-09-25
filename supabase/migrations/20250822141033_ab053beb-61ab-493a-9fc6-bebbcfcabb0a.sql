-- Fix remaining security issues from linter

-- Add missing RLS policy for seo_local_audits table
CREATE POLICY "Only admins can view seo_local_audits" 
ON public.seo_local_audits 
FOR SELECT 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can update seo_local_audits" 
ON public.seo_local_audits 
FOR UPDATE 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can delete seo_local_audits" 
ON public.seo_local_audits 
FOR DELETE 
USING (is_user_admin(auth.uid()));

-- Fix function search_path security issues
-- Update security definer functions to have fixed search_path

ALTER FUNCTION public.is_admin(uuid) SET search_path = 'public, pg_temp';
ALTER FUNCTION public.add_admin_user(uuid, text) SET search_path = 'public, pg_temp';
ALTER FUNCTION public.aprobar_tecnico_pendiente(uuid) SET search_path = 'public, pg_temp';
ALTER FUNCTION public.get_user_role(uuid) SET search_path = 'public, pg_temp';
ALTER FUNCTION public.is_user_admin(uuid) SET search_path = 'public, pg_temp';