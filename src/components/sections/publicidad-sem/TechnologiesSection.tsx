
import { Brain, Server, Database, Network, Award, Bot } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export const TechnologiesSection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Algoritmos de aprendizaje automático",
      description: "Utilizamos modelos de aprendizaje automático avanzados que mejoran continuamente basándose en los resultados de las campañas y patrones de comportamiento."
    },
    {
      icon: Server,
      title: "Procesamiento de lenguaje natural (NLP)",
      description: "Análisis semántico para entender la intención de búsqueda y crear anuncios más relevantes que aumentan la tasa de clics y conversiones."
    },
    {
      icon: Database,
      title: "Análisis predictivo",
      description: "Anticipamos tendencias y comportamientos para ajustar las estrategias antes que la competencia, maximizando oportunidades de mercado."
    },
    {
      icon: Network,
      title: "Optimización multicanal",
      description: "Algoritmos que distribuyen el presupuesto en tiempo real entre diferentes plataformas para maximizar el rendimiento global."
    },
    {
      icon: Award,
      title: "Motores de recomendación",
      description: "Sistemas que sugieren combinaciones óptimas de palabras clave, textos y segmentación basados en históricos de éxito."
    },
    {
      icon: Bot,
      title: "Automatización inteligente",
      description: "Procesos automatizados que realizan ajustes tácticos mientras nuestros expertos se centran en decisiones estratégicas de alto nivel."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Tecnologías de <span className="text-gradient">IA</span> que potencian nuestro SEM
          </h2>
          <p className="text-gray-300 mb-8">
            Combinamos las más avanzadas herramientas de inteligencia artificial para maximizar 
            el rendimiento de tus campañas publicitarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <FeatureCard 
              key={index}
              Icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
