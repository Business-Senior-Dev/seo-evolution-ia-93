import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSemSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">PUBLICIDAD DIGITAL</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Publicidad <span className="text-gradient">SEM</span> con Inteligencia Artificial
          </h1>
          
          <p className="text-gray-300 text-lg mb-10">
            Optimiza tus campañas de Google Ads y Microsoft Advertising con estrategias impulsadas por IA. 
            Aumenta tus conversiones, reduce costes y maximiza tu retorno de inversión con nuestra solución 
            de Publicidad SEM Inteligente.
          </p>

          <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
            <a href="#contacto">Solicitar estrategia SEM</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
