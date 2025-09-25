-- Check current view definition and completely recreate it without any security definer properties
-- The linter is still detecting security definer properties, so we need to recreate the view

-- Drop the existing view completely
DROP VIEW IF EXISTS public.tecnicos_public;

-- Recreate the view with a clean definition (no security definer properties)
CREATE VIEW public.tecnicos_public AS
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
FROM public.tecnicos;

-- Grant appropriate permissions without using security definer
GRANT SELECT ON public.tecnicos_public TO anon;
GRANT SELECT ON public.tecnicos_public TO authenticated;

-- This view now safely exposes technician profiles while protecting sensitive contact information
-- Public users can browse profiles, authenticated users get the same data, admins access full table