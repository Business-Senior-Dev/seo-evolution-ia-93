import { useState } from 'react';
import { Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { useToast } from '@/hooks/use-toast';

interface CreateSubscriptionModalProps {
  accountId: string;
  onSubscriptionCreated: () => void;
}

export function CreateSubscriptionModal({ accountId, onSubscriptionCreated }: CreateSubscriptionModalProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    currency: 'EUR',
    interval: 'month',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.productName || !formData.price) {
      toast({
        title: 'Error',
        description: 'Por favor completa todos los campos obligatorios',
        variant: 'destructive',
      });
      return;
    }

    const priceCents = Math.round(parseFloat(formData.price) * 100);
    if (isNaN(priceCents) || priceCents <= 0) {
      toast({
        title: 'Error',
        description: 'El precio debe ser un número válido mayor que 0',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-subscription-checkout', {
        body: {
          accountId,
          priceCents,
          currency: formData.currency,
          interval: formData.interval,
          productName: `${formData.productName}${formData.description ? ` - ${formData.description}` : ''}`,
        },
      });

      if (error) throw error;

      // Open Stripe checkout in a new tab
      if (data?.url) {
        window.open(data.url, '_blank');
        
        toast({
          title: 'Redirigiendo a Stripe',
          description: 'Se ha abierto una nueva pestaña con el checkout de Stripe',
        });

        setOpen(false);
        setFormData({
          productName: '',
          price: '',
          currency: 'EUR',
          interval: 'month',
          description: '',
        });

        onSubscriptionCreated();
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear la suscripción. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Nueva suscripción
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-seo-darkBlue border-seo-blue/20">
        <DialogHeader>
          <DialogTitle className="text-white">Crear Nueva Suscripción</DialogTitle>
          <DialogDescription className="text-gray-300">
            Configura una nueva suscripción mensual personalizada para este cliente.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName" className="text-white">
              Nombre del servicio *
            </Label>
            <Input
              id="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              placeholder="Ej: SEO Premium, Marketing Digital..."
              className="bg-seo-dark border-seo-blue/20 text-white"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-white">
                Precio *
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="1"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="99.00"
                className="bg-seo-dark border-seo-blue/20 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency" className="text-white">
                Moneda
              </Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => setFormData({ ...formData, currency: value })}
              >
                <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-seo-dark border-seo-blue/20">
                  <SelectItem value="EUR" className="text-white">EUR (€)</SelectItem>
                  <SelectItem value="USD" className="text-white">USD ($)</SelectItem>
                  <SelectItem value="GBP" className="text-white">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interval" className="text-white">
              Frecuencia de facturación
            </Label>
            <Select
              value={formData.interval}
              onValueChange={(value) => setFormData({ ...formData, interval: value })}
            >
              <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-seo-dark border-seo-blue/20">
                <SelectItem value="month" className="text-white">Mensual</SelectItem>
                <SelectItem value="year" className="text-white">Anual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">
              Descripción (opcional)
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descripción adicional del servicio..."
              className="bg-seo-dark border-seo-blue/20 text-white"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/10"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
            >
              {loading ? 'Creando...' : 'Crear Suscripción'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}