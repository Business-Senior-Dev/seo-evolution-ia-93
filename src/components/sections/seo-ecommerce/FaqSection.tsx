
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "¿Qué beneficios aporta la inteligencia artificial al SEO para ecommerce?",
      answer: "La IA permite personalizar a escala, analizar grandes volúmenes de datos sobre comportamiento de usuarios, automatizar optimizaciones técnicas, predecir tendencias de búsqueda y generar contenido optimizado para miles de productos. Esto resulta en mayor visibilidad, mejor experiencia de usuario y más conversiones."
    },
    {
      question: "¿Cuánto tiempo tarda en dar resultados el SEO para ecommerce con IA?",
      answer: "Los primeros resultados suelen verse entre 2-3 meses, con mejoras técnicas y cambios en posiciones. Los resultados significativos en tráfico y ventas suelen notarse a partir de los 4-6 meses, dependiendo de la competitividad del sector y el estado inicial de la tienda."
    },
    {
      question: "¿Qué diferencia hay entre el SEO tradicional y el SEO con IA para ecommerce?",
      answer: "El SEO tradicional se basa en procesos manuales y análisis más limitados, mientras que el SEO con IA permite automatización a escala, predicciones más precisas, personalización en tiempo real y adaptación continua a los cambios del algoritmo y comportamiento de los usuarios."
    },
    {
      question: "¿Es compatible este servicio con tiendas hechas en Shopify, WooCommerce o PrestaShop?",
      answer: "Sí, nuestro servicio es compatible con todas las plataformas de ecommerce principales. Tenemos experiencia optimizando tiendas en Shopify, WooCommerce, PrestaShop, Magento y otras plataformas personalizadas."
    },
    {
      question: "¿Pueden optimizarse automáticamente las fichas de productos?",
      answer: "Sí, utilizamos IA para optimizar automáticamente títulos, descripciones, metadatos y atributos de productos, adaptándolos a las búsquedas más relevantes. Esto permite escalar la optimización a miles de productos sin perder calidad."
    },
    {
      question: "¿La IA ayuda a captar clientes nuevos o solo mejora el tráfico?",
      answer: "La IA no solo mejora el tráfico, sino que optimiza la calidad de las visitas, atrayendo usuarios con mayor intención de compra y personalizando la experiencia para aumentar las conversiones, lo que se traduce en más clientes nuevos y recurrentes."
    },
    {
      question: "¿Qué tipo de productos se benefician más del SEO con IA?",
      answer: "Todos los tipos de productos pueden beneficiarse, pero los catálogos extensos, productos técnicos o especializados, artículos de temporada y aquellos con alta competencia obtienen ventajas especialmente notables con el SEO basado en IA."
    },
    {
      question: "¿Cómo sabré si el SEO está funcionando?",
      answer: "Proporcionamos informes mensuales detallados con métricas clave como posiciones en buscadores, tráfico orgánico, visibilidad por categorías, tasas de conversión y ROI. También tendrás acceso a un dashboard en tiempo real para seguir el progreso."
    }
  ];

  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Preguntas Frecuentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-seo-card rounded-lg p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-seo-blue/10">
                <AccordionTrigger className="text-white hover:text-seo-bright">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
