
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Qué es el SEO local y por qué es importante para mi negocio?",
    answer: "El SEO local es el conjunto de técnicas para posicionar tu negocio en búsquedas geográficas relevantes. Es fundamental si tienes una empresa con presencia física o que sirve a clientes de una zona específica, permitiéndote aparecer ante potenciales clientes cuando buscan lo que ofreces cerca de ellos."
  },
  {
    question: "¿Qué es exactamente el SEO local con inteligencia artificial?",
    answer: "Es la optimización de tu presencia online para aparecer en búsquedas locales, combinando técnicas SEO tradicionales con herramientas de IA que automatizan, analizan y mejoran resultados en tiempo real."
  },
  {
    question: "¿Qué beneficios tiene usar IA en una estrategia de SEO local?",
    answer: "Ahorra tiempo, mejora la precisión en el análisis de competencia, identifica oportunidades de posicionamiento más rápido y permite decisiones basadas en datos concretos."
  },
  {
    question: "¿Puedo posicionar mi negocio solo con una ficha de Google Business Profile?",
    answer: "La ficha es fundamental, pero el SEO local efectivo incluye también optimizar tu web, generar reseñas, enlaces locales, contenido geolocalizado y más. Con IA, todo se hace de forma más eficiente."
  },
  {
    question: "¿Cómo mejora la IA mis resultados frente a una estrategia manual?",
    answer: "Detecta patrones y tendencias invisibles al ojo humano, realiza auditorías automáticas, optimiza horarios de publicación y ajusta constantemente las estrategias sin intervención humana constante."
  },
  {
    question: "¿Es este servicio solo para negocios físicos con tienda?",
    answer: "No. Cualquier negocio que quiera captar clientes en una zona geográfica concreta (como profesionales, clínicas, técnicos, autónomos) puede beneficiarse del SEO local con IA."
  },
  {
    question: "¿Qué herramientas de inteligencia artificial utilizáis?",
    answer: "Combinamos herramientas propias y externas que analizan mapas de calor, optimizan contenido, identifican palabras clave locales, y generan informes predictivos de posicionamiento."
  },
  {
    question: "¿Cuánto tiempo tarda en notarse el SEO local con IA?",
    answer: "Algunos resultados se notan en pocas semanas (como visibilidad en mapas), pero el impacto más sólido y duradero se alcanza en 3 a 6 meses, dependiendo del sector y competencia local."
  },
  {
    question: "¿Es posible automatizar las reseñas con IA también?",
    answer: "Sí, ofrecemos soluciones para incentivar, responder y analizar reseñas de forma automatizada, mejorando la reputación online y el posicionamiento local."
  },
  {
    question: "¿Qué diferencia a EvolucionaSEO de otras agencias?",
    answer: "Nuestro enfoque está centrado en resultados medibles, automatización inteligente, y una atención personalizada basada en análisis con IA. Menos conjeturas, más datos y acciones efectivas."
  }
];

export function LocalFAQ() {
  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
              <span className="text-xs font-medium text-seo-bright">CONSULTAS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="bg-seo-card rounded-xl overflow-hidden border border-seo-blue/10">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-seo-blue/20 px-5">
                <AccordionTrigger className="text-white py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-300 pb-4">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
