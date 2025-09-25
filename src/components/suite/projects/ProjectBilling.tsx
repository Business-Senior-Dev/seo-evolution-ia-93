import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
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

interface Invoice {
  id: string;
  amount_cents: number;
  currency: string;
  status: string;
  invoice_date: string;
  due_date: string | null;
  paid_at: string | null;
}

interface Subscription {
  id: string;
  status: string;
  started_at: string;
  current_period_start: string | null;
  current_period_end: string | null;
  plan: {
    name: string;
    price_cents: number;
    interval: string;
  };
}

interface ProjectBillingProps {
  accountId: string;
}

export function ProjectBilling({ accountId }: ProjectBillingProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBillingData();
  }, [accountId, profile?.org_id]);

  const fetchBillingData = async () => {
    if (!accountId || !profile?.org_id) return;

    setLoading(true);
    try {
      // Fetch invoices
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('*')
        .eq('account_id', accountId)
        .eq('org_id', profile.org_id)
        .order('invoice_date', { ascending: false });

      if (invoicesError) throw invoicesError;

      // Fetch subscriptions
      const { data: subscriptionsData, error: subscriptionsError } = await supabase
        .from('subscriptions')
        .select(`
          id,
          status,
          started_at,
          current_period_start,
          current_period_end,
          plan:plans(name, price_cents, interval)
        `)
        .eq('account_id', accountId)
        .eq('org_id', profile.org_id)
        .order('started_at', { ascending: false });

      if (subscriptionsError) throw subscriptionsError;

      setInvoices(invoicesData || []);
      setSubscriptions(subscriptionsData || []);
    } catch (error) {
      console.error('Error fetching billing data:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los datos de facturación',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (cents: number, currency: string = 'EUR') => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency,
    }).format(cents / 100);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '—';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'open':
        return 'bg-yellow-100 text-yellow-800';
      case 'past_due':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'trialing':
        return 'bg-blue-100 text-blue-800';
      case 'canceled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string, type: 'invoice' | 'subscription') => {
    if (type === 'invoice') {
      switch (status) {
        case 'paid': return 'Pagada';
        case 'open': return 'Pendiente';
        case 'past_due': return 'Vencida';
        case 'draft': return 'Borrador';
        default: return status;
      }
    } else {
      switch (status) {
        case 'active': return 'Activa';
        case 'trialing': return 'Prueba';
        case 'canceled': return 'Cancelada';
        case 'past_due': return 'Vencida';
        default: return status;
      }
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader>
            <CardTitle className="text-white">Facturación</CardTitle>
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
    <div className="space-y-6">
      {/* Subscriptions */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Suscripciones</CardTitle>
        </CardHeader>
        <CardContent>
          {subscriptions.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No hay suscripciones activas para esta cuenta
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-seo-blue/20">
                  <TableHead className="text-gray-300">Plan</TableHead>
                  <TableHead className="text-gray-300">Precio</TableHead>
                  <TableHead className="text-gray-300">Estado</TableHead>
                  <TableHead className="text-gray-300">Periodo actual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((subscription) => (
                  <TableRow key={subscription.id} className="border-seo-blue/20 hover:bg-seo-blue/10">
                    <TableCell className="text-white font-medium">
                      {subscription.plan?.name || 'Plan desconocido'}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {subscription.plan ? 
                        `${formatCurrency(subscription.plan.price_cents)} / ${subscription.plan.interval}` : 
                        '—'
                      }
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(subscription.status)}>
                        {getStatusLabel(subscription.status, 'subscription')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {subscription.current_period_start && subscription.current_period_end ?
                        `${formatDate(subscription.current_period_start)} - ${formatDate(subscription.current_period_end)}` :
                        formatDate(subscription.started_at)
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Facturas</CardTitle>
        </CardHeader>
        <CardContent>
          {invoices.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No hay facturas registradas para esta cuenta
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-seo-blue/20">
                  <TableHead className="text-gray-300">Fecha</TableHead>
                  <TableHead className="text-gray-300">Importe</TableHead>
                  <TableHead className="text-gray-300">Estado</TableHead>
                  <TableHead className="text-gray-300">Vencimiento</TableHead>
                  <TableHead className="text-gray-300">Pagado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id} className="border-seo-blue/20 hover:bg-seo-blue/10">
                    <TableCell className="text-gray-300">
                      {formatDate(invoice.invoice_date)}
                    </TableCell>
                    <TableCell className="text-white font-medium">
                      {formatCurrency(invoice.amount_cents, invoice.currency)}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(invoice.status)}>
                        {getStatusLabel(invoice.status, 'invoice')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {formatDate(invoice.due_date)}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {formatDate(invoice.paid_at)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}