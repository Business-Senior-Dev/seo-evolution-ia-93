import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderOpen, 
  Calendar, 
  Tag,
  ExternalLink
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  end_date: string | null;
  notes: string | null;
  created_at: string;
}

export default function PortalProjects() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile?.account_id) {
      fetchProjects();
    }
  }, [profile]);

  const fetchProjects = async () => {
    if (!profile?.account_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('account_id', profile.account_id)
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

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="grid gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-seo-darkBlue rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Mis Proyectos</h1>
        <p className="text-gray-400">
          Aquí puedes ver todos tus proyectos activos y su estado
        </p>
      </div>

      {projects.length === 0 ? (
        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardContent className="py-12 text-center">
            <FolderOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              No hay proyectos
            </h3>
            <p className="text-gray-400">
              Aún no tienes proyectos asignados. Contacta con tu gestor para más información.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-white flex items-center">
                      <FolderOpen className="mr-2 h-5 w-5" />
                      {project.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Link 
                    to={`/portal/projects/${project.id}`}
                    className="text-seo-bright hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
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
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {project.notes}
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <Link 
                    to={`/portal/projects/${project.id}`}
                    className="text-sm text-seo-bright hover:text-white transition-colors font-medium"
                  >
                    Ver detalles del proyecto →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}