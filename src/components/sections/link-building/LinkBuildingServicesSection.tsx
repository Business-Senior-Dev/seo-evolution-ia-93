
import { Search, BarChart, FileText } from "lucide-react";

export function LinkBuildingServicesSection() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden bg-seo-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Qué incluye nuestro servicio de <span className="text-gradient">Link Building con IA</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Auditoría inicial de perfil de enlaces",
              description: "Analizamos tu situación actual para detectar enlaces tóxicos, identificar oportunidades y diseñar un plan personalizado."
            },
            {
              icon: BarChart,
              title: "Estrategia personalizada para tu sector",
              description: "Cada estrategia se adapta a tu tipo de negocio, competencia, presupuesto y objetivos de crecimiento."
            },
            {
              icon: FileText,
              title: "Informe mensual con evolución",
              description: "Te enviamos informes claros con todos los enlaces conseguidos, su calidad, autoridad y evolución SEO."
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
