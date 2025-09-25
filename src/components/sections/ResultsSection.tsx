
import { CounterCard } from "@/components/ui/counter-card";

export function ResultsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
              <span className="text-xs font-medium text-seo-bright">RESULTADOS COMPROBADOS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Datos que demuestran <span className="text-gradient">nuestra eficacia</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Nuestro enfoque basado en datos e impulsado por IA nos permite alcanzar resultados superiores y medibles. Las métricas hablan por sí solas:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <CounterCard 
                value={1400} 
                label="Keywords analizadas con IA" 
                prefix="+" 
              />
              
              <CounterCard 
                value={100} 
                label="Clientes con mejora de visibilidad" 
                suffix="%" 
              />
              
              <CounterCard 
                value={18000} 
                label="Productos optimizados con SEO" 
                prefix="+" 
              />
              
              <CounterCard 
                value={99} 
                label="Satisfacción de los clientes" 
                suffix="%" 
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//evoluciona-seo-robot.webp" 
              alt="Robot con dashboard de análisis SEO" 
              className="rounded-xl max-w-full shadow-2xl border border-seo-blue/20 hover-scale hover-glow transition-all duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
