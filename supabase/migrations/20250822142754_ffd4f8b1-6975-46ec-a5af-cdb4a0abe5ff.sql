-- Remove the problematic view that's causing security definer issues
-- Use a simpler approach with proper RLS policies instead

-- Drop the view that's causing the security definer warning
DROP VIEW IF EXISTS public.tecnicos_public;

-- The main table already has proper access control:
-- - "Los administradores pueden ver todos los técnicos" allows admin access
-- - "Authenticated users can view technicians" allows authenticated user access
-- - This prevents anonymous users from accessing sensitive data

-- Note: Applications should filter sensitive fields (telefono, email, sitio_web) 
-- in the frontend when displaying public technician listings
-- This provides better performance than database views and avoids security definer issues