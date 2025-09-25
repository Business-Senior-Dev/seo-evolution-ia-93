-- Fix critical security vulnerability in property_inquiries table
-- Current policy allows ANY authenticated user to view all property inquiries
-- This exposes sensitive customer PII and violates privacy

-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Allow authenticated users to view inquiries" ON public.property_inquiries;

-- Create secure admin-only access policy for property inquiries
CREATE POLICY "Only admins can view property inquiries" 
ON public.property_inquiries 
FOR SELECT 
USING (is_user_admin(auth.uid()));

-- Add admin-only policies for UPDATE and DELETE operations
CREATE POLICY "Only admins can update property inquiries" 
ON public.property_inquiries 
FOR UPDATE 
USING (is_user_admin(auth.uid()));

CREATE POLICY "Only admins can delete property inquiries" 
ON public.property_inquiries 
FOR DELETE 
USING (is_user_admin(auth.uid()));

-- Keep existing INSERT policy unchanged - allows public property inquiries
-- "Allow anyone to insert inquiries" already exists and is correct for lead capture