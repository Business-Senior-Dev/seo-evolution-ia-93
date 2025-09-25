-- Fix critical security vulnerabilities with conflicting RLS policies
-- solicitudes_zona has conflicting SELECT policies that create confusion and potential exposure
-- seo_local_audits needs consistent admin-only protection

-- Fix solicitudes_zona table - remove conflicting and duplicate policies
DROP POLICY IF EXISTS "Solo administradores pueden leer" ON public.solicitudes_zona;
-- This policy had USING (false) which blocked ALL reads, even for admins

DROP POLICY IF EXISTS "Permitir inserciones públicas" ON public.solicitudes_zona;  
-- This is a duplicate of "Anyone can insert zone requests"

-- Ensure clean, consistent policies for solicitudes_zona
-- Keep existing good policies:
-- "Anyone can insert zone requests" - allows public zone availability requests
-- "Only admins can view zone requests" - protects customer phone numbers
-- "Only admins can modify zone requests" - prevents unauthorized changes  
-- "Only admins can delete zone requests" - prevents unauthorized deletion

-- Add missing INSERT policy for seo_local_audits (currently missing)
CREATE POLICY "Allow public inserts to seo_local_audits" 
ON public.seo_local_audits 
FOR INSERT 
WITH CHECK (true);

-- Verify all customer data protection policies are in place
-- Both tables now have:
-- - Public INSERT (for lead capture forms)
-- - Admin-only SELECT/UPDATE/DELETE (protects customer PII)