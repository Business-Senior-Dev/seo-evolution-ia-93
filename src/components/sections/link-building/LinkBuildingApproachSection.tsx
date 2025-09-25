
import { Search, Shield, LineChart } from "lucide-react";

export function LinkBuildingApproachSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-seo-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nuestro enfoque <span className="text-gradient">inteligente</span> para construir enlaces
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Análisis automatizado con IA",
              description: "Utilizamos herramientas basadas en inteligencia artificial para detectar patrones, identificar páginas relevantes y encontrar oportunidades reales para tu negocio."
            },
            {
              icon: Shield,
              title: "Identificación de sitios web relevantes",
              description: "Nos aseguramos de que cada enlace provenga de un sitio con autoridad real, buena reputación y alineado con tu temática. Nada de granjas de enlaces ni webs spam."
            },
            {
              icon: LineChart,
              title: "Optimización de anchor text",
              description: "Creamos un perfil de enlaces natural, variado y equilibrado. Combinamos enlaces de marca, genéricos y exactos para maximizar resultados y minimizar riesgos."
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
      </div>
    </section>
  );
}
