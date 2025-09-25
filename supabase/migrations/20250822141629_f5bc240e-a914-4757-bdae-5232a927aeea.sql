-- Fix security vulnerability in tecnicos table
-- Current policies allow public access to technician contact information
-- This enables competitors to scrape phone numbers and emails to poach technicians

-- Drop the overly permissive public access policies
DROP POLICY IF EXISTS "Anyone can view approved technicians" ON public.tecnicos;
DROP POLICY IF EXISTS "Permitir lectura pública de técnicos" ON public.tecnicos;

-- Create secure authenticated-user-only access policy for technician data
CREATE POLICY "Only authenticated users can view technicians" 
ON public.tecnicos 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Keep existing admin policies unchanged for management operations
-- "Los administradores pueden ver todos los técnicos" - already exists
-- "Only admins can delete technicians" - already exists  
-- "Only admins can insert technicians" - already exists
-- "Only admins can update technicians" - already exists