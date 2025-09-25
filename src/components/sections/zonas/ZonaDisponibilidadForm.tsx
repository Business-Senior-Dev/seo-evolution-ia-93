
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ZonaFormData, useZonaForm } from "@/hooks/use-zona-form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  servicio: z.string().min(3, "El servicio debe tener al menos 3 caracteres"),
  localizacion: z.string().min(2, "La localización debe tener al menos 2 caracteres"),
  telefono: z.string()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .regex(/^[0-9+\s-]+$/, "Formato de teléfono inválido")
});

export const ZonaDisponibilidadForm: React.FC = () => {
  const { isLoading, isSuccess, interesadosCount, handleSubmit, resetForm } = useZonaForm();
  
  const form = useForm<ZonaFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      servicio: "",
      localizacion: "",
      telefono: ""
    }
  });

  const onSubmit = (data: ZonaFormData) => {
    handleSubmit(data);
  };

  const handleReset = () => {
    form.reset();
    resetForm();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!isSuccess ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="servicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Tipo de negocio o servicio</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ej: Dentista, Restaurante, Marketing" 
                      {...field} 
                      className="bg-white/10 border-gray-700 text-white focus:border-seo-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="localizacion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Ciudad o código postal</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ej: Madrid, 28001, Barcelona" 
                      {...field} 
                      className="bg-white/10 border-gray-700 text-white focus:border-seo-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Teléfono</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Ej: 666777888" 
                      {...field} 
                      className="bg-white/10 border-gray-700 text-white focus:border-seo-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                  Comprobando...
                </span>
              ) : "Consultar disponibilidad"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="bg-seo-blue/20 border border-seo-blue/30 rounded-lg p-8 text-center text-white">
          <div className="mb-6">
            <span className="text-5xl text-seo-bright">✅</span>
            <h3 className="text-2xl font-bold mt-4">Tu zona está disponible para trabajar contigo</h3>
            <p className="text-gray-300 mt-4">
              📍 Ahora mismo hay <span className="text-seo-bright font-bold">{interesadosCount}</span> usuarios interesados en este servicio en tu zona.
            </p>
          </div>
          
          <div className="space-y-4 mt-8">
            <Button 
              className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = "/#contacto"}
            >
              Reserva tu zona ahora
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-seo-blue/30 text-seo-bright hover:bg-seo-blue/10"
              onClick={handleReset}
            >
              Comprobar otra zona
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
