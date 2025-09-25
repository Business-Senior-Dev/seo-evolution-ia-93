
import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroShopifySection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">DESARROLLO ECOMMERCE</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Creación de tiendas online con <span className="text-gradient">Shopify</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-10">
            Desarrollamos tu tienda online profesional con Shopify. Diseño personalizado, 
            optimización para ventas y soporte completo para tu negocio digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity text-white font-medium"
              aria-label="Solicitar presupuesto para una tienda Shopify"
            >
              Solicitar presupuesto
            </a>
            <a 
              href="#por-que-shopify" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-seo-blue/20 hover:bg-seo-blue/10 transition-colors text-white font-medium"
              aria-label="Descubrir más sobre desarrollo Shopify"
            >
              Descubre más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
