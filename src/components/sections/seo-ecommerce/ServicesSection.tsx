
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, FileText, Cpu, UserCheck } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Análisis avanzado de datos",
      description: "Interpretamos el comportamiento de tus clientes para descubrir patrones, anticipar tendencias y adaptar tu estrategia."
    },
    {
      icon: Search,
      title: "Investigación de palabras clave para ecommerce",
      description: "Detectamos términos con alta intención de compra y los integramos estratégicamente para captar tráfico cualificado."
    },
    {
      icon: FileText,
      title: "Creación de contenido optimizado",
      description: "Generamos automáticamente descripciones de productos, categorías y textos que posicionan y convierten."
    },
    {
      icon: Cpu,
      title: "Optimización técnica automatizada",
      description: "Mejoramos velocidad, estructura y accesibilidad de tu tienda online según los últimos estándares SEO."
    },
    {
      icon: UserCheck,
      title: "Personalización de la experiencia de compra",
      description: "Ajustamos el contenido en tiempo real según el comportamiento del usuario, mejorando la fidelización y el ticket medio."
    }
  ];

  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Servicios incluidos en nuestro SEO para Ecommerce con IA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-seo-blue/10 flex items-center justify-center mb-4">
                  <service.icon className="text-seo-bright" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
