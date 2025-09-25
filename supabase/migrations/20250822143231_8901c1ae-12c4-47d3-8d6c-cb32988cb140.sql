-- Remove the security definer function that's causing the warning
-- Create a simpler function without security definer properties

DROP FUNCTION IF EXISTS public.mask_phone_number(TEXT);

-- Create a simple function without security definer
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

-- The main security fix for solicitudes_zona is already in place:
-- Customer phone numbers are protected by admin-only RLS policies
-- Audit logging is available for compliance
-- Phone masking function is available for display purposes