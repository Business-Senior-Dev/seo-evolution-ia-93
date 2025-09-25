
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Hostelearte",
      location: "Europa",
      description: "Con más de 4.500 productos en catálogo y un sector altamente competitivo, Hostelearte confió en EvolucionaSEO para transformar su ecommerce desde los cimientos. Diseñamos una estrategia integral basada en inteligencia artificial: optimización masiva de fichas de producto, arquitectura web inteligente, automatización de contenidos, y análisis predictivo del comportamiento del cliente. En tan solo tres años, la tienda ha pasado de facturar 10.000€ anuales a superar el millón de euros, consolidándose como una de las webs más visibles del sector hostelero. Actualmente genera más de 25.000 visitas mensuales, con múltiples keywords posicionadas en el Top 3 de Google y una presencia sólida en todo el territorio nacional.",
      url: "https://hostelearte.com"
    },
    {
      title: "ITV Máquinas de Hielo",
      location: "España",
      description: "Este ecommerce especializado en máquinas de hielo partía de una versión obsoleta de PrestaShop con poca visibilidad online. En EvolucionaSEO renovamos por completo su plataforma, migrando a PrestaShop 8.1, optimizando velocidad, usabilidad y estructura técnica para SEO. Creamos fichas de producto personalizadas con descripciones redactadas a partir de un análisis profundo de palabras clave del sector, segmentando por intención de búsqueda y tipo de cliente. Como resultado, su catálogo se posiciona en las primeras posiciones de Google, atrayendo cada mes más de 10.000 visitas cualificadas y aumentando notablemente las consultas y ventas online.",
      url: "https://itvmaquinasdehielo.es"
    },
    {
      title: "Four Seasons Men",
      location: "Europa",
      description: "Creamos este ecommerce desde cero en Shopify, desarrollando una tienda de moda masculina con una identidad clara, una navegación fluida y un enfoque total en el rendimiento y la experiencia de usuario. Implementamos fichas de producto personalizadas con contenido optimizado para SEO y estructurado para destacar tanto en buscadores como en los ojos del cliente. La tienda obtuvo la mejor puntuación en Google PageSpeed, y cuenta con todos los sistemas de pago integrados para facilitar la conversión. Aunque es un proyecto nuevo, está diseñado para escalar rápidamente y competir desde el primer día en el sector textil online.",
      url: "https://fourseasonsmen.com"
    }
  ];

  return (
    <section className="py-16 bg-seo-darkBlue relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          Proyectos | SEO para Ecommerce con IA
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Casos reales que demuestran cómo una estrategia de SEO con IA puede transformar un ecommerce desde el primer clic.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <a 
              key={index} 
              href={case_.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="bg-seo-card border-seo-blue/20 h-full hover:border-seo-blue/50 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{case_.title}</CardTitle>
                    <ExternalLink className="w-4 h-4 text-seo-bright" />
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="inline-flex items-center">
                      <span className="mr-1">📍</span> Zona de ventas:
                    </span>
                    <span className="ml-1 text-seo-bright">{case_.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="border-t border-seo-blue/20 pt-4 mt-2">
                    <h4 className="font-medium text-gray-300 mb-2">🛠️ Descripción del trabajo SEO ecommerce realizado:</h4>
                    <p className="text-sm">{case_.description}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
