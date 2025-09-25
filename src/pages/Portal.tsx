import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/hooks/useAuth';

export default function Portal() {
  const { profile } = useAuth();

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Portal del Cliente</h1>
              <p className="text-gray-400">
                Bienvenido, {profile?.name || profile?.email}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Mis Proyectos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Proyectos activos y completados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-seo-bright">3</div>
                </CardContent>
              </Card>

              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Facturas</CardTitle>
                  <CardDescription className="text-gray-400">
                    Gestión de pagos y facturas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-seo-bright">2</div>
                </CardContent>
              </Card>

              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Soporte</CardTitle>
                  <CardDescription className="text-gray-400">
                    Tickets y consultas abiertas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-seo-bright">0</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white">Próximas Reuniones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-400">
                  No tienes reuniones programadas próximamente.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}