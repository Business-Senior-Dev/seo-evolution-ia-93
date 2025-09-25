import React from 'react';
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export const OffPageSection = () => {
  return (
    <section className="py-20 bg-seo-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Estrategia <span className="text-seo-bright">Off-Page</span> Inteligente</h2>
            <p className="text-gray-300 text-lg mb-6">Desarrollamos una autoridad sólida para tu dominio mediante técnicas avanzadas de link building y presencia digital.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Link building de calidad</h4>
                  <p className="text-gray-400">Adquisición estratégica de enlaces relevantes y de alta autoridad.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Gestión de reputación online</h4>
                  <p className="text-gray-400">Monitorización y mejora de menciones, reseñas y presencia en redes sociales.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-seo-blue/10 p-1 rounded-full mt-1">
                  <Award className="text-seo-bright" size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Estrategia de contenidos externos</h4>
                  <p className="text-gray-400">Creación y difusión de contenido en plataformas externas relevantes.</p>
                </div>
              </li>
            </ul>
            
            <Button className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90">
              Potenciar autoridad de dominio
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-seo-darkBlue border border-seo-blue/20 rounded-lg p-6 shadow-xl">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//seo-off-page-evoluciona-seo.webp" 
                alt="Estrategia de link building con IA" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
