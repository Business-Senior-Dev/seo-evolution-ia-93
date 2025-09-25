import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Check, ChevronsUpDown, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Account {
  id: string;
  name: string;
  email: string;
  company?: string;
}

interface CreateProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectType: string;
  projectTypeLabel: string;
  accountId?: string;
  onProjectCreated?: () => void;
}

export function CreateProjectModal({ open, onOpenChange, projectType, projectTypeLabel, accountId, onProjectCreated }: CreateProjectModalProps) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [accountsLoading, setAccountsLoading] = useState(false);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState({
    type: projectType || '',
  });
  const [dateOpen, setDateOpen] = useState(false);

  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Load accounts
  useEffect(() => {
    if (open && user) {
      if (!accountId) {
        loadAccounts();
      } else {
        // Pre-select the account if provided
        setSelectedAccount(accountId);
      }
      // Pre-fill project name with type
      const typeLabel = projectTypeLabel || projectType || 'Nuevo';
      setName(`Proyecto ${typeLabel} - ${format(new Date(), 'dd/MM/yyyy')}`);
    } else {
      // Reset accounts when modal closes
      setAccounts([]);
      setSelectedAccount('');
    }
  }, [open, projectTypeLabel, projectType, accountId, user]);

  const loadAccounts = async () => {
    if (!user?.id) return;
    
    setAccountsLoading(true);
    try {
      // Get user's org_id first
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('org_id')
        .eq('user_id', user.id)
        .maybeSingle();

      if (profileError || !profileData?.org_id) {
        throw new Error('No se pudo obtener la organización del usuario');
      }

      const { data, error } = await supabase
        .from('accounts')
        .select('id, name, email, company')
        .eq('status', 'active')
        .eq('org_id', profileData.org_id)
        .order('name');

      if (error) throw error;
      
      // Ensure accounts is always an array
      const accountsData = data || [];
      setAccounts(accountsData);
    } catch (error) {
      console.error('Error loading accounts:', error);
      setAccounts([]); // Reset to empty array on error
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las cuentas',
        variant: 'destructive',
      });
    } finally {
      setAccountsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAccount || !name) return;

    setLoading(true);
    try {
      // Get user's org_id from profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('org_id')
        .eq('user_id', user?.id)
        .maybeSingle();

      if (profileError || !profileData?.org_id) {
        throw new Error('No se pudo obtener la organización del usuario');
      }

      const { data, error } = await supabase
        .from('projects')
        .insert({
          account_id: accountId || selectedAccount,
          name,
          type: projectType || newTask.type,
          start_date: startDate ? format(startDate, 'yyyy-MM-dd') : null,
          notes,
          status: 'active',
          created_by: user?.id,
          org_id: profileData.org_id
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Proyecto creado',
        description: `El proyecto ${name} ha sido creado exitosamente`,
      });

      // Navigate to project details or trigger callback
      if (onProjectCreated) {
        onProjectCreated();
      } else {
        navigate(`/suite/projects/${data.id}`);
      }
      onOpenChange(false);
    } catch (error) {
      console.error('Error creating project:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear el proyecto',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedAccount('');
    setName('');
    setStartDate(undefined);
    setNotes('');
    setNewTask({ type: projectType || '' });
    setAccountsOpen(false);
  };

  const handleClose = (open: boolean) => {
    if (!open) resetForm();
    onOpenChange(open);
  };

  const selectedAccountData = Array.isArray(accounts) 
    ? accounts.find(account => account.id === selectedAccount)
    : null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-seo-darkBlue border-seo-blue/20">
        <DialogHeader>
          <DialogTitle className="text-white">
            Crear Proyecto{projectTypeLabel ? ` - ${projectTypeLabel}` : ''}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Account Selector */}
          {!accountId && (
            <div className="space-y-2">
              <Label className="text-gray-300">Cliente *</Label>
            <Popover open={accountsOpen} onOpenChange={setAccountsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={accountsOpen}
                  disabled={!user || accounts.length === 0}
                  className="w-full justify-between bg-seo-dark border-seo-blue/20 text-white hover:bg-seo-blue/20"
                >
                  {selectedAccountData 
                    ? `${selectedAccountData.name} - ${selectedAccountData.email}`
                    : (user ? "Seleccionar cliente..." : "Inicia sesión para continuar")
                  }
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0 bg-seo-dark border-seo-blue/20">
                {accountsLoading ? (
                  <div className="p-4 text-gray-400 text-center">
                    Cargando clientes...
                  </div>
                ) : !accounts || !Array.isArray(accounts) || accounts.length === 0 ? (
                  <div className="p-4 text-gray-400 text-center">
                    No hay clientes disponibles.
                  </div>
                ) : (
                  <>
                    <Command className="bg-seo-dark">
                      <CommandInput 
                        placeholder="Buscar cliente..." 
                        className="text-white border-none bg-transparent"
                      />
                      <CommandEmpty className="text-gray-400 p-2">
                        No se encontraron clientes.
                      </CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-y-auto">
                        {accounts
                          .filter((account): account is Account => 
                            Boolean(account && 
                                   typeof account === 'object' && 
                                   account.id && 
                                   typeof account.id === 'string'))
                          .map((account) => (
                            <CommandItem
                              key={account.id}
                              value={`${account.name || ''} ${account.email || ''}`}
                              onSelect={() => {
                                setSelectedAccount(account.id);
                                setAccountsOpen(false);
                              }}
                              className="text-white hover:bg-seo-blue/20"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedAccount === account.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              <div>
                                <div className="font-medium">{account.name || 'Sin nombre'}</div>
                                <div className="text-sm text-gray-400">{account.email || 'Sin email'}</div>
                                {account.company && (
                                  <div className="text-xs text-gray-500">{account.company}</div>
                                )}
                              </div>
                            </CommandItem>
                          ))
                        }
                      </CommandGroup>
                    </Command>
                  </>
                )}
              </PopoverContent>
            </Popover>
            </div>
          )}

          {/* Project Type */}
          <div className="space-y-2">
            <Label htmlFor="type" className="text-gray-300">Tipo de proyecto *</Label>
            <Select value={projectType || newTask.type} onValueChange={(value) => setNewTask({ ...newTask, type: value })}>
              <SelectTrigger className="bg-seo-dark border-seo-blue/20 text-white">
                <SelectValue placeholder="Seleccionar tipo de proyecto" />
              </SelectTrigger>
              <SelectContent className="bg-seo-dark border-seo-blue/20">
                <SelectItem value="SEO">SEO</SelectItem>
                <SelectItem value="SEM">SEM</SelectItem>
                <SelectItem value="WEB">WEB</SelectItem>
                <SelectItem value="ECOMMERCE">ECOMMERCE</SelectItem>
                <SelectItem value="FICHA_GOOGLE">FICHA DE GOOGLE</SelectItem>
                <SelectItem value="RANK_TO_RENT">RANK TO RENT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Nombre del Proyecto *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-seo-dark border-seo-blue/20 text-white"
              placeholder="Nombre del proyecto"
            />
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label className="text-gray-300">Fecha de Inicio</Label>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-seo-dark border-seo-blue/20 text-white hover:bg-seo-blue/20",
                    !startDate && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-seo-dark border-seo-blue/20" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    setDateOpen(false);
                  }}
                  disabled={(date) => date < new Date("1900-01-01")}
                  initialFocus
                  className="text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-gray-300">Notas</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-seo-dark border-seo-blue/20 text-white"
              placeholder="Notas adicionales del proyecto..."
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleClose(false)}
              className="border-seo-blue/20 text-gray-300 hover:bg-seo-blue/20"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading || (!accountId && !selectedAccount) || !name || !user || (!projectType && !newTask.type)}
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
            >
              {loading ? 'Creando...' : 'Crear Proyecto'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}