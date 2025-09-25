import { Target, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  features: string[];
  href: string;
};

const ServiceCard = ({
  title,
  description,
  icon,
  isActive = false,
  features,
  href,
}: ServiceCardProps) => {
  return (
    <Link to={href} className="block h-full">
      <div
        className={cn(
          "rounded-xl p-6 h-full hover-scale hover-glow transition-all duration-300 flex flex-col",
          isActive ? "bg-seo-card-active" : "bg-seo-card"
        )}
      >
        <div
          className={cn(
            "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
            isActive ? "bg-seo-blue/30" : "bg-seo-blue/10"
          )}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-seo-bright mr-2 mt-1 flex-shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-gray-400 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="w-full mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-seo-blue/40 text-white hover:bg-seo-blue/10"
          >
            Más información
          </Button>
        </div>
      </div>
    </Link>
  );
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">SERVICIOS EVOLUCIONASEO + IA</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Servicios de SEO impulsados por <span className="text-gradient">Inteligencia Artificial</span>
          </h2>

          <p className="text-gray-300">
            Visibilidad, posicionamiento y resultados reales con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            title="SEO Local con IA"
            description="Haz que tu negocio destaque en búsquedas locales con estrategias potenciadas por Inteligencia Artificial."
            icon={<Target size={24} className="text-seo-bright" />}
            features={[
              "Optimización de Google Business Profile",
              "Análisis de competencia local",
              "Estrategia de palabras clave geolocalizadas",
              "Construcción de citas y directorios locales"
            ]}
            href="/servicios/seo-local-ia"
          />

          <ServiceCard
            title="SEO Web con IA"
            description="Mejora el posicionamiento orgánico de tu sitio web con estrategias SEO avanzadas e inteligentes."
            icon={<Globe size={24} className="text-seo-bright" />}
            isActive={true}
            features={[
              "Auditoría técnica completa",
              "Optimización on-page y off-page",
              "Estrategia de contenidos SEO",
              "Mejora de Core Web Vitals"
            ]}
            href="/servicios/seo-web-ia"
          />

          <ServiceCard
            title="SEO para Ecommerce con IA"
            description="Incrementa las ventas de tu tienda online con estrategias SEO específicas para comercio electrónico."
            icon={<ShoppingCart size={24} className="text-seo-bright" />}
            features={[
              "Optimización de fichas de producto",
              "Estructura de categorías SEO-friendly",
              "Experiencia de usuario para conversión",
              "Estrategia de palabras clave con intención de compra"
            ]}
            href="/servicios/seo-ecommerce-ia"
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
            <a href="#contacto">Solicitar Consulta Gratuita</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
