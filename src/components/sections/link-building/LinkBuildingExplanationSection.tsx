
import { Link2, Shield, LineChart } from "lucide-react";

export function LinkBuildingExplanationSection() {
  return (
    <section id="que-es" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Qué es el Link Building y por qué es <span className="text-gradient">clave para el SEO</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-seo-card rounded-xl p-8 border border-seo-blue/10">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
              <Link2 size={24} className="text-seo-bright" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              La importancia de los enlaces en el posicionamiento
            </h3>
            
            <p className="text-gray-300">
              Los enlaces que apuntan a tu web son una de las señales más valoradas por Google para determinar tu autoridad. Cuantos más enlaces de calidad recibes, mejor posición puedes lograr en las búsquedas.
            </p>
          </div>
          
          <div className="bg-seo-card rounded-xl p-8 border border-seo-blue/10">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
              <Shield size={24} className="text-seo-bright" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Factores que influyen en la autoridad de tu web
            </h3>
            
            <p className="text-gray-300">
              No todos los enlaces valen lo mismo. La temática, la autoridad del sitio que te enlaza, el texto ancla y la naturalidad del perfil son factores clave para escalar posiciones sin penalizaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
