import { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Plus, 
  Paperclip,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const ticketSchema = z.object({
  title: z.string().min(1, 'El asunto es obligatorio'),
  description: z.string().min(1, 'La descripción es obligatoria'),
});

type TicketFormData = z.infer<typeof ticketSchema>;

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
  project: {
    name: string;
  };
}

export default function PortalSupport() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [tickets, setTickets] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  useEffect(() => {
    if (profile?.account_id) {
      fetchTickets();
    }
  }, [profile]);

  const fetchTickets = async () => {
    if (!profile?.account_id) return;

    setLoading(true);
    try {
      // First get project IDs for this account
      const { data: projectIds, error: projectError } = await supabase
        .from('projects')
        .select('id')
        .eq('account_id', profile.account_id);

      if (projectError) throw projectError;

      const ids = projectIds?.map(p => p.id) || [];
      
      if (ids.length === 0) {
        setTickets([]);
        return;
      }

      const { data, error } = await supabase
        .from('tasks')
        .select(`
          *,
          project:projects(name)
        `)
        .eq('org_id', profile.org_id)
        .in('project_id', ids)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los tickets',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: TicketFormData) => {
    if (!profile?.account_id || !profile?.org_id) return;

    setSubmitting(true);
    try {
      // Find or create a support project
      let supportProject;
      
      const { data: existingProject } = await supabase
        .from('projects')
        .select('id')
        .eq('account_id', profile.account_id)
        .eq('name', `Soporte / ${profile.name || 'Cliente'}`)
        .single();

      if (existingProject) {
        supportProject = existingProject;
      } else {
        // Create support project
        const { data: newProject, error: projectError } = await supabase
          .from('projects')
          .insert({
            name: `Soporte / ${profile.name || 'Cliente'}`,
            type: 'SUPPORT',
            status: 'active',
            account_id: profile.account_id,
            org_id: profile.org_id,
            created_by: profile.user_id,
          })
          .select()
          .single();

        if (projectError) throw projectError;
        supportProject = newProject;
      }

      // Create the task/ticket
      const { error: taskError } = await supabase
        .from('tasks')
        .insert({
          project_id: supportProject.id,
          org_id: profile.org_id,
          title: data.title,
          description: data.description,
          status: 'pending',
          priority: 'medium',
          created_by: profile.user_id,
        });

      if (taskError) throw taskError;

      toast({
        title: 'Éxito',
        description: 'Ticket creado correctamente. Te contactaremos pronto.',
      });

      setDialogOpen(false);
      form.reset();
      fetchTickets();

    } catch (error) {
      console.error('Error creating ticket:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear el ticket',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusIcon = (status: string) => {
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'done': return 'Resuelto';
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-seo-darkBlue rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-seo-darkBlue rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const openTickets = tickets.filter(t => t.status !== 'done');
  const closedTickets = tickets.filter(t => t.status === 'done');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Soporte</h1>
          <p className="text-gray-400">
            Gestiona tus consultas y solicitudes de ayuda
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-seo-dark border-seo-blue/20">
            <DialogHeader>
              <DialogTitle className="text-white">Crear nuevo ticket</DialogTitle>
              <DialogDescription className="text-gray-400">
                Describe tu consulta y te ayudaremos lo antes posible.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Asunto</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                          placeholder="Describe brevemente tu consulta"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Descripción</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                          placeholder="Explica en detalle tu consulta o problema..."
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? 'Creando...' : 'Crear ticket'}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Open Tickets */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <HelpCircle className="mr-2 h-5 w-5" />
            Tickets abiertos ({openTickets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {openTickets.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No tienes tickets abiertos
            </div>
          ) : (
            <div className="space-y-4">
              {openTickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="border border-seo-blue/20 rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium text-white">{ticket.title}</h3>
                      <p className="text-sm text-gray-400">
                        Proyecto: {ticket.project.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(ticket.status)}
                          {getStatusLabel(ticket.status)}
                        </span>
                      </Badge>
                    </div>
                  </div>
                  
                  {ticket.description && (
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {ticket.description}
                    </p>
                  )}
                  
                  <div className="text-xs text-gray-500">
                    Creado: {formatDate(ticket.created_at)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Closed Tickets */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            Tickets resueltos ({closedTickets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {closedTickets.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No hay tickets resueltos
            </div>
          ) : (
            <div className="space-y-4">
              {closedTickets.slice(0, 5).map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="border border-seo-blue/20 rounded-lg p-4 space-y-3 opacity-75"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium text-white">{ticket.title}</h3>
                      <p className="text-sm text-gray-400">
                        Proyecto: {ticket.project.name}
                      </p>
                    </div>
                    <Badge className={getStatusColor(ticket.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        {getStatusLabel(ticket.status)}
                      </span>
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Resuelto: {formatDate(ticket.updated_at)}
                  </div>
                </div>
              ))}
              {closedTickets.length > 5 && (
                <p className="text-sm text-gray-400 text-center">
                  Y {closedTickets.length - 5} tickets más resueltos...
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}