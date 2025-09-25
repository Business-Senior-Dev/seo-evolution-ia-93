
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Definir el esquema de validación
const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().min(9, { message: "Teléfono inválido" }).max(15)
});

type FormValues = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: ""
    }
  });
  
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Intentar guardar en Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            nombre: data.nombre,
            email: data.email,
            telefono: data.telefono,
            fuente: 'analizador-encabezados-seo'
          }
        ]);
          
      if (error) throw error;
      
      // Enviar datos a Zapier en paralelo sin esperar respuesta
      sendToZapier(data);
      
      // Mostrar mensaje de éxito
      setIsSuccess(true);
      toast({
        title: "Solicitud enviada",
        description: "En breve recibirás tu informe gratuito por email.",
      });
      
      // Reiniciar formulario
      form.reset();
      
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar tu solicitud. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Función para enviar datos a Zapier
  function sendToZapier(data: FormValues) {
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/22459800/2psush1/";
    
    // Enviamos los datos en formato JSON plano
    fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        proyecto_interesado: "analizador-encabezados-seo"  // Añadido el campo proyecto_interesado
      }),
      // No esperamos respuesta y no bloqueamos
      mode: "no-cors"
    }).catch(error => {
      // Solo registramos el error en consola sin afectar la experiencia del usuario
      console.error("Error al enviar datos a Zapier:", error);
    });
  }

  if (isSuccess) {
    return (
      <div className="bg-seo-card border-seo-blue/20 border rounded-lg p-6 text-center animate-fade-in">
        <h3 className="text-xl font-bold text-white mb-3">¡Gracias!</h3>
        <p className="text-gray-300">En breve recibirás tu informe gratuito por email.</p>
      </div>
    );
  }

  return (
    <div className="bg-seo-card border-seo-blue/20 border rounded-lg p-6 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          ¿Quieres recibir un informe detallado y gratuito de cómo mejorar tu SEO?
        </h3>
        <p className="text-gray-300">Completa el formulario y te enviaremos un análisis personalizado.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre" 
                      className="bg-seo-darkBlue border-seo-blue/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Tu email" 
                      className="bg-seo-darkBlue border-seo-blue/20" 
                      {...field} 
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
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Tu teléfono" 
                      className="bg-seo-darkBlue border-seo-blue/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-center pt-2">
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Enviando..." : "Sí, quiero la auditoría"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
