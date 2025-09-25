
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export interface ZonaFormData {
  servicio: string;
  localizacion: string;
  telefono: string;
}

export interface ZonaFormState {
  isLoading: boolean;
  isSuccess: boolean;
  interesadosCount: number;
}

export const useZonaForm = () => {
  const [formState, setFormState] = useState<ZonaFormState>({
    isLoading: false,
    isSuccess: false,
    interesadosCount: 0
  });

  const handleSubmit = async (data: ZonaFormData) => {
    setFormState(prev => ({ ...prev, isLoading: true }));
    
    try {
      // Guardar datos en Supabase
      const { error } = await supabase
        .from('zona_requests')
        .insert([{
          servicio: data.servicio,
          localizacion: data.localizacion,
          telefono: data.telefono
        }]);
      
      if (error) throw error;
      
      // Generar número aleatorio de interesados (entre 1 y 9)
      const randomInteresados = Math.floor(Math.random() * 9) + 1;
      
      setFormState({
        isLoading: false,
        isSuccess: true,
        interesadosCount: randomInteresados
      });
      
      toast({
        title: "Solicitud enviada",
        description: "Hemos recibido tu solicitud de disponibilidad",
        variant: "default",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setFormState(prev => ({ ...prev, isLoading: false }));
      
      toast({
        title: "Error",
        description: "Ha ocurrido un error al comprobar la disponibilidad",
        variant: "destructive",
      });
    }
  };
  
  const resetForm = () => {
    setFormState({
      isLoading: false,
      isSuccess: false,
      interesadosCount: 0
    });
  };

  return {
    ...formState,
    handleSubmit,
    resetForm
  };
};
