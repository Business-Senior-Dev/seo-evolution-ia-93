-- Fix critical security vulnerability in clientes table
-- Current policies allow ANY authenticated user to access all customer data
-- This is a major data breach risk - must restrict to admin-only access

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Solo usuarios autenticados pueden ver clientes" ON public.clientes;
DROP POLICY IF EXISTS "Solo usuarios autenticados pueden actualizar clientes" ON public.clientes;  
DROP POLICY IF EXISTS "Solo usuarios autenticados pueden eliminar clientes" ON public.clientes;
DROP POLICY IF EXISTS "Solo usuarios autenticados pueden insertar clientes" ON public.clientes;

-- Create secure admin-only policies for customer data protection
CREATE POLICY "Only admins can view customer data" 
ON public.clientes 
FOR SELECT 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can update customer data" 
ON public.clientes 
FOR UPDATE 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can delete customer data" 
ON public.clientes 
FOR DELETE 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can insert customer data" 
ON public.clientes 
FOR INSERT 
WITH CHECK (is_user_admin(auth.uid()));