
import React from "react";

export const ExclusividadSection: React.FC = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">¿Por qué ofrecemos exclusividad por zona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
            <div className="bg-seo-dark/60 p-6 rounded-lg border border-seo-blue/20">
              <h3 className="text-xl font-semibold mb-3 text-seo-bright">Para nuestros clientes</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Garantizamos resultados sin competir contra nosotros mismos</li>
                <li>• Evitamos conflictos de interés en la misma área geográfica</li>
                <li>• Recursos concentrados en una única empresa por sector y zona</li>
                <li>• Estrategias personalizadas y exclusivas</li>
                <li>• Mayor transparencia y confianza</li>
              </ul>
            </div>
            
            <div className="bg-seo-dark/60 p-6 rounded-lg border border-seo-blue/20">
              <h3 className="text-xl font-semibold mb-3 text-seo-bright">Para ti, futuro cliente</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Asegura tu territorio antes que tu competencia</li>
                <li>• Certeza de que no trabajaremos con tus competidores directos</li>
                <li>• Relaciones a largo plazo basadas en resultados</li>
                <li>• Valor añadido: exclusividad = ventaja competitiva</li>
                <li>• Estrategias enfocadas solo en tu negocio</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="/#contacto" className="inline-block px-8 py-3 bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 rounded-lg text-white font-medium transition-all">
              Consulta disponibilidad para tu zona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
