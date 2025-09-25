
import React from "react";
import { CtaButton } from "./CtaButton";

export function BenefitsSection() {
  return (
    <section className="py-16 bg-seo-darkBlue relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-seo-blue/5 rounded-full filter blur-3xl -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">RESULTADOS TANGIBLES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ventajas del <span className="text-gradient">SEO local automatizado con IA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mt-4">
            Optimiza tu presencia en línea y conecta con clientes cercanos. Nuestro SEO local con inteligencia artificial personaliza la búsqueda y mejora la visibilidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
}

const benefits = [
  {
    title: "Mayor visibilidad en búsquedas locales",
    description: "Aumenta la exposición de tu negocio en los motores de búsqueda cuando los usuarios buscan servicios como el tuyo en tu zona de influencia."
  },
  {
    title: "Alcance a clientes locales",
    description: "Llega a consumidores interesados en tus productos o servicios que se encuentran a poca distancia de tu negocio y están listos para comprar."
  },
  {
    title: "Confianza y credibilidad",
    description: "Fortalece la relación con tu comunidad local y construye una reputación sólida a través de reseñas positivas y presencia constante en resultados."
  }
];

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="bg-seo-card border border-seo-blue/10 rounded-xl p-6 hover-scale hover-glow transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}
