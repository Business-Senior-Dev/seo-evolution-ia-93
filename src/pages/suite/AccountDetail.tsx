import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Users, 
  FolderOpen, 
  CreditCard,
  Building2,
  Plus,
  ExternalLink,
  CheckCircle,
  Clock,
  Euro
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AccountProjectsList } from '@/components/suite/accounts/AccountProjectsList';
import { CrmSubscriptionsList } from '@/components/suite/subscriptions/CrmSubscriptionsList';
import { CreateCrmSubscriptionModal } from '@/components/suite/subscriptions/CreateCrmSubscriptionModal';

interface AccountDetail {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string | null;
  company: string | null;
  vat_id: string | null;
  billing_address: any;
  notes: string | null;
  created_at: string;
}

interface AccountMetrics {
  mrr_cents: number;
  arr_cents: number;
  pending_cents: number;
  paid_ytd_cents: number;
  last_invoice_date: string | null;
  active_subscriptions_count: number;
}

export default function AccountDetail() {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const [account, setAccount] = useState<AccountDetail | null>(null);
  const [metrics, setMetrics] = useState<AccountMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccountDetail();
  }, [id, profile?.org_id]);

  const fetchAccountDetail = async () => {
    if (!id || !profile?.org_id) return;

    setLoading(true);
    try {
      // Fetch account details
      const { data: accountData, error: accountError } = await supabase
        .from('accounts')
        .select('*')
        .eq('id', id)
        .eq('org_id', profile.org_id)
        .single();

      if (accountError) throw accountError;

      // Fetch account metrics
      const { data: metricsData, error: metricsError } = await supabase.rpc('get_account_metrics', {
        account_uuid: id,
        org_uuid: profile.org_id
      });

      if (metricsError) throw metricsError;

      setAccount(accountData);
      setMetrics(metricsData?.[0] || null);
    } catch (error) {
      console.error('Error fetching account detail:', error);
      toast({
        title: 'Error',
        description: 'No se pudo cargar la información de la cuenta',
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'client': return 'bg-blue-100 text-blue-800';
      case 'partner': return 'bg-green-100 text-green-800';
      case 'vendor': return 'bg-orange-100 text-orange-800';
      case 'internal': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-seo-darkBlue rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-seo-darkBlue rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-white mb-4">Cuenta no encontrada</h2>
        <Link to="/suite/accounts">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a cuentas
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/suite" className="text-gray-400 hover:text-white">
                  Suite
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/suite/accounts" className="text-gray-400 hover:text-white">
                  Cuentas
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{account.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">{account.name}</h1>
            <Badge className={getTypeColor(account.type)}>
              {account.type}
            </Badge>
          </div>
        </div>
        
        <Link to="/suite/accounts">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="resumen" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-seo-darkBlue">
          <TabsTrigger value="resumen" className="data-[state=active]:bg-seo-blue">
            <Building2 className="w-4 h-4 mr-2" />
            Resumen
          </TabsTrigger>
          <TabsTrigger value="contactos" className="data-[state=active]:bg-seo-blue">
            <Users className="w-4 h-4 mr-2" />
            Contactos
          </TabsTrigger>
          <TabsTrigger value="proyectos" className="data-[state=active]:bg-seo-blue">
            <FolderOpen className="w-4 h-4 mr-2" />
            Proyectos
          </TabsTrigger>
          <TabsTrigger value="archivos" className="data-[state=active]:bg-seo-blue">
            <FileText className="w-4 h-4 mr-2" />
            Archivos
          </TabsTrigger>
          <TabsTrigger value="suscripciones" className="data-[state=active]:bg-seo-blue">
            <CreditCard className="w-4 h-4 mr-2" />
            Suscripciones
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resumen" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Billing Information */}
            <Card className="bg-seo-darkBlue border-seo-blue/20">
              <CardHeader>
                <CardTitle className="text-white">Datos de facturación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">{account.email}</p>
                </div>
                {account.phone && (
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="text-white">{account.phone}</p>
                  </div>
                )}
                {account.company && (
                  <div>
                    <p className="text-sm text-gray-400">Empresa</p>
                    <p className="text-white">{account.company}</p>
                  </div>
                )}
                {account.vat_id && (
                  <div>
                    <p className="text-sm text-gray-400">NIF/CIF</p>
                    <p className="text-white">{account.vat_id}</p>
                  </div>
                )}
                {account.billing_address && (
                  <div>
                    <p className="text-sm text-gray-400">Dirección</p>
                    <div className="text-white space-y-1">
                      {account.billing_address.street && <p>{account.billing_address.street}</p>}
                      {(account.billing_address.city || account.billing_address.zip) && (
                        <p>
                          {account.billing_address.zip} {account.billing_address.city}
                        </p>
                      )}
                      {account.billing_address.state && <p>{account.billing_address.state}</p>}
                      {account.billing_address.country && <p>{account.billing_address.country}</p>}
                    </div>
                  </div>
                )}
                {account.notes && (
                  <div>
                    <p className="text-sm text-gray-400">Notas</p>
                    <p className="text-white">{account.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Financial KPIs */}
            <div className="space-y-4">
              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Métricas financieras</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-seo-bright">
                        {metrics ? formatCurrency(metrics.mrr_cents) : '—'}
                      </div>
                      <div className="text-sm text-gray-400">MRR Estimado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {metrics ? formatCurrency(metrics.paid_ytd_cents) : '—'}
                      </div>
                      <div className="text-sm text-gray-400">Ingresos YTD</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${metrics?.pending_cents ? 'text-red-400' : 'text-gray-400'}`}>
                        {metrics ? formatCurrency(metrics.pending_cents) : '—'}
                      </div>
                      <div className="text-sm text-gray-400">Pendiente</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-seo-bright">
                        {metrics?.active_subscriptions_count || 0}
                      </div>
                      <div className="text-sm text-gray-400">Suscripciones</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-seo-darkBlue border-seo-blue/20">
                <CardHeader>
                  <CardTitle className="text-white">Acciones rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Euro className="mr-2 h-4 w-4" />
                    Crear pago
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    Marcar como pendiente
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Marcar como pagado
                  </Button>
                  <CreateCrmSubscriptionModal
                    accountId={account.id}
                    onSubscriptionCreated={() => {
                      // Refresh account metrics when subscription is created
                      fetchAccountDetail();
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Invoices */}
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader>
              <CardTitle className="text-white">Facturas recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-400">
                No hay facturas disponibles
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contactos">
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Contactos</CardTitle>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nuevo contacto
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-400">
                No hay contactos registrados
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proyectos">
          <AccountProjectsList accountId={account.id} />
        </TabsContent>

        <TabsContent value="archivos">
          <Card className="bg-seo-darkBlue border-seo-blue/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Archivos</CardTitle>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Subir archivo
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-400">
                No hay archivos subidos
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suscripciones">
          <CrmSubscriptionsList accountId={account.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}