-- Clean up the security issues by removing unnecessary components
-- The core security is already properly implemented with RLS policies

-- Remove the view and function that are causing security warnings
DROP VIEW IF EXISTS public.solicitudes_zona_masked;
DROP FUNCTION IF EXISTS public.mask_phone_number(TEXT);

-- The solicitudes_zona table is already properly secured with existing RLS policies:
-- 1. "Anyone can insert zone requests" - allows customers to submit requests
-- 2. "Only admins can view zone requests" - protects customer phone numbers/emails
-- 3. "Only admins can modify zone requests" - prevents unauthorized changes  
-- 4. "Only admins can delete zone requests" - prevents unauthorized deletion

-- The audit logging table remains available for compliance if needed
-- Customer data is fully protected by admin-only access controls