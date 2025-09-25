import { Check, LineChart, Search, Target, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type ProcessCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const ProcessCard = ({ title, description, icon, index }: ProcessCardProps) => {
  return (
    <div className="bg-seo-card rounded-xl p-6 hover-scale transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-seo-blue/10 text-seo-bright">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-seo-blue/20 text-xs font-medium text-seo-bright">
              {index}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

type AIFeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

const AIFeatureCard = ({ title, description, icon, className }: AIFeatureCardProps) => {
  return (
    <div className={cn("bg-seo-card rounded-xl p-6 hover-scale transition-all duration-300", className)}>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-seo-blue/10 text-seo-bright mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export function ProcessSection() {
  return (
    <section id="procesos" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">PROCESOS IMPULSADOS POR IA</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros procesos, potenciados con <span className="text-gradient">IA</span>
          </h2>
          
          <p className="text-gray-300">
            Utilizamos tecnología de vanguardia para optimizar cada aspecto de tu estrategia SEO
          </p>
        </div>
        
        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <AIFeatureCard
            title="Auditorías SEO con IA"
            description="Análisis completo de tu sitio web para identificar oportunidades de mejora y problemas técnicos utilizando algoritmos avanzados de IA."
            icon={<Search size={24} />}
          />
          
          <AIFeatureCard
            title="SEO On-Page y Off-Page"
            description="Optimización integral de todos los factores que afectan tu posicionamiento, tanto dentro como fuera de tu sitio web."
            icon={<Check size={24} />}
            className="md:translate-y-4"
          />
          
          <AIFeatureCard
            title="Optimización de contenidos con IA"
            description="Creación y optimización de contenidos utilizando herramientas de IA para maximizar su relevancia, legibilidad y potencial de posicionamiento."
            icon={<LineChart size={24} />}
          />
        </div>
        
        {/* Work Process Steps */}
        <div className="my-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro proceso de trabajo
            </h2>
            
            <p className="text-gray-300">
              Un enfoque sistemático para llevar tu estrategia SEO al siguiente nivel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ProcessCard
              index={1}
              title="Diagnóstico inteligente"
              description="Analizamos a fondo tu situación actual, competencia y oportunidades usando algoritmos de IA para establecer una línea base precisa."
              icon={<Search size={24} />}
            />
            
            <ProcessCard
              index={2}
              title="Estrategia personalizada"
              description="Diseñamos una estrategia SEO a medida basada en los datos recopilados, alineada con tus objetivos de negocio y optimizada por IA."
              icon={<Target size={24} />}
            />
            
            <ProcessCard
              index={3}
              title="Optimización y ejecución"
              description="Implementamos las mejoras técnicas, de contenido y de autoridad necesarias para impulsar tu posicionamiento orgánico."
              icon={<Check size={24} />}
            />
            
            <ProcessCard
              index={4}
              title="Seguimiento y evolución"
              description="Monitorizamos constantemente los resultados, ajustando la estrategia en tiempo real para maximizar el rendimiento SEO."
              icon={<LineChart size={24} />}
            />
          </div>
        </div>
        
        {/* Brand Promise */}
        <div className="bg-seo-card rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
                <span className="text-xs font-medium text-seo-bright">¿POR QUÉ ELEGIRNOS?</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                SEO automatizado y eficaz con <span className="text-gradient">inteligencia artificial</span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                La Inteligencia Artificial ha transformado por completo el posicionamiento web. Hoy, el SEO no es solo palabras clave: es análisis profundo de datos, personalización de contenidos y decisiones basadas en comportamiento real del usuario.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Analizamos datos en tiempo real",
                  "Optimizamos contenido de forma inteligente",
                  "Mejoramos la experiencia del usuario",
                  "Aumentamos el tráfico orgánico sin esfuerzo manual"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-seo-bright mr-2 mt-1 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//robot-evoluciona-seo.webp" 
                alt="Robot con dashboard de análisis SEO" 
                className="rounded-xl max-w-full shadow-lg border border-seo-blue/20" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
