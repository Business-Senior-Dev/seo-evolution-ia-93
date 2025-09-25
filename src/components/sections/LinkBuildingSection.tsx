
import { ExternalLink, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LinkBuildingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">SERVICIOS AVANZADOS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Link Building y SEM con <span className="text-gradient">IA</span>
          </h2>
          
          <p className="text-gray-300">
            Complementa tu estrategia SEO con servicios avanzados que maximizan tu presencia online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-seo-card rounded-xl p-8 border border-seo-blue/10 hover-scale transition-all duration-300">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
              <ExternalLink size={24} className="text-seo-bright" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Link Building Inteligente</h3>
            
            <p className="text-gray-300 mb-6">
              Construimos enlaces de calidad que impulsan la autoridad de tu sitio web utilizando algoritmos de IA para identificar las mejores oportunidades.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Análisis de perfil de enlaces de la competencia",
                "Estrategias personalizadas por sector",
                "Enlaces contextuales de alta calidad",
                "Monitorización y medición de resultados"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-seo-bright mr-2 mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">Solicitar Link Building</a>
            </Button>
          </div>
          
          <div className="bg-seo-card rounded-xl p-8 border border-seo-blue/10 hover-scale transition-all duration-300">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
              <BarChart size={24} className="text-seo-bright" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Publicidad SEM con IA</h3>
            
            <p className="text-gray-300 mb-6">
              Maximiza el retorno de tu inversión publicitaria con campañas SEM gestionadas por IA que optimizan en tiempo real para obtener los mejores resultados.
            </p>
            
            <ul className="space-y-3 mb-6">
              {[
                "Investigación avanzada de palabras clave",
                "Creación de anuncios optimizados por IA",
                "Ajuste automático de pujas",
                "Informes detallados de rendimiento"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-seo-bright mr-2 mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">Solicitar SEM con IA</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
