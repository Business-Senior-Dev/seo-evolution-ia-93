import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface ProjectDetail {
  id: string;
  name: string;
  type: string;
  status: string;
  start_date: string | null;
  end_date: string | null;
  budget: number | null;
  notes: string | null;
}

interface EditProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onProjectUpdated: () => void;
}

export function EditProjectModal({ 
  project, 
  isOpen, 
  onClose, 
  onProjectUpdated 
}: EditProjectModalProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    status: '',
    start_date: '',
    end_date: '',
    budget: '',
    notes: '',
  });

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || '',
        type: project.type || '',
        status: project.status || '',
        start_date: project.start_date || '',
        end_date: project.end_date || '',
        budget: project.budget?.toString() || '',
        notes: project.notes || '',
      });
    }
  }, [project]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project || !profile?.org_id) return;

    setLoading(true);
    try {
      const updateData = {
        name: formData.name,
        type: formData.type,
        status: formData.status,
        start_date: formData.start_date || null,
        end_date: formData.end_date || null,
        budget: formData.budget ? parseFloat(formData.budget) : null,
        notes: formData.notes || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('projects')
        .update(updateData)
        .eq('id', project.id)
        .eq('org_id', profile.org_id);

      if (error) throw error;

      toast({
        title: 'Éxito',
        description: 'Proyecto actualizado correctamente',
      });

      onProjectUpdated();
      onClose();
    } catch (error) {
      console.error('Error updating project:', error);
      toast({
        title: 'Error',
        description: 'No se pudo actualizar el proyecto',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-seo-darkBlue border-seo-blue/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Editar Proyecto</DialogTitle>
          <DialogDescription className="text-gray-400">
            Modifica los detalles del proyecto
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Nombre del proyecto</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="bg-seo-dark border-seo-blue/20 text-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="type" className="text-gray-300">Tipo de servicio</Label>
              <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-seo-dark border-seo-blue/20">
                  <SelectItem value="SEO">SEO</SelectItem>
                  <SelectItem value="SEM">SEM</SelectItem>
                  <SelectItem value="WEB">WEB</SelectItem>
                  <SelectItem value="ECOMMERCE">ECOMMERCE</SelectItem>
                  <SelectItem value="FICHA_GOOGLE">FICHA DE GOOGLE</SelectItem>
                  <SelectItem value="RANK_TO_RENT">RANK TO RENT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status" className="text-gray-300">Estado</Label>
              <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
                <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-seo-dark border-seo-blue/20">
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="paused">Pausado</SelectItem>
                  <SelectItem value="completed">Completado</SelectItem>
                  <SelectItem value="archived">Archivado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="start_date" className="text-gray-300">Fecha de inicio</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={(e) => handleChange('start_date', e.target.value)}
                  className="bg-seo-dark border-seo-blue/20 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="end_date" className="text-gray-300">Fecha de fin</Label>
                <Input
                  id="end_date"
                  type="date"
                  value={formData.end_date}
                  onChange={(e) => handleChange('end_date', e.target.value)}
                  className="bg-seo-dark border-seo-blue/20 text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="budget" className="text-gray-300">Presupuesto (€)</Label>
              <Input
                id="budget"
                type="number"
                step="0.01"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="bg-seo-dark border-seo-blue/20 text-white"
                placeholder="0.00"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-gray-300">Notas</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                className="bg-seo-dark border-seo-blue/20 text-white min-h-[80px]"
                placeholder="Añade notas sobre el proyecto..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/10"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
            >
              {loading ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}