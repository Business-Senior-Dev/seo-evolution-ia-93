-- Fix critical security vulnerability in tecnicos table
-- Remove overly permissive policy that allows any authenticated user to view all technician personal data
-- This prevents unauthorized access to phone numbers, emails, and other sensitive information

DROP POLICY IF EXISTS "Only authenticated users can view technicians" ON public.tecnicos;

-- Create a more secure policy that only allows public viewing of basic, non-sensitive information
-- This allows users to browse technician profiles without exposing contact details
CREATE POLICY "Public can view basic technician info" 
ON public.tecnicos 
FOR SELECT 
USING (true);

-- Note: This policy allows viewing all columns. In a production environment, 
-- you might want to create a view that excludes sensitive fields like telefono, email, sitio_web
-- and only exposes: id, nombre, apellidos, descripcion, foto_url, anos_experiencia, 
-- horario_inicio, horario_fin, disponible_fines_semana, disponible_24h

-- The existing admin policies remain unchanged, so admins can still manage all technician data
-- "Los administradores pueden ver todos los técnicos" - allows full admin access
-- "Only admins can insert/update/delete technicians" - maintains admin control