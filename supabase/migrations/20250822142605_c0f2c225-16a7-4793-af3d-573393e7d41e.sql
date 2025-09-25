-- Fix critical security vulnerability: mask sensitive technician personal data from public access
-- Create a secure public view that excludes phone numbers, emails, and websites

-- First, remove the overly permissive public policy
DROP POLICY IF EXISTS "Public can view basic technician info" ON public.tecnicos;

-- Restrict the main tecnicos table to authenticated users only
CREATE POLICY "Authenticated users can view technicians" 
ON public.tecnicos 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Create a secure public view that excludes sensitive personal information
CREATE OR REPLACE VIEW public.tecnicos_public AS
SELECT 
    id,
    nombre,
    apellidos,
    descripcion,
    foto_url,
    anos_experiencia,
    horario_inicio,
    horario_fin,
    disponible_fines_semana,
    disponible_24h,
    created_at,
    updated_at
    -- Deliberately excluding: telefono, email, sitio_web (sensitive data)
FROM public.tecnicos;

-- Enable RLS on the view
ALTER VIEW public.tecnicos_public SET (security_barrier = true);

-- Allow public read access to the secure view
GRANT SELECT ON public.tecnicos_public TO anon;
GRANT SELECT ON public.tecnicos_public TO authenticated;

-- Note: This solution provides:
-- 1. Public can browse technician profiles without accessing contact details
-- 2. Authenticated users can see full details when needed (e.g., for booking)
-- 3. Admins retain full control over all technician data
-- 4. Sensitive contact information is protected from competitors and scrapers