
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(6, "Teléfono inválido")
});

interface LeadCaptureFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

export const LeadCaptureForm = ({ onSubmit }: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: ""
    }
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="bg-seo-blue/10 border border-seo-blue/30 rounded-lg p-6 animate-fade-in">
      <h3 className="text-xl font-bold mb-4 text-center text-white">Solicita tu optimización personalizada</h3>
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre" 
                      className="bg-seo-dark border-seo-blue/20" 
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
                      className="bg-seo-dark border-seo-blue/20" 
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
                      className="bg-seo-dark border-seo-blue/20" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar optimización"}
            </Button>
          </div>
          
          <p className="text-xs text-center text-gray-400 mt-2">
            Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para poder atender tu solicitud.
          </p>
        </form>
      </Form>
    </div>
  );
};
