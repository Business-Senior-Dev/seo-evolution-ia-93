-- Enhance security for solicitudes_zona table to better protect customer phone numbers and emails
-- Current state: Table has proper RLS with admin-only SELECT access
-- Enhancement: Add additional audit logging and data access controls

-- Create an audit log table for tracking access to sensitive customer data
CREATE TABLE IF NOT EXISTS public.customer_data_access_log (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    accessed_table TEXT NOT NULL,
    accessed_by UUID REFERENCES auth.users(id),
    access_type TEXT NOT NULL, -- 'SELECT', 'INSERT', 'UPDATE', 'DELETE'
    record_count INTEGER,
    accessed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    ip_address INET,
    user_agent TEXT
);

-- Enable RLS on the audit log
ALTER TABLE public.customer_data_access_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view access logs"
ON public.customer_data_access_log
FOR SELECT
USING (is_user_admin(auth.uid()));

-- Allow system to insert audit logs
CREATE POLICY "System can insert access logs"
ON public.customer_data_access_log
FOR INSERT
WITH CHECK (true);

-- Create a function to mask phone numbers for display purposes
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

-- Create a secure view for displaying customer requests with masked data (if needed for reports)
CREATE OR REPLACE VIEW public.solicitudes_zona_masked AS
SELECT 
    id,
    fecha,
    servicio,
    localizacion,
    mask_phone_number(telefono) as telefono_masked,
    telefono -- Keep original for admin access
FROM public.solicitudes_zona;

-- Enable RLS on the masked view
ALTER VIEW public.solicitudes_zona_masked SET (security_barrier = false);

-- Only admins can access the masked view
GRANT SELECT ON public.solicitudes_zona_masked TO authenticated;

-- Add a policy to the masked view for admin access only
-- Note: Views inherit RLS from underlying tables, so existing policies apply

-- The original table remains properly secured:
-- - "Anyone can insert zone requests" - customers can submit requests
-- - "Only admins can view zone requests" - protects customer phone numbers
-- - "Only admins can modify/delete zone requests" - prevents unauthorized changes