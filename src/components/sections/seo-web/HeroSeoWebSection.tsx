import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSeoWebSection = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-seo-darkBlue to-seo-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            SEO Web con <span className="text-seo-bright">Inteligencia Artificial</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Optimiza tu sitio web con estrategias SEO potenciadas por IA. Mejora tu posicionamiento en buscadores de forma inteligente y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              Hablar con un experto
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
