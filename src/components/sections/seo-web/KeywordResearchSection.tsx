import React from 'react';
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export const KeywordResearchSection = () => {
  return (
    <section className="py-20 bg-seo-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investigación de Palabras Clave <span className="text-seo-bright">Optimizada</span></h2>
            <p className="text-gray-300 text-lg mb-6">Descubrimos las palabras clave con mayor potencial para tu negocio utilizando algoritmos de IA.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Análisis semántico avanzado</h4>
                  <p className="text-gray-400">Identificación de términos relacionados con alto valor de conversión.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Estudio de intención de búsqueda</h4>
                  <p className="text-gray-400">Clasificación por intención informativa, comercial o transaccional.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Previsión de tendencias</h4>
                  <p className="text-gray-400">Identificación de keywords emergentes en tu sector.</p>
                </div>
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              Descubrir palabras clave
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-seo-darkBlue border border-seo-blue/20 rounded-lg p-6 shadow-xl">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//seo-on-page.webp" 
                alt="Análisis de palabras clave con IA" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
