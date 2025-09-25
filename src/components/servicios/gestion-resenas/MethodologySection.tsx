
import { BarChart, Shield, Star } from "lucide-react";

export function MethodologySection() {
  return (
    <section className="py-16 md:py-24 bg-seo-darkBlue relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Nuestra metodología <span className="text-gradient">tecnología + estrategia + precisión</span>
          </h2>
          
          <p className="text-gray-300 text-center mb-12">
            En Evoluciona SEO combinamos inteligencia artificial, experiencia técnica y planificación estratégica para 
            optimizar cada aspecto de tu presencia online. Desde la estructura hasta el contenido, automatizamos procesos 
            clave, detectamos oportunidades con análisis en tiempo real y aplicamos acciones totalmente personalizadas 
            según el comportamiento de tus usuarios. El resultado: más visibilidad, mejor posicionamiento y un sitio 
            preparado para convertir.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-seo-card p-6 rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <Star className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Análisis</h3>
              <p className="text-gray-300">Evaluamos tu situación actual, competencia y oportunidades para diseñar una estrategia personalizada.</p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Implementación</h3>
              <p className="text-gray-300">Ponemos en marcha las acciones estratégicas para captar y gestionar reseñas de forma eficiente.</p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Optimización</h3>
              <p className="text-gray-300">Monitorizamos resultados continuamente para ajustar y mejorar la estrategia de reseñas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
