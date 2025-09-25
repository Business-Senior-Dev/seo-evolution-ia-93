
import { useEffect, useState } from "react";
import { BusinessSearchForm } from "./BusinessSearchForm";
import { AuditResults } from "./AuditResults";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export type AuditResult = {
  place_id: string;
  nombre_negocio: string;
  direccion: string;
  num_resenas: number;
  valoracion: number;
  categoria: string;
  telefono: string;
  sitio_web: string;
  horarios_configurados: boolean;
  num_fotos: number;
  tiene_resenas: boolean;
  muchas_resenas: boolean;
  buena_valoracion: boolean;
  keyword_en_titulo: boolean;
  categoria_correcta: boolean;
  ficha_verificada: boolean;
  datos_completos: boolean;
  tiene_fotos: boolean;
  puntuacion: number;
  business_name: string;
  location: string;
}

export const LocalSEOAuditor = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSearch = async (businessName: string, location: string) => {
    setIsSearching(true);
    setError(null);
    
    try {
      // Call the Supabase Edge Function that securely handles the Google Places API
      const { data, error } = await supabase.functions.invoke("seo-local-audit", {
        body: { businessName, location },
      });
      
      if (error) throw new Error(error.message);
      if (!data) throw new Error("No se recibieron datos");
      
      console.log("Audit result:", data);
      setAuditResult(data);
      
      // Store the audit result in Supabase
      setIsSaving(true);
      const { error: dbError } = await supabase.from('local_audits').insert([{
        business_name: data.business_name,
        location: data.location,
        place_id: data.place_id,
        nombre_negocio: data.nombre_negocio,
        direccion: data.direccion,
        num_resenas: data.num_resenas,
        valoracion: data.valoracion,
        categoria: data.categoria,
        telefono: data.telefono,
        sitio_web: data.sitio_web,
        horarios_configurados: data.horarios_configurados,
        num_fotos: data.num_fotos,
        tiene_resenas: data.tiene_resenas,
        muchas_resenas: data.muchas_resenas,
        buena_valoracion: data.buena_valoracion,
        keyword_en_titulo: data.keyword_en_titulo,
        categoria_correcta: data.categoria_correcta,
        ficha_verificada: data.ficha_verificada,
        datos_completos: data.datos_completos,
        tiene_fotos: data.tiene_fotos,
        puntuacion: data.puntuacion
      }]);
      
      if (dbError) {
        console.error("Error saving to database:", dbError);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error guardando los resultados de la auditoría"
        });
      } else {
        console.log("Audit result saved to database successfully");
      }
      
    } catch (err) {
      console.error("Error in local SEO audit:", err);
      setError(err.message || "Error al realizar la auditoría");
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "Error al realizar la auditoría"
      });
    } finally {
      setIsSearching(false);
      setIsSaving(false);
    }
  };

  const handleRequestOptimization = () => {
    setShowLeadForm(true);
  };

  const handleLeadSubmit = async (userData: { nombre: string; email: string; telefono: string }) => {
    if (!auditResult) return;
    
    try {
      // Update the audit record with user data
      const { error } = await supabase
        .from('lead_users')
        .insert([{
          user_nombre: userData.nombre,
          user_email: userData.email,
          user_telefono: userData.telefono
        }]);
      
      if (error) {
        console.error("Error updating user data:", error);
        throw new Error("No se pudieron guardar tus datos");
      }
      
      toast({
        title: "¡Solicitud enviada!",
        description: "En breve nos pondremos en contacto contigo para explicarte cómo podemos mejorar tu ficha con IA"
      });
      
    } catch (err) {
      console.error("Error al guardar datos de usuario:", err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron guardar tus datos. Por favor, inténtalo nuevamente."
      });
    }
  };

  return (
    <div className="py-36 px-4"> {/* Increased top padding from py-24 to py-36 */}
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-seo-blue to-seo-cyan">
              Auditoría SEO Local con IA
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Analiza tu ficha de negocio en Google y descubre cómo mejorar tu visibilidad local
            </p>
            <div className="bg-seo-card p-6 rounded-lg shadow-lg">
              <BusinessSearchForm onSubmit={handleSearch} isSearching={isSearching} />
            </div>
          </div>

          {isSearching && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 size={40} className="animate-spin text-seo-blue mb-4" />
              <p className="text-gray-300">Analizando ficha de negocio...</p>
            </div>
          )}

          {isSaving && (
            <div className="flex flex-col items-center justify-center py-4">
              <p className="text-gray-300 text-sm">Guardando resultados...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900/20 border border-red-700 text-red-100 p-4 rounded-md mb-8">
              <p>{error}</p>
              <p className="mt-2 text-sm">Intenta con términos más específicos o comprueba que el negocio tenga ficha en Google.</p>
            </div>
          )}

          {auditResult && !isSearching && (
            <>
              <AuditResults result={auditResult} onRequestOptimization={handleRequestOptimization} />
              
              {showLeadForm && (
                <div className="mt-10">
                  <LeadCaptureForm onSubmit={handleLeadSubmit} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
