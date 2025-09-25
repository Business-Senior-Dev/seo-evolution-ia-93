import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

interface CreateCrmSubscriptionModalProps {
  accountId: string;
  onSubscriptionCreated: () => void;
}

export function CreateCrmSubscriptionModal({
  accountId,
  onSubscriptionCreated,
}: CreateCrmSubscriptionModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { profile } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    concepto: "",
    precio: "",
    currency: "EUR",
    fecha_inicio: "",
    estado: "Pendiente",
    notas: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!profile?.org_id || !accountId) {
      toast({
        title: "Error",
        description: "Información de organización no disponible",
        variant: "destructive",
      });
      return;
    }

    if (!formData.concepto || !formData.precio || !formData.fecha_inicio) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Validate price format
    const precio = parseFloat(formData.precio);
    if (isNaN(precio) || precio <= 0) {
      toast({
        title: "Error",
        description: "Por favor ingrese un precio válido",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("crm_subscriptions")
        .insert({
          account_id: accountId,
          org_id: profile.org_id,
          concepto: formData.concepto,
          precio_cents: Math.round(precio * 100), // Convert to cents
          currency: formData.currency,
          fecha_inicio: formData.fecha_inicio,
          estado: formData.estado,
          notas: formData.notas || null,
          created_by: profile.id,
        });

      if (error) throw error;

      toast({
        title: "Éxito",
        description: "Suscripción creada correctamente",
      });

      // Reset form
      setFormData({
        concepto: "",
        precio: "",
        currency: "EUR",
        fecha_inicio: "",
        estado: "Pendiente",
        notas: "",
      });

      setOpen(false);
      onSubscriptionCreated();
    } catch (error) {
      console.error("Error creating subscription:", error);
      toast({
        title: "Error",
        description: "No se pudo crear la suscripción",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full justify-start" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Nueva suscripción
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-seo-darkBlue border-seo-blue/20">
        <DialogHeader>
          <DialogTitle className="text-white">Nueva Suscripción</DialogTitle>
          <DialogDescription className="text-gray-400">
            Crear una nueva suscripción informativa para gestión interna
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="concepto" className="text-white">
                Concepto *
              </Label>
              <Input
                id="concepto"
                value={formData.concepto}
                onChange={(e) =>
                  setFormData({ ...formData, concepto: e.target.value })
                }
                placeholder="Ej: SEO Mensual, SEM Premium..."
                className="bg-seo-darkBlue border-seo-blue/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="precio" className="text-white">
                Precio *
              </Label>
              <div className="flex gap-2">
                <Input
                  id="precio"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.precio}
                  onChange={(e) =>
                    setFormData({ ...formData, precio: e.target.value })
                  }
                  placeholder="0.00"
                  className="bg-seo-darkBlue border-seo-blue/30 text-white"
                  required
                />
                <Select
                  value={formData.currency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, currency: value })
                  }
                >
                  <SelectTrigger className="w-20 bg-seo-darkBlue border-seo-blue/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-seo-darkBlue border-seo-blue/30">
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fecha_inicio" className="text-white">
                Fecha de inicio *
              </Label>
              <Input
                id="fecha_inicio"
                type="date"
                value={formData.fecha_inicio}
                onChange={(e) =>
                  setFormData({ ...formData, fecha_inicio: e.target.value })
                }
                className="bg-seo-darkBlue border-seo-blue/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado" className="text-white">
                Estado *
              </Label>
              <Select
                value={formData.estado}
                onValueChange={(value) =>
                  setFormData({ ...formData, estado: value })
                }
              >
                <SelectTrigger className="bg-seo-darkBlue border-seo-blue/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-seo-darkBlue border-seo-blue/30">
                  <SelectItem value="Pendiente">Pendiente</SelectItem>
                  <SelectItem value="Pagado">Pagado</SelectItem>
                  <SelectItem value="Rechazado">Rechazado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notas" className="text-white">
              Notas (opcional)
            </Label>
            <Textarea
              id="notas"
              value={formData.notas}
              onChange={(e) =>
                setFormData({ ...formData, notas: e.target.value })
              }
              placeholder="Notas adicionales sobre la suscripción..."
              className="bg-seo-darkBlue border-seo-blue/30 text-white"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creando..." : "Crear Suscripción"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}