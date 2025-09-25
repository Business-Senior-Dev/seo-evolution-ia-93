import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProjectDetail() {
  const { id } = useParams();

  // This would normally fetch project data from the database
  const project = {
    id,
    name: "Proyecto SEO - TechCorp Solutions",
    type: "SEO",
    status: "active",
    startDate: "2024-01-15",
    account: {
      name: "TechCorp Solutions",
      email: "contact@techcorp.com",
      company: "TechCorp Inc."
    },
    notes: "Proyecto de optimización SEO para mejorar el posicionamiento en Google.",
    createdAt: "2024-01-10"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SEO':
        return 'bg-seo-blue/20 text-seo-bright border-seo-blue/50';
      case 'SEM':
        return 'bg-seo-cyan/20 text-seo-cyan border-seo-cyan/50';
      case 'WEB':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'ECOMMERCE':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'FICHA_GOOGLE':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'RANK_TO_RENT':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/20"
          >
            <Link to="/suite">
              <ArrowLeft size={16} className="mr-2" />
              Volver al Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">{project.name}</h1>
            <p className="text-gray-400">ID: {project.id}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Badge className={getTypeColor(project.type)}>
            {project.type}
          </Badge>
          <Badge className={getStatusColor(project.status)}>
            {project.status === 'active' ? 'Activo' : 
             project.status === 'paused' ? 'Pausado' :
             project.status === 'completed' ? 'Completado' : 'Cancelado'}
          </Badge>
        </div>
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Details Card */}
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="mr-2" size={20} />
                Detalles del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-400">Tipo</label>
                  <p className="text-white">{project.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Estado</label>
                  <p className="text-white capitalize">{project.status}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Fecha de Inicio</label>
                  <p className="text-white">{project.startDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Creado</label>
                  <p className="text-white">{project.createdAt}</p>
                </div>
              </div>
              
              {project.notes && (
                <div>
                  <label className="text-sm font-medium text-gray-400">Notas</label>
                  <p className="text-white mt-1">{project.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tasks/Progress */}
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white">Tareas del Proyecto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-seo-dark rounded-lg">
                  <span className="text-gray-300">Análisis inicial de keywords</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    Completado
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-seo-dark rounded-lg">
                  <span className="text-gray-300">Optimización on-page</span>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                    En progreso
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-seo-dark rounded-lg">
                  <span className="text-gray-300">Link building</span>
                  <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/50">
                    Pendiente
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Client Info */}
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="mr-2" size={20} />
                Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium text-gray-400">Nombre</label>
                  <p className="text-white">{project.account.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <p className="text-white">{project.account.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Empresa</label>
                  <p className="text-white">{project.account.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white">Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
                Editar Proyecto
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-seo-blue/20 text-gray-300 hover:bg-seo-blue/20"
              >
                Generar Reporte
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20"
              >
                Pausar Proyecto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}