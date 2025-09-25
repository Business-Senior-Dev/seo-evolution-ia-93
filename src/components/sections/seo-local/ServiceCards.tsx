
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, MapPin, BarChart, MessageSquare, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceCards() {
  return (
    <section id="servicios" className="py-16 bg-seo-darkBlue relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-seo-blue/5 rounded-full filter blur-3xl -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">SOLUCIONES AVANZADAS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Servicios incluidos en nuestro <span className="text-gradient">SEO Local con tecnología IA</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services = [
  {
    title: "SEO Local con Inteligencia Artificial",
    description: "Aplicamos IA para posicionar tu negocio en las búsquedas geolocalizadas más relevantes, anticipando las necesidades de tus clientes locales.",
    icon: <BrainCircuit className="w-6 h-6 text-seo-bright" />
  },
  {
    title: "Optimización de Google Business Profile",
    description: "Mejoramos tu perfil con datos precisos, imágenes optimizadas y estructura técnica que mejora la visibilidad en el mapa y resultados locales.",
    icon: <MapPin className="w-6 h-6 text-seo-bright" />
  },
  {
    title: "Análisis de comportamiento en tiempo real",
    description: "Utilizamos algoritmos para interpretar cómo buscan los usuarios en tu zona, adaptando estrategias según tendencias y comportamiento real.",
    icon: <BarChart className="w-6 h-6 text-seo-bright" />
  },
  {
    title: "Búsqueda por voz optimizada",
    description: "Adaptamos tu contenido para asistentes virtuales como Alexa, Google o Siri, facilitando que los clientes te encuentren hablando.",
    icon: <MessageSquare className="w-6 h-6 text-seo-bright" />
  },
  {
    title: "Link Building local de calidad",
    description: "Creamos una red de enlaces desde medios, directorios y webs locales que fortalecen la autoridad y relevancia de tu negocio en Google.",
    icon: <Globe className="w-6 h-6 text-seo-bright" />
  },
  {
    title: "Gestión de reseñas",
    description: "Te ayudamos a captar más opiniones positivas y a gestionar tu reputación online para aumentar la confianza y conversión de tus visitantes.",
    icon: <Star className="w-6 h-6 text-seo-bright" />
  }
];

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="bg-seo-card border-seo-blue/10 hover-scale hover-glow transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-seo-blue/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
