import { useState, useEffect } from 'react';
import { Plus, FolderOpen, Calendar, User, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  type: string;
  status: string;
  budget: number | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  account_id: string;
  accounts: {
    name: string;
    company: string | null;
  };
}

interface ProjectsListProps {
  serviceType: string;
  onCreateProject?: () => void;
}

export function ProjectsList({ serviceType, onCreateProject }: ProjectsListProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [serviceType, profile?.org_id]);

  const fetchProjects = async () => {
    if (!profile?.org_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          accounts (
            name,
            company
          )
        `)
        .eq('org_id', profile.org_id)
        .eq('type', serviceType)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los proyectos',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'paused': return 'Pausado';
      case 'completed': return 'Completado';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatBudget = (budget: number | null) => {
    if (!budget) return '—';
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(budget);
  };

  if (loading) {
    return (
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Proyectos de {serviceType}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-seo-dark rounded w-3/4"></div>
            <div className="h-4 bg-seo-dark rounded w-1/2"></div>
            <div className="h-4 bg-seo-dark rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-seo-darkBlue border-seo-blue/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Proyectos de {serviceType}</CardTitle>
        <Button 
          onClick={onCreateProject}
          className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Nuevo proyecto
        </Button>
      </CardHeader>
      <CardContent>
        {projects.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <FolderOpen className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No hay proyectos de {serviceType}</p>
            <p className="text-sm">Crea tu primer proyecto para comenzar</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {projects.map((project) => (
              <Card key={project.id} className="bg-seo-dark border-seo-blue/20 hover:border-seo-blue/40 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {project.accounts?.company || project.accounts?.name}
                      </p>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Inicio: {formatDate(project.start_date)}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Euro className="mr-2 h-4 w-4" />
                      <span>Presupuesto: {formatBudget(project.budget)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs">
                      Creado: {formatDate(project.created_at)}
                    </span>
                    <Link 
                      to={`/suite/projects/${project.id}`}
                      className="text-seo-cyan hover:text-seo-bright transition-colors text-sm font-medium"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}