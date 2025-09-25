
import React from "react";

export const ZonasHeroSection: React.FC = () => {
  return (
    <section className="py-32 md:py-32 bg-gradient-to-br from-seo-darkBlue to-seo-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Comprueba si tu zona está disponible
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Verificamos en tiempo real la exclusividad por zona geográfica para tu sector
          </p>
          <div className="bg-seo-blue/20 border border-seo-blue/30 rounded-lg p-6 mt-8">
            <p className="text-white">
              <span className="font-semibold text-seo-bright">Exclusividad garantizada:</span> No trabajamos con dos empresas del mismo sector en la misma zona geográfica.
              Esto asegura que nuestros esfuerzos de posicionamiento sean exclusivos para tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
