
import React from 'react';
import { Zap, LineChart, Search } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-seo-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué el SEO con IA es el <span className="text-seo-bright">futuro del posicionamiento</span>?</h2>
          <p className="text-gray-300 text-lg">La integración de inteligencia artificial en el posicionamiento SEO permite optimizar tu web con mayor precisión y menos recursos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-seo-darkBlue border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Zap className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Análisis de datos avanzado</h3>
            <p className="text-gray-300">La IA procesa y analiza grandes volúmenes de datos para identificar patrones y oportunidades de posicionamiento.</p>
          </div>
          <div className="bg-seo-darkBlue border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <LineChart className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Optimización continua</h3>
            <p className="text-gray-300">Los algoritmos de aprendizaje automático ajustan constantemente la estrategia SEO basándose en los resultados obtenidos.</p>
          </div>
          <div className="bg-seo-darkBlue border border-seo-blue/20 p-8 rounded-lg">
            <div className="bg-seo-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Search className="text-seo-bright" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalización a medida</h3>
            <p className="text-gray-300">Estrategias SEO adaptadas a tu industria, competencia y objetivos específicos de negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
