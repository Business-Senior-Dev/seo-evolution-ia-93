-- Add RLS policies for leads table to allow staff access while maintaining security

-- Allow staff members to view leads from their organization
CREATE POLICY "Staff can view leads" 
ON public.leads 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Allow staff members to update leads (for lead qualification, notes, etc.)
CREATE POLICY "Staff can update leads" 
ON public.leads 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);

-- Allow staff members to delete leads (for data management)
CREATE POLICY "Staff can delete leads" 
ON public.leads 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 
    FROM public.profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role IN ('owner', 'admin', 'manager', 'operator')
  )
);