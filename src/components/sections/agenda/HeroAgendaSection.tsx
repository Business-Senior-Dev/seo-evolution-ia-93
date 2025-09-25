
import { FC } from 'react';

export const HeroAgendaSection: FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">CONSULTORÍA GRATUITA</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Agenda una <span className="text-gradient">Consultoría SEO</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-6">
            Rellena el formulario y un experto en SEO se pondrá en contacto contigo para analizar tu proyecto sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};
