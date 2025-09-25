import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ExternalLink, Edit, Archive, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreateProjectModal } from '@/components/suite/CreateProjectModal';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Project {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  created_at: string;
  notes: string | null;
}

interface AccountProjectsListProps {
  accountId: string;
}

export function AccountProjectsList({ accountId }: AccountProjectsListProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [accountId, profile?.org_id]);

  const fetchProjects = async () => {
    if (!accountId || !profile?.org_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id, name, type, status, start_date, created_at, notes')
        .eq('account_id', accountId)
        .eq('org_id', profile.org_id)
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
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SEO':
        return 'bg-seo-blue/20 text-seo-bright';
      case 'SEM':
        return 'bg-seo-cyan/20 text-seo-cyan';
      case 'WEB':
        return 'bg-purple-100 text-purple-800';
      case 'ECOMMERCE':
        return 'bg-orange-100 text-orange-800';
      case 'FICHA_GOOGLE':
        return 'bg-red-100 text-red-800';
      case 'RANK_TO_RENT':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
      month: 'short',
      day: 'numeric'
    });
  };

  const archiveProject = async (projectId: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ status: 'archived' })
        .eq('id', projectId)
        .eq('org_id', profile?.org_id);

      if (error) throw error;

      toast({
        title: 'Proyecto archivado',
        description: 'El proyecto ha sido archivado exitosamente',
      });

      fetchProjects();
    } catch (error) {
      console.error('Error archiving project:', error);
      toast({
        title: 'Error',
        description: 'No se pudo archivar el proyecto',
        variant: 'destructive',
      });
    }
  };

  const handleProjectCreated = () => {
    setCreateModalOpen(false);
    fetchProjects();
  };

  if (loading) {
    return (
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Proyectos</CardTitle>
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
    <>
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Proyectos</CardTitle>
          <Button onClick={() => setCreateModalOpen(true)} className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" />
            Nuevo proyecto
          </Button>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No hay proyectos asociados a esta cuenta
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-seo-blue/20">
                  <TableHead className="text-gray-300">Nombre</TableHead>
                  <TableHead className="text-gray-300">Tipo</TableHead>
                  <TableHead className="text-gray-300">Estado</TableHead>
                  <TableHead className="text-gray-300">Fecha Inicio</TableHead>
                  <TableHead className="text-gray-300">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="border-seo-blue/20 hover:bg-seo-blue/10">
                    <TableCell>
                      <Link 
                        to={`/suite/projects/${project.id}`}
                        className="text-seo-bright hover:text-white transition-colors font-medium flex items-center gap-2"
                      >
                        {project.name}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {formatDate(project.start_date)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                            •••
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-seo-dark border-seo-blue/20">
                          <DropdownMenuItem asChild>
                            <Link to={`/suite/projects/${project.id}`} className="text-white hover:bg-seo-blue/20 cursor-pointer">
                              <Eye className="mr-2 h-4 w-4" />
                              Ver detalles
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-white hover:bg-seo-blue/20">
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          {project.status === 'active' && (
                            <DropdownMenuItem 
                              onClick={() => archiveProject(project.id)}
                              className="text-yellow-400 hover:bg-yellow-500/20"
                            >
                              <Archive className="mr-2 h-4 w-4" />
                              Archivar
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType=""
        projectTypeLabel=""
        accountId={accountId}
        onProjectCreated={handleProjectCreated}
      />
    </>
  );
}