
import React from "react";

export function MethodologySection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">PROCESO</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Nuestra metodología <span className="text-gradient">tecnología + estrategia + precisión</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 mt-6">
            En Evoluciona SEO combinamos el poder de la tecnología con la experiencia estratégica para ofrecer resultados precisos y medibles.
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 mt-4">
            Nuestra metodología se basa en el análisis de datos en tiempo real, la automatización inteligente de procesos SEO y la personalización total de cada acción según la ubicación y el comportamiento de tus potenciales clientes.
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 mt-4">
            Aplicamos inteligencia artificial para identificar oportunidades locales, anticipar tendencias y optimizar cada detalle que influye en tu posicionamiento. Porque no se trata solo de aparecer en Google, sino de hacerlo mejor que tu competencia… y en el momento justo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {methodologyItems.map((item, index) => (
            <MethodologyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MethodologyCardProps {
  title: string;
  description: string;
}

const methodologyItems = [
  {
    title: "Tecnología",
    description: "Utilizamos algoritmos avanzados y herramientas de IA para analizar datos y tendencias locales."
  },
  {
    title: "Estrategia",
    description: "Desarrollamos planes personalizados basados en el conocimiento de tu mercado local."
  },
  {
    title: "Precisión",
    description: "Optimizamos cada detalle para maximizar resultados y retorno de inversión comprobable."
  }
];

function MethodologyCard({ title, description }: MethodologyCardProps) {
  return (
    <div className="bg-seo-card border border-seo-blue/10 rounded-xl p-6 hover-scale hover-glow transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}
