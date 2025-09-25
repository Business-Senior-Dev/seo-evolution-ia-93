
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-seo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyectos reales de <span className="text-seo-bright">SEO Web con IA</span></h2>
          <p className="text-gray-300 text-lg">Descubre casos de éxito reales donde nuestra metodología ha generado resultados tangibles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-seo-card border-seo-blue/20 hover:border-seo-blue/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">cdfotografotoledo.es</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Resultado:</span> +500 visitas mensuales y más de 20 contactos directos al mes
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Logro:</span> Posición #1 en Google para "fotografía para eventos en Toledo"
              </p>
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-6">Web creada desde cero para un fotógrafo profesional. Estructura SEO avanzada, encabezados optimizados y 88 puntos en PageSpeed. Un ejemplo de cómo el SEO puede generar negocio real.</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://cdfotografotoledo.es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Ver proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20 hover:border-seo-blue/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Star className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">reformaslasagra.com</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Resultado:</span> Presencia líder en su zona para búsquedas relacionadas con reformas
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Logro:</span> Posición #1 para servicios clave como "reforma de cocinas en La Sagra"
              </p>
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-6">Transformación total de una web mal optimizada. Se aplicaron mejoras técnicas, estructurales y de contenido. La web ahora atrae tráfico cualificado con intención de contratación.</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://reformaslasagra.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Ver proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20 hover:border-seo-blue/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">perretesl.com</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Resultado:</span> Primera posición en su sector en menos de 3 meses
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-seo-bright font-medium">Logro:</span> SEO Local + Web rápida y personalizada (91/100 en PageSpeed)
              </p>
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-6">Web en WordPress completamente personalizada para un negocio local de autolavado de perros. Enfoque 100% orientado a conversión y visibilidad desde el primer día.</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://perretesl.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Ver proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
