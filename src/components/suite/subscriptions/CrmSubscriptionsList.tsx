import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefreshCw, Edit, Trash2 } from "lucide-react";
import { CreateCrmSubscriptionModal } from "./CreateCrmSubscriptionModal";

interface CrmSubscription {
  id: string;
  concepto: string;
  precio_cents: number;
  currency: string;
  fecha_inicio: string;
  estado: 'Pagado' | 'Pendiente' | 'Rechazado';
  notas: string | null;
  created_at: string;
}

interface CrmSubscriptionsListProps {
  accountId: string;
}

export function CrmSubscriptionsList({ accountId }: CrmSubscriptionsListProps) {
  const [subscriptions, setSubscriptions] = useState<CrmSubscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { profile } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchSubscriptions();
  }, [accountId, profile?.org_id]);

  const fetchSubscriptions = async () => {
    if (!profile?.org_id || !accountId) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("crm_subscriptions")
        .select("*")
        .eq("account_id", accountId)
        .eq("org_id", profile.org_id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setSubscriptions((data || []) as CrmSubscription[]);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las suscripciones",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const refreshSubscriptions = async () => {
    setRefreshing(true);
    await fetchSubscriptions();
    setRefreshing(false);
    toast({
      title: "Actualizado",
      description: "Lista de suscripciones actualizada",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pagado':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Rechazado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatPrice = (cents: number, currency: string) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency,
    }).format(cents / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const deleteSubscription = async (subscriptionId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta suscripción?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from("crm_subscriptions")
        .delete()
        .eq("id", subscriptionId);

      if (error) throw error;

      toast({
        title: "Éxito",
        description: "Suscripción eliminada correctamente",
      });

      fetchSubscriptions();
    } catch (error) {
      console.error("Error deleting subscription:", error);
      toast({
        title: "Error",
        description: "No se pudo eliminar la suscripción",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Suscripciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            Cargando suscripciones...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-seo-darkBlue border-seo-blue/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Suscripciones</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshSubscriptions}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
          <CreateCrmSubscriptionModal
            accountId={accountId}
            onSubscriptionCreated={fetchSubscriptions}
          />
        </div>
      </CardHeader>
      <CardContent>
        {subscriptions.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No hay suscripciones registradas
            <div className="mt-4">
              <CreateCrmSubscriptionModal
                accountId={accountId}
                onSubscriptionCreated={fetchSubscriptions}
              />
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-seo-blue/20">
                  <TableHead className="text-gray-300">Concepto</TableHead>
                  <TableHead className="text-gray-300">Precio</TableHead>
                  <TableHead className="text-gray-300">Fecha Inicio</TableHead>
                  <TableHead className="text-gray-300">Estado</TableHead>
                  <TableHead className="text-gray-300">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((subscription) => (
                  <TableRow key={subscription.id} className="border-seo-blue/20">
                    <TableCell className="text-white">
                      <div>
                        <p className="font-medium">{subscription.concepto}</p>
                        {subscription.notas && (
                          <p className="text-sm text-gray-400 mt-1">
                            {subscription.notas}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-white">
                      {formatPrice(subscription.precio_cents, subscription.currency)}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {formatDate(subscription.fecha_inicio)}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(subscription.estado)}>
                        {subscription.estado}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            // TODO: Implement edit functionality
                            toast({
                              title: "Próximamente",
                              description: "Funcionalidad de edición en desarrollo",
                            });
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSubscription(subscription.id)}
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
          </div>
        )}
      </CardContent>
    </Card>
  );
}