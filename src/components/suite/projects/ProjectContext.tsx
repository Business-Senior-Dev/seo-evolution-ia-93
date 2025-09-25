import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Target, Globe, ShoppingCart, MapPin, Building } from 'lucide-react';

interface ProjectContextProps {
  projectType: string;
  projectId: string;
}

export function ProjectContext({ projectType, projectId }: ProjectContextProps) {
  const getContextContent = () => {
    switch (projectType) {
      case 'SEO':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Search className="mr-2" size={20} />
                  Keywords objetivo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay keywords configuradas todavía
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Aquí puedes gestionar las palabras clave objetivo del proyecto SEO:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Investigación de keywords</li>
                      <li>Seguimiento de posiciones</li>
                      <li>Análisis de competencia</li>
                      <li>Oportunidades de long-tail</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'SEM':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="mr-2" size={20} />
                  Campañas publicitarias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay campañas configuradas todavía
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Gestión de campañas de publicidad SEM:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Google Ads</li>
                      <li>Microsoft Advertising</li>
                      <li>Seguimiento de conversiones</li>
                      <li>Optimización de pujas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'WEB':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="mr-2" size={20} />
                  Dominio y hosting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay información de dominio configurada
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Información técnica del proyecto web:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Dominio principal</li>
                      <li>Servidor de hosting</li>
                      <li>Certificados SSL</li>
                      <li>Configuración DNS</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'ECOMMERCE':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ShoppingCart className="mr-2" size={20} />
                  Configuración eCommerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay configuración de tienda registrada
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Detalles del proyecto eCommerce:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Plataforma utilizada</li>
                      <li>Pasarelas de pago</li>
                      <li>Configuración logística</li>
                      <li>Integraciones con terceros</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'FICHA_GOOGLE':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Google Business Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay insights de Google Business disponibles
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Análisis de Google Business Profile:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Estadísticas de visualizaciones</li>
                      <li>Gestión de reseñas</li>
                      <li>Posts y actualizaciones</li>
                      <li>Fotos y multimedia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'RANK_TO_RENT':
        return (
          <div className="space-y-6">
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Building className="mr-2" size={20} />
                  Leads y contratos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-400">
                    No hay leads registrados todavía
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Gestión de proyecto Rank to Rent:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>Leads generados</li>
                      <li>Contratos activos</li>
                      <li>Sitios web creados</li>
                      <li>Ingresos por alquiler</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white">Contexto del proyecto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-400">
                Información específica del proyecto no disponible
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="space-y-6">
      {getContextContent()}
      
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Información del proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-seo-blue/20 text-seo-bright">
              Tipo: {projectType}
            </Badge>
            <Badge className="bg-gray-500/20 text-gray-400">
              ID: {projectId}
            </Badge>
          </div>
          <p className="text-gray-400 text-sm">
            Esta sección contiene información específica según el tipo de proyecto. 
            Los datos mostrados se actualizan automáticamente conforme avanza el proyecto.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}