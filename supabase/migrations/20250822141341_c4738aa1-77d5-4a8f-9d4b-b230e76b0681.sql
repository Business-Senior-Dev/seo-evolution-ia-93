-- Fix critical security vulnerability in profesionales_solicitudes table
-- Current policy allows ANY authenticated user to view all professional applications
-- This exposes sensitive PII and enables competitor data theft

-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Solo usuarios autenticados pueden ver solicitudes" ON public.profesionales_solicitudes;

-- Create secure admin-only access policy for professional applications
CREATE POLICY "Only admins can view professional applications" 
ON public.profesionales_solicitudes 
FOR SELECT 
USING (is_user_admin(auth.uid()));

-- Add admin-only policies for UPDATE and DELETE operations (currently blocked)
CREATE POLICY "Only admins can update professional applications" 
ON public.profesionales_solicitudes 
FOR UPDATE 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can delete professional applications" 
ON public.profesionales_solicitudes 
FOR DELETE 
USING (is_user_admin(auth.uid()));

-- Keep existing INSERT policy unchanged - allows public professional applications
-- "Permitir inserciones de solicitudes de profesionales" already exists and is correct