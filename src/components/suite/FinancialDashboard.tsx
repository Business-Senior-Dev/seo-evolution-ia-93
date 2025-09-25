import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Euro, 
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  FolderOpen,
  RefreshCw
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface FinancialSummary {
  mrr: number;
  arr: number;
  paidThisMonth: number;
  openAmount: number;
  activeProjects: number;
  revenueByMonth: Array<{
    month: string;
    revenue: number;
  }>;
  topAccountsYTD: Array<{
    id: string;
    name: string;
    totalRevenue: number;
    invoiceCount: number;
    subscriptionStatus: string;
    lastInvoiceDate: string | null;
  }>;
}

export function FinancialDashboard() {
  const [summary, setSummary] = useState<FinancialSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'trialing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'past_due':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'none':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activa';
      case 'trialing':
        return 'Prueba';
      case 'past_due':
        return 'Vencida';
      case 'none':
        return 'Sin suscripción';
      default:
        return status;
    }
  };

  const fetchFinancialSummary = async (showRefreshing = false) => {
    if (!user) return;

    try {
      if (showRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const { data, error } = await supabase.functions.invoke('get-finance-summary', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) throw error;

      setSummary(data);
    } catch (error) {
      console.error('Error fetching financial summary:', error);
      toast({
        title: 'Error',
        description: 'No se pudo cargar el resumen financiero',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFinancialSummary();
  }, [user]);

  const handleRefresh = () => {
    fetchFinancialSummary(true);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Resumen Económico</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="bg-seo-darkBlue border-seo-blue/20">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded mb-2"></div>
                  <div className="h-8 bg-gray-600 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No se pudo cargar el resumen financiero</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Refresh Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Resumen Económico</h2>
        <Button
          onClick={handleRefresh}
          disabled={refreshing}
          variant="outline"
          size="sm"
          className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/20"
        >
          <RefreshCw size={16} className={`mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Actualizando...' : 'Actualizar'}
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">MRR</CardTitle>
            <TrendingUp className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(summary.mrr)}
            </div>
            <p className="text-xs text-gray-400">Ingresos recurrentes mensuales</p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">ARR</CardTitle>
            <TrendingUp className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(summary.arr)}
            </div>
            <p className="text-xs text-gray-400">Ingresos recurrentes anuales</p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Este Mes</CardTitle>
            <Calendar className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(summary.paidThisMonth)}
            </div>
            <p className="text-xs text-gray-400">Ingresos cobrados</p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Pendiente</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(summary.openAmount)}
            </div>
            <p className="text-xs text-gray-400">Por cobrar</p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Proyectos</CardTitle>
            <FolderOpen className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {summary.activeProjects}
            </div>
            <p className="text-xs text-gray-400">Activos</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Ingresos cobrados por mes (últimos 12 meses)</CardTitle>
          <CardDescription className="text-gray-400">
            Evolución de los ingresos facturados y cobrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={summary.revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis 
                  dataKey="month" 
                  stroke="#94a3b8"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#94a3b8"
                  fontSize={12}
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f8fafc'
                  }}
                  formatter={(value: number) => [formatCurrency(value), 'Ingresos']}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Accounts Table */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Top Cuentas (Año Actual)</CardTitle>
          <CardDescription className="text-gray-400">
            Top 10 cuentas por ingresos del año actual
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-seo-blue/20">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Cuenta</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">Facturas Pagadas</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">Última Factura</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Suscripción</th>
                </tr>
              </thead>
              <tbody>
                {summary.topAccountsYTD.map((account, index) => (
                  <tr key={account.id} className="border-b border-seo-blue/10 hover:bg-seo-blue/5">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-300 bg-seo-blue/20 rounded-full w-6 h-6 flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-white font-medium">{account.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="text-white font-semibold">
                        {formatCurrency(account.totalRevenue)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {account.invoiceCount} factura{account.invoiceCount !== 1 ? 's' : ''}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-gray-300">
                      {formatDate(account.lastInvoiceDate)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge className={getStatusColor(account.subscriptionStatus)}>
                        {getStatusText(account.subscriptionStatus)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {summary.topAccountsYTD.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No hay datos de facturación este año
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}