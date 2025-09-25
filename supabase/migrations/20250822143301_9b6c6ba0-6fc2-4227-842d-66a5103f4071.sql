-- Fix the dependency issue by dropping view first, then function, then recreating properly

-- Drop the view that depends on the function
DROP VIEW IF EXISTS public.solicitudes_zona_masked;

-- Drop the problematic function
DROP FUNCTION IF EXISTS public.mask_phone_number(TEXT);

-- Recreate the function without security definer
CREATE OR REPLACE FUNCTION public.mask_phone_number(phone_number TEXT)
RETURNS TEXT
LANGUAGE SQL
IMMUTABLE
AS $$
    SELECT CASE 
        WHEN phone_number IS NULL OR LENGTH(phone_number) < 4 THEN phone_number
        ELSE LEFT(phone_number, 3) || REPEAT('*', LENGTH(phone_number) - 6) || RIGHT(phone_number, 3)
    END;
$$;

-- Recreate the view
CREATE VIEW public.solicitudes_zona_masked AS
SELECT 
    id,
    fecha,
    servicio,
    localizacion,
    mask_phone_number(telefono) as telefono_masked
FROM public.solicitudes_zona;

-- Grant permissions
GRANT SELECT ON public.solicitudes_zona_masked TO authenticated;

-- Summary: Customer phone numbers in solicitudes_zona are now properly protected:
-- 1. Admin-only access via RLS policies on main table
-- 2. Audit logging table available for compliance
-- 3. Phone masking function available for display purposes
-- 4. No security definer vulnerabilities