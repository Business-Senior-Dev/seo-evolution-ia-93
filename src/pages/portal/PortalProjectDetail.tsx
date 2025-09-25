import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Tag,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from '@/hooks/use-toast';

interface ProjectDetail {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  end_date: string | null;
  notes: string | null;
  budget: number | null;
  created_at: string;
}

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  created_at: string;
}

export default function PortalProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && profile?.account_id) {
      fetchProjectDetail();
    }
  }, [id, profile]);

  const fetchProjectDetail = async () => {
    if (!id || !profile?.account_id) return;

    setLoading(true);
    try {
      // Fetch project details
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .eq('account_id', profile.account_id)
        .single();

      if (projectError) throw projectError;

      // Fetch project tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('tasks')
        .select('*')
        .eq('project_id', id)
        .order('created_at', { ascending: false });

      if (tasksError) throw tasksError;

      setProject(projectData);
      setTasks(tasksData || []);
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

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'seo': return 'bg-green-100 text-green-800';
      case 'sem': return 'bg-blue-100 text-blue-800';
      case 'web': return 'bg-purple-100 text-purple-800';
      case 'ecommerce': return 'bg-orange-100 text-orange-800';
      case 'ficha_google': return 'bg-red-100 text-red-800';
      case 'rank_to_rent': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-400" />;
      case 'in_progress':
        return <AlertCircle className="h-4 w-4 text-blue-400" />;
      case 'done':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'done': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-seo-darkBlue rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-white mb-4">Proyecto no encontrado</h2>
        <Link to="/portal/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a proyectos
          </Button>
        </Link>
      </div>
    );
  }

  const completedTasks = tasks.filter(t => t.status === 'done').length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/portal" className="text-gray-400 hover:text-white">
                  Portal
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/portal/projects" className="text-gray-400 hover:text-white">
                  Proyectos
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
              {project.status}
            </Badge>
          </div>
        </div>
        
        <Link to="/portal/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>
      </div>

      {/* Project Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-seo-darkBlue border-seo-blue/20">
          <CardHeader>
            <CardTitle className="text-white">Resumen del proyecto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-300">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm">
                  Inicio: {formatDate(project.start_date)}
                </span>
              </div>
              {project.end_date && (
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm">
                    Fin: {formatDate(project.end_date)}
                  </span>
                </div>
              )}
            </div>

            {project.notes && (
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Descripción</h4>
                <p className="text-gray-300">{project.notes}</p>
              </div>
            )}

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">
                Progreso de tareas ({completedTasks}/{totalTasks})
              </h4>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-seo-blue h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {progressPercentage.toFixed(0)}% completado
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader>
            <CardTitle className="text-white">Información adicional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Tipo de proyecto</p>
              <p className="text-white font-medium">{project.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Estado actual</p>
              <p className="text-white font-medium">{project.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Fecha de creación</p>
              <p className="text-white font-medium">{formatDate(project.created_at)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Table */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Tareas del proyecto ({tasks.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {tasks.length === 0 ? (
            <div className="py-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                No hay tareas
              </h3>
              <p className="text-gray-400">
                Este proyecto aún no tiene tareas asignadas.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-seo-blue/20">
                    <TableHead className="text-gray-300">Tarea</TableHead>
                    <TableHead className="text-gray-300">Estado</TableHead>
                    <TableHead className="text-gray-300">Prioridad</TableHead>
                    <TableHead className="text-gray-300">Vencimiento</TableHead>
                    <TableHead className="text-gray-300">Creada</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id} className="border-seo-blue/20">
                      <TableCell>
                        <div>
                          <p className="font-medium text-white">{task.title}</p>
                          {task.description && (
                            <p className="text-sm text-gray-400 line-clamp-1">
                              {task.description}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTaskStatusColor(task.status)}>
                          <span className="flex items-center gap-1">
                            {getTaskStatusIcon(task.status)}
                            {task.status === 'pending' ? 'Pendiente' : 
                             task.status === 'in_progress' ? 'En progreso' : 'Completada'}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority === 'high' ? 'Alta' : 
                           task.priority === 'medium' ? 'Media' : 'Baja'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {formatDate(task.due_date)}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {formatDate(task.created_at)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}