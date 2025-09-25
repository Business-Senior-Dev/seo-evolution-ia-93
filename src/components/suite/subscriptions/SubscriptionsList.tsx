import { useState, useEffect } from 'react';
import { ExternalLink, CreditCard, Calendar, Euro, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
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
import { CreateSubscriptionModal } from './CreateSubscriptionModal';

interface Subscription {
  id: string;
  status: string;
  priceCents: number;
  currency: string;
  interval: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
}

interface SubscriptionsListProps {
  accountId: string;
}

export function SubscriptionsList({ accountId }: SubscriptionsListProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchSubscriptions();
  }, [accountId]);

  const fetchSubscriptions = async () => {
    if (!accountId) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription-status', {
        body: { accountId },
      });

      if (error) throw error;
      setSubscriptions(data?.subscriptions || []);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las suscripciones',
        variant: 'destructive',
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
      title: 'Suscripciones actualizadas',
      description: 'Se ha sincronizado el estado con Stripe',
    });
  };

  const openCustomerPortal = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        body: { accountId },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: 'Error',
        description: 'No se pudo abrir el portal de cliente',
        variant: 'destructive',
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'trialing':
        return 'bg-blue-100 text-blue-800';
      case 'past_due':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      case 'unpaid':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Activa';
      case 'trialing': return 'Prueba';
      case 'past_due': return 'Vencida';
      case 'canceled': return 'Cancelada';
      case 'unpaid': return 'No pagada';
      default: return status;
    }
  };

  const formatPrice = (priceCents: number, currency: string) => {
    const price = priceCents / 100;
    const currencySymbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency;
    return `${price.toFixed(2)} ${currencySymbol}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getIntervalLabel = (interval: string) => {
    return interval === 'month' ? 'Mensual' : interval === 'year' ? 'Anual' : interval;
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Suscripciones</h3>
          <CreateSubscriptionModal accountId={accountId} onSubscriptionCreated={fetchSubscriptions} />
        </div>
        
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-seo-dark rounded w-3/4"></div>
          <div className="h-4 bg-seo-dark rounded w-1/2"></div>
          <div className="h-4 bg-seo-dark rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Suscripciones</h3>
        <div className="flex gap-2">
          <Button
            onClick={refreshSubscriptions}
            disabled={refreshing}
            variant="outline"
            size="sm"
            className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/10"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
          {subscriptions.length > 0 && (
            <Button
              onClick={openCustomerPortal}
              variant="outline"
              size="sm"
              className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/10"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Gestionar
            </Button>
          )}
          <CreateSubscriptionModal accountId={accountId} onSubscriptionCreated={fetchSubscriptions} />
        </div>
      </div>

      {subscriptions.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <CreditCard className="mx-auto h-12 w-12 text-gray-500 mb-4" />
          <p className="text-lg font-medium mb-2">No hay suscripciones activas</p>
          <p className="text-sm mb-4">Crea la primera suscripción para este cliente</p>
        </div>
      ) : (
        <div className="rounded-md border border-seo-blue/20">
          <Table>
            <TableHeader>
              <TableRow className="border-seo-blue/20">
                <TableHead className="text-gray-300">Estado</TableHead>
                <TableHead className="text-gray-300">Precio</TableHead>
                <TableHead className="text-gray-300">Frecuencia</TableHead>
                <TableHead className="text-gray-300">Próximo pago</TableHead>
                <TableHead className="text-gray-300">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions.map((subscription) => (
                <TableRow key={subscription.id} className="border-seo-blue/20 hover:bg-seo-blue/10">
                  <TableCell>
                    <Badge className={getStatusColor(subscription.status)}>
                      {getStatusLabel(subscription.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-1">
                      <Euro className="h-4 w-4" />
                      {formatPrice(subscription.priceCents, subscription.currency)}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {getIntervalLabel(subscription.interval)}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {formatDate(subscription.currentPeriodEnd)}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={openCustomerPortal}
                      variant="ghost"
                      size="sm"
                      className="text-seo-bright hover:text-white hover:bg-seo-blue/20"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Gestionar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {subscriptions.length > 0 && (
        <div className="text-sm text-gray-400 bg-seo-dark/50 p-3 rounded-md">
          <p>💡 <strong>Consejo:</strong> Usa el botón "Gestionar" para acceder al portal de Stripe donde el cliente puede actualizar su método de pago, descargar facturas o cancelar su suscripción.</p>
        </div>
      )}
    </div>
  );
}