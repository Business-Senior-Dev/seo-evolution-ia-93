import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';

export default function Unauthorized() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Acceso Denegado</CardTitle>
            <CardDescription className="text-gray-400">
              No tienes permisos para acceder a esta sección
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300">
              Contacta con tu administrador si crees que esto es un error.
            </p>
            <div className="flex flex-col space-y-2">
              <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan">
                <Link to="/">Volver al inicio</Link>
              </Button>
              <Button asChild variant="outline" className="border-seo-blue/20 text-gray-300">
                <Link to="/portal">Ir al portal del cliente</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}