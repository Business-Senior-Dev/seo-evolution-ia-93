import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  FileText, 
  FolderOpen, 
  AlertCircle,
  Euro
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface DashboardMetrics {
  paid_ytd_cents: number;
  pending_cents: number;
  active_projects_count: number;
  open_tasks_count: number;
}

interface ChartData {
  month: string;
  amount: number;
}

export default function PortalDashboard() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile?.account_id) {
      fetchDashboardData();
    }
  }, [profile]);

  const fetchDashboardData = async () => {
    if (!profile?.account_id || !profile?.org_id) return;

    setLoading(true);
    try {
      // Fetch dashboard metrics
      const { data: metricsData, error: metricsError } = await supabase.rpc('get_client_dashboard_metrics', {
        client_account_uuid: profile.account_id,
        org_uuid: profile.org_id
      });

      if (metricsError) throw metricsError;

      setMetrics(metricsData?.[0] || null);

      // Fetch revenue chart data (last 12 months)
      const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select('invoice_date, amount_cents')
        .eq('account_id', profile.account_id)
        .eq('status', 'paid')
        .gte('invoice_date', new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString())
        .order('invoice_date');

      if (invoicesError) throw invoicesError;

      // Group by month
      const monthlyData = invoicesData?.reduce((acc: any, invoice: any) => {
        const month = new Date(invoice.invoice_date).toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'short' 
        });
        
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += invoice.amount_cents;
        return acc;
      }, {}) || {};

      const chartData = Object.entries(monthlyData).map(([month, amount]) => ({
        month,
        amount: (amount as number) / 100 // Convert to euros
      }));

      setChartData(chartData);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los datos del dashboard',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(cents / 100);
  };

  if (!profile?.account_id) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            Acceso no vinculado
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Tu acceso aún no está vinculado a una cuenta. Por favor, contacta con soporte 
            para configurar tu acceso correctamente.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-seo-darkBlue rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Bienvenido, {profile?.name || 'Cliente'}
        </h1>
        <p className="text-gray-400">
          Aquí tienes un resumen de tus proyectos y facturación
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Pagado este año
            </CardTitle>
            <Euro className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {metrics ? formatCurrency(metrics.paid_ytd_cents) : '—'}
            </div>
            <p className="text-xs text-gray-500">
              Facturación YTD
            </p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Pendiente de pago
            </CardTitle>
            <FileText className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${metrics?.pending_cents ? 'text-orange-400' : 'text-white'}`}>
              {metrics ? formatCurrency(metrics.pending_cents) : '—'}
            </div>
            <p className="text-xs text-gray-500">
              Facturas abiertas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Proyectos activos
            </CardTitle>
            <FolderOpen className="h-4 w-4 text-seo-bright" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {metrics?.active_projects_count || 0}
            </div>
            <p className="text-xs text-gray-500">
              En progreso
            </p>
          </CardContent>
        </Card>

        <Card className="bg-seo-darkBlue border-seo-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Tickets abiertos
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {metrics?.open_tasks_count || 0}
            </div>
            <p className="text-xs text-gray-500">
              Soporte pendiente
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Evolución de facturación
          </CardTitle>
        </CardHeader>
        <CardContent>
          {chartData.length > 0 ? (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#9CA3AF" 
                    tick={{ fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF" 
                    tick={{ fill: '#9CA3AF' }}
                    tickFormatter={(value) => `€${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: '#F3F4F6' }}
                    formatter={(value: number) => [`€${value.toFixed(2)}`, 'Importe']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-80 flex items-center justify-center text-gray-400">
              No hay datos de facturación disponibles
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}