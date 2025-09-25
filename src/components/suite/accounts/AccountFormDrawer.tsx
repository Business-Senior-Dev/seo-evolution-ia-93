import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const accountSchema = z.object({
  type: z.enum(['client', 'partner', 'vendor', 'internal']),
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  vat_id: z.string().optional(),
  billing_address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
  }).optional(),
  notes: z.string().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

interface Account {
  id: string;
  name: string;
  type: 'client' | 'partner' | 'vendor' | 'internal';
  email: string;
  phone: string | null;
  company: string | null;
  vat_id: string | null;
  billing_address: any;
  notes: string | null;
}

interface AccountFormDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  account?: Account | null;
  onSave: () => void;
}

export function AccountFormDrawer({ open, onOpenChange, account, onSave }: AccountFormDrawerProps) {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      type: 'client',
      name: '',
      email: '',
      phone: '',
      company: '',
      vat_id: '',
      billing_address: {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: 'España',
      },
      notes: '',
    },
  });

  useEffect(() => {
    if (account) {
      form.reset({
        type: account.type,
        name: account.name,
        email: account.email,
        phone: account.phone || '',
        company: account.company || '',
        vat_id: account.vat_id || '',
        billing_address: {
          street: account.billing_address?.street || '',
          city: account.billing_address?.city || '',
          state: account.billing_address?.state || '',
          zip: account.billing_address?.zip || '',
          country: account.billing_address?.country || 'España',
        },
        notes: account.notes || '',
      });
    } else {
      form.reset({
        type: 'client',
        name: '',
        email: '',
        phone: '',
        company: '',
        vat_id: '',
        billing_address: {
          street: '',
          city: '',
          state: '',
          zip: '',
          country: 'España',
        },
        notes: '',
      });
    }
  }, [account, form]);

  const onSubmit = async (data: AccountFormData) => {
    if (!profile?.org_id) return;

    setLoading(true);
    try {
      // Check for duplicate email
      if (!account || data.email !== account.email) {
        const { data: existingAccount } = await supabase
          .from('accounts')
          .select('id')
          .eq('email', data.email)
          .eq('org_id', profile.org_id)
          .single();

        if (existingAccount) {
          toast({
            title: 'Advertencia',
            description: 'Ya existe una cuenta con este email en tu organización. ¿Deseas continuar de todas formas?',
            variant: 'destructive',
          });
          // In a real implementation, you'd show a confirmation dialog
        }
      }

      const accountData = {
        type: data.type,
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        vat_id: data.vat_id || null,
        billing_address: data.billing_address,
        notes: data.notes || null,
        org_id: profile.org_id,
        created_by: profile.user_id,
      };

      let result;
      if (account) {
        // Update existing account
        result = await supabase
          .from('accounts')
          .update(accountData)
          .eq('id', account.id);
      } else {
        // Create new account
        result = await supabase
          .from('accounts')
          .insert([accountData]);
      }

      if (result.error) throw result.error;

      toast({
        title: 'Éxito',
        description: account ? 'Cuenta actualizada correctamente' : 'Cuenta creada correctamente',
      });

      onSave();
    } catch (error) {
      console.error('Error saving account:', error);
      toast({
        title: 'Error',
        description: 'No se pudo guardar la cuenta',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-seo-dark border-seo-blue/20 max-h-[90vh] flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-white">
            {account ? 'Editar Cuenta' : 'Nueva Cuenta'}
          </DrawerTitle>
          <DrawerDescription className="text-gray-400">
            {account ? 'Modifica los datos de la cuenta' : 'Crea una nueva cuenta en tu organización'}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Tipo de cuenta</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-seo-darkBlue border-seo-blue/30 text-white">
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="client">Cliente</SelectItem>
                        <SelectItem value="partner">Partner</SelectItem>
                        <SelectItem value="vendor">Proveedor</SelectItem>
                        <SelectItem value="internal">Interno</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nombre *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="Nombre completo o empresa"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email" 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="email@ejemplo.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Teléfono</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="+34 600 000 000"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Empresa</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="Nombre de la empresa"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vat_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">NIF/CIF</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="B12345678"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Dirección de facturación</h3>
              
              <FormField
                control={form.control}
                name="billing_address.street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Calle</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="Calle, número, piso, puerta"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="billing_address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ciudad</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                          placeholder="Madrid"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="billing_address.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Provincia</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                          placeholder="Madrid"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="billing_address.zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Código postal</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                          placeholder="28001"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="billing_address.country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">País</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                        placeholder="España"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Notas</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      className="bg-seo-darkBlue border-seo-blue/30 text-white" 
                      placeholder="Notas adicionales sobre la cuenta..."
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </form>
          </Form>
        </div>

        <DrawerFooter className="pt-6 px-6 bg-seo-dark border-t border-seo-blue/20 mt-auto">
          <div className="flex gap-3">
            <Button 
              onClick={form.handleSubmit(onSubmit)} 
              disabled={loading}
              className="flex-1 bg-seo-blue hover:bg-seo-blue/80 text-white"
            >
              {loading ? 'Guardando...' : account ? 'Actualizar cuenta' : 'Crear cuenta'}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1 border-seo-blue/30 text-white hover:bg-seo-blue/10">
                Cancelar
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}