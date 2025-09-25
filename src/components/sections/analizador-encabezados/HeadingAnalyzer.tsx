
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UrlForm } from "./UrlForm";
import { AnalysisResults } from "./AnalysisResults";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export function HeadingAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError("");
    setResults(null);
    
    try {
      // Validate URL format
      if (!url.match(/^(http|https):\/\/[^ "]+$/)) {
        throw new Error("URL inválida. Asegúrate de incluir http:// o https://");
      }
      
      console.log("Analizando URL:", url);
      
      toast({
        title: "Analizando...",
        description: "Extrayendo y evaluando los encabezados de la página",
      });
      
      const { data, error: functionError } = await supabase.functions.invoke('analyze-headings', {
        body: { url },
      });
      
      if (functionError) {
        console.error("Error desde la función:", functionError);
        throw new Error(functionError.message || "Error al analizar la URL");
      }
      
      console.log("Resultados del análisis:", data);
      
      if (!data) {
        throw new Error("No se recibieron datos del análisis");
      }
      
      // Mostrar toast para confirmar análisis exitoso
      toast({
        title: "Análisis completado",
        description: `Puntuación: ${data.score}/100`,
      });
      
      setResults(data);
    } catch (err) {
      console.error("Error al analizar URL:", err);
      setError(err.message || "Error desconocido al analizar la URL");
      
      // Mostrar toast de error
      toast({
        title: "Error en el análisis",
        description: err.message || "No se pudo completar el análisis",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-seo-dark to-seo-darkBlue pt-32 md:pt-40">
      {/* Increased pt-32 and md:pt-40 for more top padding */}
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-seo-blue to-seo-cyan bg-clip-text text-transparent mb-4">
              Analiza tu estructura de encabezados SEO en segundos
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Comprueba si tu web está bien jerarquizada para Google y mejora tu posicionamiento
            </p>
          </div>
          
          <UrlForm onSubmit={analyzeUrl} isLoading={loading} />
          
          {error && (
            <div className="mt-8 p-4 bg-destructive/20 border border-destructive rounded-lg">
              <p className="text-destructive-foreground">{error}</p>
            </div>
          )}
          
          {results && (
            <>
              <AnalysisResults results={results} />
              
              {/* Formulario de captación de leads añadido aquí */}
              <div className="mt-10">
                <LeadCaptureForm />
              </div>
            </>
          )}
          
          <div className="bg-seo-card rounded-xl p-6 mt-10">
            <h2 className="text-xl font-bold text-white mb-4">¿Por qué es importante la jerarquía de encabezados?</h2>
            <p className="text-gray-300 mb-4">
              Los encabezados HTML (H1, H2, H3...) ayudan a Google a entender la estructura de tu contenido y su importancia relativa. Una estructura correcta mejora la accesibilidad, la experiencia de usuario y el SEO.
            </p>
            <p className="text-gray-300 mb-4">
              Las buenas prácticas incluyen: un único H1 por página, seguir el orden jerárquico correcto y evitar saltos entre niveles de encabezados.
            </p>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                <a href="/agenda-consultoria">
                  🚀 Quiero que un experto revise mi sitio
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
