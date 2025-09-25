
import React from 'react';
import { Globe } from "lucide-react";

export const OnPageSection = () => {
  return (
    <section className="py-20 bg-seo-darkBlue">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimización <span className="text-seo-bright">On-Page</span></h2>
          <p className="text-gray-300 text-lg">Mejoramos todos los elementos dentro de tu web para maximizar su relevancia para los buscadores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-seo-dark border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Optimización de contenidos</h3>
            <p className="text-gray-300">Creación y mejora de contenidos optimizados con palabras clave estratégicas y relevantes para tu audiencia.</p>
          </div>
          <div className="bg-seo-dark border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Estructura web SEO-friendly</h3>
            <p className="text-gray-300">Mejora de arquitectura web, URLs, títulos y metadatos para facilitar la indexación y relevancia.</p>
          </div>
          <div className="bg-seo-dark border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Optimización técnica</h3>
            <p className="text-gray-300">Mejora de velocidad de carga, experiencia móvil, estructura de datos y aspectos técnicos clave.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
