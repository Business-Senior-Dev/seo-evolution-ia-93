import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2, 
  Search,
  Filter,
  Download,
  Upload,
  Plus
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AccountFormDrawer } from './AccountFormDrawer';

interface AccountMetrics {
  mrr_cents: number;
  arr_cents: number;
  pending_cents: number;
  paid_ytd_cents: number;
  last_invoice_date: string | null;
  active_subscriptions_count: number;
}

interface Account {
  id: string;
  name: string;
  type: 'client' | 'partner' | 'vendor' | 'internal';
  email: string;
  phone: string | null;
  company: string | null;
  status: string;
  vat_id: string | null;
  billing_address: any;
  notes: string | null;
  created_at: string;
  metrics?: AccountMetrics;
}

export function AccountsTable() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [debtFilter, setDebtFilter] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);

  const fetchAccounts = async () => {
    if (!profile?.org_id) return;
    
    setLoading(true);
    try {
      let query = supabase
        .from('accounts')
        .select('*')
        .eq('org_id', profile.org_id)
        .order('name');

      if (search) {
        query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);
      }

      if (typeFilter !== 'all') {
        query = query.eq('type', typeFilter);
      }

      const { data: accountsData, error, count } = await query
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      // Fetch metrics for each account
      const accountsWithMetrics = await Promise.all(
        (accountsData || []).map(async (account) => {
          const { data: metricsData } = await supabase.rpc('get_account_metrics', {
            account_uuid: account.id,
            org_uuid: profile.org_id
          });
          
          return {
            ...account,
            type: account.type as 'client' | 'partner' | 'vendor' | 'internal',
            metrics: metricsData?.[0] || {
              mrr_cents: 0,
              arr_cents: 0,
              pending_cents: 0,
              paid_ytd_cents: 0,
              last_invoice_date: null,
              active_subscriptions_count: 0
            }
          };
        })
      );

      // Apply client-side filters
      let filteredAccounts = accountsWithMetrics;
      
      if (debtFilter) {
        filteredAccounts = filteredAccounts.filter(acc => 
          acc.metrics && acc.metrics.pending_cents > 0
        );
      }

      if (activeSubFilter) {
        filteredAccounts = filteredAccounts.filter(acc => 
          acc.metrics && acc.metrics.mrr_cents > 0
        );
      }

      setAccounts(filteredAccounts);
      setTotalCount(count || 0);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las cuentas',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, [profile?.org_id, search, typeFilter, page]);

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

  const handleDelete = async (accountId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta cuenta?')) return;
    
    try {
      const { error } = await supabase
        .from('accounts')
        .delete()
        .eq('id', accountId);

      if (error) throw error;

      toast({
        title: 'Éxito',
        description: 'Cuenta eliminada correctamente',
      });
      
      fetchAccounts();
    } catch (error) {
      console.error('Error deleting account:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la cuenta',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (account: Account) => {
    setEditingAccount(account);
    setDrawerOpen(true);
  };

  const handleCreateNew = () => {
    setEditingAccount(null);
    setDrawerOpen(true);
  };

  const canDelete = profile?.role && ['owner', 'admin', 'manager'].includes(profile.role);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Cuentas</h1>
          <p className="text-gray-400 mt-1">
            Gestiona los clientes y cuentas de tu organización
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Importar CSV
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar CSV
          </Button>
          <Button onClick={handleCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Cuenta
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardHeader>
          <CardTitle className="text-white">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="Buscar por nombre, email o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-seo-dark border-seo-blue/30 text-white"
              />
            </div>
            <div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="bg-seo-dark border-seo-blue/30 text-white">
                  <SelectValue placeholder="Tipo de cuenta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="client">Cliente</SelectItem>
                  <SelectItem value="partner">Partner</SelectItem>
                  <SelectItem value="vendor">Proveedor</SelectItem>
                  <SelectItem value="internal">Interno</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="debt-filter"
                checked={debtFilter}
                onChange={(e) => setDebtFilter(e.target.checked)}
                className="rounded border-seo-blue/30"
              />
              <label htmlFor="debt-filter" className="text-white text-sm">
                Con deuda pendiente
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sub-filter"
                checked={activeSubFilter}
                onChange={(e) => setActiveSubFilter(e.target.checked)}
                className="rounded border-seo-blue/30"
              />
              <label htmlFor="sub-filter" className="text-white text-sm">
                Con suscripción activa
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="bg-seo-darkBlue border-seo-blue/20">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-seo-blue/20">
                  <TableHead className="text-gray-300">Nombre</TableHead>
                  <TableHead className="text-gray-300">Tipo</TableHead>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Teléfono</TableHead>
                  <TableHead className="text-gray-300">MRR Est.</TableHead>
                  <TableHead className="text-gray-300">Pendiente</TableHead>
                  <TableHead className="text-gray-300">Última Factura</TableHead>
                  <TableHead className="text-gray-300">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                      Cargando cuentas...
                    </TableCell>
                  </TableRow>
                ) : accounts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                      No se encontraron cuentas
                    </TableCell>
                  </TableRow>
                ) : (
                  accounts.map((account) => (
                    <TableRow key={account.id} className="border-seo-blue/20">
                      <TableCell className="font-medium">
                        <Link
                          to={`/suite/accounts/${account.id}`}
                          className="text-seo-bright hover:text-white transition-colors"
                        >
                          {account.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(account.type)}>
                          {account.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{account.email}</TableCell>
                      <TableCell className="text-gray-300">{account.phone || '—'}</TableCell>
                      <TableCell className="text-gray-300">
                        {account.metrics ? formatCurrency(account.metrics.mrr_cents) : '—'}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        <span className={account.metrics?.pending_cents ? 'text-red-400' : ''}>
                          {account.metrics ? formatCurrency(account.metrics.pending_cents) : '—'}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {account.metrics?.last_invoice_date || '—'}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/suite/accounts/${account.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                Ver detalles
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(account)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            {canDelete && (
                              <DropdownMenuItem
                                onClick={() => handleDelete(account.id)}
                                className="text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Eliminar
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalCount > pageSize && (
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Mostrando {Math.min((page - 1) * pageSize + 1, totalCount)} - {Math.min(page * pageSize, totalCount)} de {totalCount} cuentas
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page * pageSize >= totalCount}
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}

      <AccountFormDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        account={editingAccount}
        onSave={() => {
          setDrawerOpen(false);
          fetchAccounts();
        }}
      />
    </div>
  );
}