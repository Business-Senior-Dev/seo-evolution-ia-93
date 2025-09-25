
import { TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LinkBuildingSuccessSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-seo-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Casos reales de éxito: <span className="text-gradient">resultados que hablan</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: TrendingUp,
              title: "+200% de tráfico en 3 meses con enlaces de autoridad",
              description: "Uno de nuestros clientes duplicó su tráfico gracias a una estrategia de Link Building 100% segura y automatizada."
            },
            {
              icon: Shield,
              title: "Recuperación de penalizaciones gracias a enlaces limpios",
              description: "Hemos ayudado a proyectos penalizados a recuperar posiciones eliminando enlaces tóxicos y construyendo nuevos con total seguridad."
            }
          ].map((item, i) => (
            <div key={i} className="bg-seo-dark rounded-xl p-8 border border-seo-blue/10 hover-scale transition-all duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
                <item.icon size={24} className="text-seo-bright" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Solicita tu estrategia de Link Building con IA
          </h3>
          
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
          >
            <a href="#contacto">Solicitar auditoría gratuita</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
