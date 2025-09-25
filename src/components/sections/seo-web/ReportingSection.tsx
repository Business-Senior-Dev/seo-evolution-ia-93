
import React from 'react';
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export const ReportingSection = () => {
  return (
    <section className="py-20 bg-seo-darkBlue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Informes y <span className="text-seo-bright">Seguimiento</span></h2>
            <p className="text-gray-300 text-lg mb-6">Monitorización constante de resultados con dashboards personalizados e informes detallados de rendimiento.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Supervisión técnica continua</h4>
                  <p className="text-gray-400">Nuestro equipo revisa periódicamente los datos clave para detectar cualquier desviación y actuar de inmediato.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Informes periódicos</h4>
                  <p className="text-gray-400">Reportes mensuales con análisis detallado de evolución y logros conseguidos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Alertas inteligentes</h4>
                  <p className="text-gray-400">Notificaciones automáticas sobre cambios importantes o alertas que requieren atención.</p>
                </div>
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              Hablar con un experto
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-seo-dark border border-seo-blue/20 rounded-lg p-6 shadow-xl">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//imagen-tipo-mockup-futurista.webp" 
                alt="Dashboard de informes SEO" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
