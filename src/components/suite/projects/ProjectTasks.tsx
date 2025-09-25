import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Calendar, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string | null;
  due_date: string | null;
  created_at: string;
  assigned_to: string | null;
}

interface ProjectTasksProps {
  projectId: string;
  onTasksChange?: () => void;
}

export function ProjectTasks({ projectId, onTasksChange }: ProjectTasksProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    due_date: '',
  });

  useEffect(() => {
    fetchTasks();
  }, [projectId, profile?.org_id]);

  const fetchTasks = async () => {
    if (!projectId || !profile?.org_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('project_id', projectId)
        .eq('org_id', profile.org_id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las tareas',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const createTask = async () => {
    if (!newTask.title || !profile?.org_id) return;

    try {
      const { error } = await supabase
        .from('tasks')
        .insert({
          project_id: projectId,
          title: newTask.title,
          description: newTask.description || null,
          status: newTask.status,
          priority: newTask.priority,
          due_date: newTask.due_date || null,
          org_id: profile.org_id,
          created_by: profile.id,
        });

      if (error) throw error;

      toast({
        title: 'Tarea creada',
        description: 'La tarea ha sido creada exitosamente',
      });

      setNewTask({
        title: '',
        description: '',
        status: 'pending',
        priority: 'medium',
        due_date: '',
      });
      setCreateModalOpen(false);
      fetchTasks();
      onTasksChange?.();
    } catch (error) {
      console.error('Error creating task:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear la tarea',
        variant: 'destructive',
      });
    }
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update({ status: newStatus })
        .eq('id', taskId)
        .eq('org_id', profile?.org_id);

      if (error) throw error;

      toast({
        title: 'Estado actualizado',
        description: 'El estado de la tarea ha sido actualizado',
      });

      fetchTasks();
      onTasksChange?.();
    } catch (error) {
      console.error('Error updating task status:', error);
      toast({
        title: 'Error',
        description: 'No se pudo actualizar el estado',
        variant: 'destructive',
      });
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)
        .eq('org_id', profile?.org_id);

      if (error) throw error;

      toast({
        title: 'Tarea eliminada',
        description: 'La tarea ha sido eliminada',
      });

      fetchTasks();
      onTasksChange?.();
    } catch (error) {
      console.error('Error deleting task:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la tarea',
        variant: 'destructive',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-gray-500/20 text-gray-400';
      case 'in_progress':
        return 'bg-blue-500/20 text-blue-400';
      case 'blocked':
        return 'bg-red-500/20 text-red-400';
      case 'done':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string | null) => {
    switch (priority) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'blocked': return 'Bloqueada';
      case 'done': return 'Terminada';
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

  if (loading) {
    return (
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Tareas</CardTitle>
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
        <CardTitle className="text-white">Gestión de Tareas</CardTitle>
        <Dialog open={createModalOpen} onOpenChange={setCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              <Plus className="mr-2 h-4 w-4" />
              Nueva tarea
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-seo-darkBlue border-seo-blue/20">
            <DialogHeader>
              <DialogTitle className="text-white">Crear Nueva Tarea</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-300">Título *</Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="bg-seo-dark border-seo-blue/20 text-white"
                  placeholder="Título de la tarea"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-300">Descripción</Label>
                <Textarea
                  id="description"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="bg-seo-dark border-seo-blue/20 text-white"
                  placeholder="Descripción de la tarea"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Estado</Label>
                  <Select value={newTask.status} onValueChange={(value) => setNewTask({ ...newTask, status: value })}>
                    <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-seo-dark border-seo-blue/20">
                      <SelectItem value="pending">Pendiente</SelectItem>
                      <SelectItem value="in_progress">En progreso</SelectItem>
                      <SelectItem value="blocked">Bloqueada</SelectItem>
                      <SelectItem value="done">Terminada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-gray-300">Prioridad</Label>
                  <Select value={newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value })}>
                    <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-seo-dark border-seo-blue/20">
                      <SelectItem value="low">Baja</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="due_date" className="text-gray-300">Fecha límite</Label>
                <Input
                  id="due_date"
                  type="date"
                  value={newTask.due_date}
                  onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
                  className="bg-seo-dark border-seo-blue/20 text-white"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setCreateModalOpen(false)}
                  className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/20"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={createTask} 
                  disabled={!newTask.title}
                  className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
                >
                  Crear tarea
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No hay tareas registradas todavía
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-seo-blue/20">
                <TableHead className="text-gray-300">Título</TableHead>
                <TableHead className="text-gray-300">Estado</TableHead>
                <TableHead className="text-gray-300">Prioridad</TableHead>
                <TableHead className="text-gray-300">Fecha límite</TableHead>
                <TableHead className="text-gray-300">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="border-seo-blue/20 hover:bg-seo-blue/10">
                  <TableCell>
                    <div>
                      <p className="text-white font-medium">{task.title}</p>
                      {task.description && (
                        <p className="text-gray-400 text-sm mt-1">{task.description}</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select value={task.status} onValueChange={(value) => updateTaskStatus(task.id, value)}>
                      <SelectTrigger className="w-auto bg-transparent border-none p-0">
                        <Badge className={getStatusColor(task.status)}>
                          {getStatusLabel(task.status)}
                        </Badge>
                      </SelectTrigger>
                      <SelectContent className="bg-seo-dark border-seo-blue/20">
                        <SelectItem value="pending">Pendiente</SelectItem>
                        <SelectItem value="in_progress">En progreso</SelectItem>
                        <SelectItem value="blocked">Bloqueada</SelectItem>
                        <SelectItem value="done">Terminada</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority === 'low' ? 'Baja' : 
                       task.priority === 'medium' ? 'Media' : 
                       task.priority === 'high' ? 'Alta' : '—'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {formatDate(task.due_date)}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteTask(task.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}