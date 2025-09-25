import React from 'react';
import { Button } from "@/components/ui/button";

export const LinkBuildingHeroSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
              <span className="text-xs font-medium text-seo-bright">LINK BUILDING INTELIGENTE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Link Building Inteligente con <span className="text-gradient">IA</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Consigue enlaces de calidad de forma automatizada y mejora tu posicionamiento en Google con una estrategia de Link Building diseñada por inteligencia artificial. Precisión, relevancia y autoridad, sin perder tiempo ni asumir riesgos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
              >
                <a href="#contacto">Solicitar estrategia gratuita</a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-seo-blue/40 text-white hover:bg-seo-blue/10"
              >
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue to-seo-cyan opacity-20 blur-2xl rounded-full"></div>
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//evoluciona-seo-ajedrez.webp" 
                alt="Estrategia de Link Building con IA" 
                className="relative rounded-xl max-w-full shadow-2xl border border-seo-blue/20 hover-scale hover-glow transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
