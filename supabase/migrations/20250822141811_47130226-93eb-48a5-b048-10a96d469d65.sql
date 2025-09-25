-- Fix only the conflicting RLS policies in solicitudes_zona
-- Remove the problematic policy that blocks ALL reads (USING false)
-- Remove duplicate INSERT policy

DROP POLICY IF EXISTS "Solo administradores pueden leer" ON public.solicitudes_zona;
-- This policy had USING (false) which blocked ALL reads, even for admins

DROP POLICY IF EXISTS "Permitir inserciones públicas" ON public.solicitudes_zona;  
-- This is a duplicate of "Anyone can insert zone requests"

-- Now solicitudes_zona has clean, consistent policies:
-- "Anyone can insert zone requests" - allows public zone availability requests  
-- "Only admins can view zone requests" - protects customer phone numbers
-- "Only admins can modify zone requests" - prevents unauthorized changes  
-- "Only admins can delete zone requests" - prevents unauthorized deletion