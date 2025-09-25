
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "¿Qué es la publicidad SEM con IA?",
      answer: "La publicidad SEM con IA combina estrategias de marketing en motores de búsqueda con inteligencia artificial para optimizar campañas publicitarias. Utiliza algoritmos avanzados para mejorar las pujas, segmentar audiencias con precisión, generar textos de anuncios más efectivos y predecir tendencias de comportamiento del consumidor."
    },
    {
      question: "¿Cómo mejora la IA el rendimiento de mis campañas SEM?",
      answer: "La IA mejora sus campañas SEM de múltiples formas: optimiza las pujas en tiempo real basándose en datos históricos y predictivos, identifica patrones de comportamiento para mejorar la segmentación, genera textos de anuncios más relevantes para cada audiencia, y ajusta estrategias automáticamente según los cambios del mercado, todo mientras reduce la intervención manual."
    },
    {
      question: "¿Es necesario tener conocimientos técnicos para implementar SEM con IA?",
      answer: "No es necesario tener conocimientos técnicos avanzados. Nuestro servicio de SEM con IA se encarga de toda la implementación técnica. Nos ocupamos de configurar las herramientas de IA, establecer los algoritmos y gestionar los aspectos técnicos, mientras usted se beneficia de los resultados y mantiene el control sobre sus objetivos estratégicos."
    },
    {
      question: "¿Cuánto tiempo se tarda en ver resultados con la publicidad SEM inteligente?",
      answer: "Generalmente, los primeros resultados positivos son visibles entre 2 y 4 semanas después de implementar las estrategias de SEM con IA. Sin embargo, la optimización continua y el aprendizaje progresivo de los algoritmos significan que los resultados mejoran significativamente a lo largo de 3-6 meses, cuando la IA ha recopilado suficientes datos para maximizar el rendimiento."
    },
    {
      question: "¿Qué plataformas de publicidad digital cubre su servicio SEM con IA?",
      answer: "Nuestro servicio cubre principalmente Google Ads y Microsoft Advertising (Bing Ads), las plataformas más importantes para publicidad en buscadores. También podemos integrar estrategias de IA en campañas de Display, YouTube, Shopping y otras redes publicitarias complementarias según las necesidades específicas de su negocio."
    },
  ];

  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Preguntas frecuentes sobre <span className="text-gradient">SEM</span> con IA
          </h2>
          <p className="text-gray-300">
            Resolvemos tus dudas sobre cómo la inteligencia artificial revoluciona la publicidad digital
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-seo-card rounded-lg border border-seo-blue/20 p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-seo-blue/10"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-seo-bright">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-2">
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
