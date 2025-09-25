import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ExternalLink, Edit, Archive, Eye, Search, Filter } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CreateProjectModal } from '@/components/suite/CreateProjectModal';
import { useToast } from '@/hooks/use-toast';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Project {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  created_at: string;
  notes: string | null;
  account_id: string;
  accounts: {
    name: string;
    email: string;
  };
}

export default function Proyectos() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, [profile?.org_id]);

  useEffect(() => {
    filterProjects();
  }, [projects, searchTerm, statusFilter, typeFilter]);

  const fetchProjects = async () => {
    if (!profile?.org_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          id, name, type, status, start_date, created_at, notes, account_id,
          accounts!inner (name, email)
        `)
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

  const filterProjects = () => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.accounts.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.accounts.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(project => project.type === typeFilter);
    }

    setFilteredProjects(filtered);
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
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/suite" className="text-gray-400 hover:text-white">
                Suite
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-400" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Proyectos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader>
            <CardTitle className="text-white">Gestión de Proyectos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-seo-dark rounded w-3/4"></div>
              <div className="h-4 bg-seo-dark rounded w-1/2"></div>
              <div className="h-4 bg-seo-dark rounded w-2/3"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/suite" className="text-gray-400 hover:text-white">
                Suite
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-400" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Proyectos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Gestión de Proyectos</CardTitle>
            <Button 
              onClick={() => setCreateModalOpen(true)} 
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Proyecto
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar proyectos, clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-seo-dark border-seo-blue/20 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px] bg-seo-dark border-seo-blue/20 text-white">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent className="bg-seo-dark border-seo-blue/20">
                    <SelectItem value="all" className="text-white">Todos</SelectItem>
                    <SelectItem value="active" className="text-white">Activo</SelectItem>
                    <SelectItem value="paused" className="text-white">Pausado</SelectItem>
                    <SelectItem value="completed" className="text-white">Completado</SelectItem>
                    <SelectItem value="archived" className="text-white">Archivado</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[140px] bg-seo-dark border-seo-blue/20 text-white">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent className="bg-seo-dark border-seo-blue/20">
                    <SelectItem value="all" className="text-white">Todos</SelectItem>
                    <SelectItem value="SEO" className="text-white">SEO</SelectItem>
                    <SelectItem value="SEM" className="text-white">SEM</SelectItem>
                    <SelectItem value="WEB" className="text-white">WEB</SelectItem>
                    <SelectItem value="ECOMMERCE" className="text-white">ECOMMERCE</SelectItem>
                    <SelectItem value="FICHA_GOOGLE" className="text-white">FICHA GOOGLE</SelectItem>
                    <SelectItem value="RANK_TO_RENT" className="text-white">RANK TO RENT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Projects Table */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                {projects.length === 0 
                  ? 'No hay proyectos creados. ¡Crea tu primer proyecto!' 
                  : 'No se encontraron proyectos con los filtros aplicados'
                }
              </div>
            ) : (
              <div className="rounded-md border border-seo-blue/20">
                <Table>
                  <TableHeader>
                    <TableRow className="border-seo-blue/20">
                      <TableHead className="text-gray-300">Proyecto</TableHead>
                      <TableHead className="text-gray-300">Cliente</TableHead>
                      <TableHead className="text-gray-300">Tipo</TableHead>
                      <TableHead className="text-gray-300">Estado</TableHead>
                      <TableHead className="text-gray-300">Fecha Inicio</TableHead>
                      <TableHead className="text-gray-300">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map((project) => (
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
                          <div className="text-gray-300">
                            <div className="font-medium">{project.accounts.name}</div>
                            <div className="text-sm text-gray-400">{project.accounts.email}</div>
                          </div>
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
                              <DropdownMenuItem asChild>
                                <Link to={`/suite/accounts/${project.account_id}`} className="text-white hover:bg-seo-blue/20 cursor-pointer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Ver cliente
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
              </div>
            )}

            <div className="text-sm text-gray-400 flex justify-between items-center">
              <span>
                Mostrando {filteredProjects.length} de {projects.length} proyectos
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType=""
        projectTypeLabel=""
        onProjectCreated={handleProjectCreated}
      />
    </>
  );
}