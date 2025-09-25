-- First, create a default organization for new signups
INSERT INTO public.organizations (name, slug) 
VALUES ('Evoluciona SEO', 'evoluciona-seo')
ON CONFLICT DO NOTHING;

-- Update the handle_new_user function to include org_id
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  default_org_id uuid;
BEGIN
  -- Get the default organization ID
  SELECT id INTO default_org_id 
  FROM public.organizations 
  WHERE slug = 'evoluciona-seo' 
  LIMIT 1;
  
  -- If no default org exists, create one
  IF default_org_id IS NULL THEN
    INSERT INTO public.organizations (name, slug)
    VALUES ('Evoluciona SEO', 'evoluciona-seo')
    RETURNING id INTO default_org_id;
  END IF;

  -- Insert the profile with the default organization
  INSERT INTO public.profiles (user_id, email, name, role, org_id)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    'client',
    default_org_id
  );
  
  RETURN NEW;
END;
$$;

-- Ensure the trigger exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();