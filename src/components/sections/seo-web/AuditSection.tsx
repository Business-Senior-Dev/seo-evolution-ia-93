
import React from 'react';
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export const AuditSection = () => {
  return (
    <section className="py-20 bg-seo-darkBlue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Auditoría SEO <span className="text-seo-bright">Inteligente</span></h2>
            <p className="text-gray-300 text-lg mb-6">Nuestro análisis SEO automatizado detecta todos los problemas que afectan a tu posicionamiento.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Análisis técnico completo</h4>
                  <p className="text-gray-400">Verificación de velocidad, indexabilidad, arquitectura web, errores y problemas críticos.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Benchmarking de competidores</h4>
                  <p className="text-gray-400">Comparativa con tus competidores directos para identificar oportunidades.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Recomendaciones priorizadas</h4>
                  <p className="text-gray-400">Plan de acción detallado con las mejoras más importantes primero.</p>
                </div>
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              Solicitar auditoría gratuita
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-seo-dark border border-seo-blue/20 rounded-lg p-6 shadow-xl">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//Futuristic-AI-powered.webp" 
                alt="Dashboard de auditoría SEO con IA" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
