
import { TrendingUp, Shield, Clock } from "lucide-react";

export function LinkBuildingBenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Beneficios del Link Building <span className="text-gradient">automatizado</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Incremento de autoridad y tráfico",
              description: "A medida que aumentas tu autoridad, mejoras tu visibilidad en buscadores y atraes visitas cualificadas a tu web de forma continua."
            },
            {
              icon: Shield,
              title: "Posicionamiento sin penalizaciones",
              description: "Evitamos técnicas agresivas. Todo el proceso está diseñado para cumplir las directrices de Google y construir una reputación digital sólida."
            },
            {
              icon: Clock,
              title: "Ahorro de tiempo y recursos",
              description: "Automatizamos las tareas más pesadas y repetitivas, reduciendo tiempos y costes. Tú solo ves los resultados."
            }
          ].map((item, i) => (
            <div key={i} className="bg-seo-card rounded-xl p-8 border border-seo-blue/10 hover-scale transition-all duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
                <item.icon size={24} className="text-seo-bright" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
