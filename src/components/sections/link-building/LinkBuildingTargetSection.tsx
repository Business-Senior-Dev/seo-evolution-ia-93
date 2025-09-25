
import { ShoppingCart, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LinkBuildingTargetSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Para qué tipo de proyectos está <span className="text-gradient">pensado este servicio</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShoppingCart,
              title: "Tiendas online",
              description: "Aumenta tu visibilidad frente a la competencia y mejora tus fichas de producto en Google."
            },
            {
              icon: MapPin,
              title: "Negocios locales",
              description: "Refuerza tu autoridad geolocalizada y mejora tu posicionamiento en búsquedas locales."
            },
            {
              icon: FileText,
              title: "Proyectos de contenido y blogs",
              description: "Escala artículos y publicaciones clave para atraer tráfico estable desde Google."
            }
          ].map((item, i) => (
            <div key={i} className="bg-seo-card rounded-xl p-8 border border-seo-blue/10 hover-scale transition-all duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-seo-blue/10">
                <item.icon size={24} className="text-seo-bright" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              
              <Button asChild variant="outline" className="w-full border-seo-blue/40 text-white hover:bg-seo-blue/10">
                <a href="#contacto">Solicitar información</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
