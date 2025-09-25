
import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

export function HeroLocal() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(2,132,199,0.4)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">ESTRATEGIA SEO LOCAL CON IA</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            SEO local con <span className="text-gradient">inteligencia artificial</span> para negocios que quieren crecer
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Mejora la visibilidad online de tu empresa con nuestra estrategia SEO local potenciada por IA. Posicionamiento inteligente para captar clientes cuando y donde te necesitan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="/agenda-consultoria">Consultoría gratuita</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-seo-blue/20 hover:bg-seo-blue/10">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-seo-card border border-seo-blue/10 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-seo-blue/20 flex items-center justify-center flex-shrink-0">
                <BrainCircuit className="w-6 h-6 text-seo-bright" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">¿Qué es el SEO local con IA y por qué lo necesitas?</h2>
                <p className="text-gray-300">
                  El SEO local con inteligencia artificial es una estrategia fundamental para mejorar la visibilidad online de tu empresa. La integración de IA en el posicionamiento local permite personalizar la experiencia de búsqueda y anticipar las necesidades de los usuarios. La optimización de la búsqueda por voz también juega un papel crucial en el SEO local actual.
                </p>
                <p className="text-gray-300 mt-3">
                  Nuestra metodología inteligente combina experiencia humana y precisión algorítmica para lograr resultados locales reales y medibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
