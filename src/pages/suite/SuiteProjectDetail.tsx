import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, FileText, CheckSquare, CreditCard, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ProjectTasks } from '@/components/suite/projects/ProjectTasks';
import { ProjectBilling } from '@/components/suite/projects/ProjectBilling';
import { ProjectContext } from '@/components/suite/projects/ProjectContext';
import { EditProjectModal } from '@/components/suite/projects/EditProjectModal';

interface ProjectDetail {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  end_date: string | null;
  budget: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  account_id: string;
  account: {
    name: string;
    email: string;
    company: string | null;
  };
}

export default function SuiteProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [tasksCount, setTasksCount] = useState({ total: 0, completed: 0 });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchProjectDetail();
    fetchTasksCount();
  }, [id, profile?.org_id]);

  const fetchProjectDetail = async () => {
    if (!id || !profile?.org_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          id,
          name,
          type,
          status,
          start_date,
          end_date,
          budget,
          notes,
          created_at,
          updated_at,
          account_id,
          account:accounts(name, email, company)
        `)
        .eq('id', id)
        .eq('org_id', profile.org_id)
        .single();

      if (error) throw error;
      setProject(data);
    } catch (error) {
      console.error('Error fetching project detail:', error);
      toast({
        title: 'Error',
        description: 'No se pudo cargar la información del proyecto',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTasksCount = async () => {
    if (!id || !profile?.org_id) return;

    try {
      const { data: allTasks, error: allError } = await supabase
        .from('tasks')
        .select('id, status')
        .eq('project_id', id)
        .eq('org_id', profile.org_id);

      if (allError) throw allError;

      const total = allTasks?.length || 0;
      const completed = allTasks?.filter(task => task.status === 'done').length || 0;

      setTasksCount({ total, completed });
    } catch (error) {
      console.error('Error fetching tasks count:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'paused': return 'Pausado';
      case 'completed': return 'Completado';
      case 'archived': return 'Archivado';
      default: return status;
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number | null) => {
    if (!amount) return '—';
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getCompletionPercentage = () => {
    if (tasksCount.total === 0) return 0;
    return Math.round((tasksCount.completed / tasksCount.total) * 100);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-seo-darkBlue rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-white mb-4">Proyecto no encontrado</h2>
        <Link to="/suite">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/suite" className="text-gray-400 hover:text-white">
                  Suite
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/suite/accounts/${project.account_id}`} className="text-gray-400 hover:text-white">
                  {project.account.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">{project.name}</h1>
            <Badge className={getTypeColor(project.type)}>
              {project.type}
            </Badge>
            <Badge className={getStatusColor(project.status)}>
              {getStatusLabel(project.status)}
            </Badge>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/suite/accounts/${project.account_id}`}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a la cuenta
            </Button>
          </Link>
          <Button 
            onClick={() => setIsEditModalOpen(true)}
            className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
          >
            Editar proyecto
          </Button>
        </div>
      </div>

      <Tabs defaultValue="resumen" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-seo-darkBlue">
          <TabsTrigger value="resumen" className="data-[state=active]:bg-seo-blue">
            <FileText className="w-4 h-4 mr-2" />
            Resumen
          </TabsTrigger>
          <TabsTrigger value="tareas" className="data-[state=active]:bg-seo-blue">
            <CheckSquare className="w-4 h-4 mr-2" />
            Tareas
          </TabsTrigger>
          <TabsTrigger value="facturacion" className="data-[state=active]:bg-seo-blue">
            <CreditCard className="w-4 h-4 mr-2" />
            Facturación
          </TabsTrigger>
          <TabsTrigger value="contexto" className="data-[state=active]:bg-seo-blue">
            <Settings className="w-4 h-4 mr-2" />
            Contexto
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resumen" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Project Details */}
              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Detalles del Proyecto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-400">Tipo</label>
                      <p className="text-white">{project.type}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Estado</label>
                      <p className="text-white">{getStatusLabel(project.status)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Fecha de Inicio</label>
                      <p className="text-white">{formatDate(project.start_date)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Fecha de Fin</label>
                      <p className="text-white">{formatDate(project.end_date)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Presupuesto</label>
                      <p className="text-white">{formatCurrency(project.budget)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Progreso</label>
                      <p className="text-white">{getCompletionPercentage()}% ({tasksCount.completed}/{tasksCount.total} tareas)</p>
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
                    {project.account.company && (
                      <div>
                        <label className="text-sm font-medium text-gray-400">Empresa</label>
                        <p className="text-white">{project.account.company}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* KPIs */}
              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">KPIs del Proyecto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-seo-bright">
                        {getCompletionPercentage()}%
                      </div>
                      <div className="text-sm text-gray-400">Progreso completado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {tasksCount.completed}
                      </div>
                      <div className="text-sm text-gray-400">Tareas completadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {tasksCount.total - tasksCount.completed}
                      </div>
                      <div className="text-sm text-gray-400">Tareas pendientes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tareas">
          <ProjectTasks projectId={id!} onTasksChange={fetchTasksCount} />
        </TabsContent>

        <TabsContent value="facturacion">
          <ProjectBilling accountId={project.account_id} />
        </TabsContent>

        <TabsContent value="contexto">
          <ProjectContext projectType={project.type} projectId={id!} />
        </TabsContent>
      </Tabs>

      <EditProjectModal
        project={project}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onProjectUpdated={() => {
          fetchProjectDetail();
          fetchTasksCount();
        }}
      />
    </div>
  );
}