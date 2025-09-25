import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Layout } from '@/components/layout/Layout';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, profile, loading: authLoading, signIn, signUp } = useAuth();
  const { toast } = useToast();

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-seo-blue"></div>
        </div>
      </Layout>
    );
  }

  // Redirect if already logged in and profile is loaded
  if (user && profile) {
    // Redirect based on user role
    if (profile.role === 'client') {
      return <Navigate to="/portal" replace />;
    } else {
      return <Navigate to="/suite" replace />;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, name);
        if (error) {
          toast({
            title: 'Error al registrarse',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Registro exitoso',
            description: 'Por favor, verifica tu email para continuar.',
          });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: 'Error al iniciar sesión',
            description: error.message,
            variant: 'destructive',
          });
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ha ocurrido un error inesperado.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-6">
              <img 
                src="https://agnyfrhzafvfsrbwdfpi.supabase.co/storage/v1/object/public/imagenes-evoluciona//evolucionaseo.png"
                alt="Evoluciona Suite"
                className="h-12 w-auto"
              />
            </div>
            <CardTitle className="text-2xl text-center text-white">
              {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              {isSignUp 
                ? 'Crea tu cuenta para acceder a Evoluciona Suite'
                : 'Accede a tu cuenta de Evoluciona Suite'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={isSignUp}
                    className="bg-seo-dark border-seo-blue/20 text-white"
                    placeholder="Tu nombre completo"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-seo-dark border-seo-blue/20 text-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-seo-dark border-seo-blue/20 text-white"
                  placeholder="••••••••"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
              >
                {loading ? 'Cargando...' : (isSignUp ? 'Registrarse' : 'Iniciar sesión')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-seo-bright hover:text-seo-cyan transition-colors"
              >
                {isSignUp 
                  ? '¿Ya tienes cuenta? Inicia sesión'
                  : '¿No tienes cuenta? Regístrate'
                }
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <Link 
                to="/"
                className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
              >
                Volver al inicio
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}