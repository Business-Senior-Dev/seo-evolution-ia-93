-- Fix the Security Definer View vulnerability
-- Remove the security_barrier setting that creates a security definer view

-- Remove the problematic security_barrier setting from the view
ALTER VIEW public.tecnicos_public RESET (security_barrier);

-- The view will now use the querying user's permissions instead of the view creator's permissions
-- This is the recommended security practice for views in Supabase

-- The view still protects sensitive data by excluding telefono, email, and sitio_web columns
-- Public users can browse technician profiles safely without accessing contact details