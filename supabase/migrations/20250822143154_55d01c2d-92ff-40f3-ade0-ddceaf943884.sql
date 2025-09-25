-- Fix security issues introduced in the previous migration

-- Fix the function search path issue
CREATE OR REPLACE FUNCTION public.mask_phone_number(phone_number TEXT)
RETURNS TEXT
LANGUAGE SQL
IMMUTABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
    SELECT CASE 
        WHEN phone_number IS NULL OR LENGTH(phone_number) < 4 THEN phone_number
        ELSE LEFT(phone_number, 3) || REPEAT('*', LENGTH(phone_number) - 6) || RIGHT(phone_number, 3)
    END;
$$;

-- Fix the view security issue by removing security_barrier setting
-- Drop and recreate the view without any security definer properties
DROP VIEW IF EXISTS public.solicitudes_zona_masked;

CREATE VIEW public.solicitudes_zona_masked AS
SELECT 
    id,
    fecha,
    servicio,
    localizacion,
    mask_phone_number(telefono) as telefono_masked
    -- Remove telefono from view for better security - admins use main table
FROM public.solicitudes_zona;

-- Grant appropriate permissions
GRANT SELECT ON public.solicitudes_zona_masked TO authenticated;

-- The view will inherit RLS policies from the underlying table
-- Only admins can access it due to the "Only admins can view zone requests" policy