import { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink,
  CreditCard,
  Calendar,
  Euro
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

interface Invoice {
  id: string;
  amount_cents: number;
  currency: string;
  status: string;
  invoice_date: string;
  due_date: string | null;
  paid_at: string | null;
  hosted_invoice_url: string | null;
  pdf_url: string | null;
  created_at: string;
}

export default function PortalInvoices() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile?.account_id) {
      fetchInvoices();
    }
  }, [profile]);

  const fetchInvoices = async () => {
    if (!profile?.account_id) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('account_id', profile.account_id)
        .order('invoice_date', { ascending: false });

      if (error) throw error;

      setInvoices(data || []);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las facturas',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (cents: number, currency = 'EUR') => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(cents / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'past_due': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'canceled': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'Pagada';
      case 'open': return 'Pendiente';
      case 'past_due': return 'Vencida';
      case 'draft': return 'Borrador';
      case 'canceled': return 'Cancelada';
      default: return status;
    }
  };

  const handlePayInvoice = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownloadPdf = (url: string) => {
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="h-96 bg-seo-darkBlue rounded"></div>
        </div>
      </div>
    );
  }

  // Calculate totals
  const totalPaid = invoices
    .filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount_cents, 0);
  
  const totalPending = invoices
    .filter(inv => ['open', 'past_due'].includes(inv.status))
    .reduce((sum, inv) => sum + inv.amount_cents, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Mis Facturas</h1>
        <p className="text-gray-400">
          Gestiona y revisa todas tus facturas
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total pagado
            </CardTitle>
            <Euro className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {formatCurrency(totalPaid)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Pendiente de pago
            </CardTitle>
            <CreditCard className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">
              {formatCurrency(totalPending)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Total facturas
            </CardTitle>
            <FileText className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {invoices.length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Historial de facturas</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {invoices.length === 0 ? (
            <div className="py-12 text-center">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                No hay facturas
              </h3>
              <p className="text-gray-400">
                Aún no tienes facturas generadas.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-seo-blue/20">
                    <TableHead className="text-gray-300">Fecha</TableHead>
                    <TableHead className="text-gray-300">Importe</TableHead>
                    <TableHead className="text-gray-300">Estado</TableHead>
                    <TableHead className="text-gray-300">Vencimiento</TableHead>
                    <TableHead className="text-gray-300 text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id} className="border-seo-blue/20">
                      <TableCell className="text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                          {formatDate(invoice.invoice_date)}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-white">
                        {formatCurrency(invoice.amount_cents, invoice.currency)}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(invoice.status)}>
                          {getStatusLabel(invoice.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {invoice.due_date ? formatDate(invoice.due_date) : '—'}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {invoice.status === 'open' && invoice.hosted_invoice_url && (
                            <Button
                              size="sm"
                              onClick={() => handlePayInvoice(invoice.hosted_invoice_url!)}
                              className="bg-seo-blue hover:bg-seo-blue/80"
                            >
                              <CreditCard className="mr-2 h-4 w-4" />
                              Pagar
                            </Button>
                          )}
                          {invoice.pdf_url && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadPdf(invoice.pdf_url!)}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              PDF
                            </Button>
                          )}
                          {!invoice.pdf_url && !invoice.hosted_invoice_url && (
                            <p className="text-sm text-gray-400 py-2">
                              Contacta con soporte
                            </p>
                          )}
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

      {/* Help Section */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-seo-blue/20 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-seo-bright" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ¿Necesitas ayuda con el pago?
              </h3>
              <p className="text-gray-400 mb-4">
                Si tienes problemas para acceder a tus facturas o necesitas ayuda con el proceso de pago, 
                no dudes en contactar con nuestro equipo de soporte.
              </p>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contactar soporte
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}