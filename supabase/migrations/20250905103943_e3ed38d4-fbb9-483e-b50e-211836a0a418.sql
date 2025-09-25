-- Create user profiles table with roles
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('owner', 'admin', 'manager', 'operator', 'client')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create leads table for form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  fuente TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for leads (public insert)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create local audits table
CREATE TABLE public.local_audits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT,
  location TEXT,
  place_id TEXT,
  nombre_negocio TEXT,
  direccion TEXT,
  num_resenas INTEGER,
  valoracion DECIMAL,
  categoria TEXT,
  telefono TEXT,
  sitio_web TEXT,
  horarios_configurados BOOLEAN,
  fotos_perfil INTEGER,
  posts_gmb INTEGER,
  respuestas_resenas DECIMAL,
  palabras_clave_descripcion INTEGER,
  puntuacion INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for local audits
ALTER TABLE public.local_audits ENABLE ROW LEVEL SECURITY;

-- Create policy for local audits (public insert)
CREATE POLICY "Anyone can insert local audits" 
ON public.local_audits 
FOR INSERT 
WITH CHECK (true);

-- Create lead users table
CREATE TABLE public.lead_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_nombre TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_telefono TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for lead users
ALTER TABLE public.lead_users ENABLE ROW LEVEL SECURITY;

-- Create policy for lead users (public insert)
CREATE POLICY "Anyone can insert lead users" 
ON public.lead_users 
FOR INSERT 
WITH CHECK (true);

-- Create zona requests table
CREATE TABLE public.zona_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  servicio TEXT NOT NULL,
  localizacion TEXT NOT NULL,
  telefono TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for zona requests
ALTER TABLE public.zona_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for zona requests (public insert)
CREATE POLICY "Anyone can insert zona requests" 
ON public.zona_requests 
FOR INSERT 
WITH CHECK (true);

-- Create zonas table
CREATE TABLE public.zonas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  servicio TEXT NOT NULL,
  zona TEXT NOT NULL,
  disponible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for zonas
ALTER TABLE public.zonas ENABLE ROW LEVEL SECURITY;

-- Create policy for zonas (public read)
CREATE POLICY "Anyone can read zonas" 
ON public.zonas 
FOR SELECT 
USING (true);

-- Insert some sample zonas
INSERT INTO public.zonas (servicio, zona, disponible) VALUES
('SEO Local', 'Madrid Centro', true),
('SEO Local', 'Barcelona Eixample', true),
('SEO Local', 'Valencia Centro', false),
('SEO Web', 'Sevilla', true),
('SEO Web', 'Bilbao', true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on profiles
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, name, role)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    'client'
  );
  RETURN NEW;
END;
$$;

-- Create trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();