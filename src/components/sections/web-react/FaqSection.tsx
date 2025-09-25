
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FaqSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Preguntas frecuentes sobre <span className="text-gradient">desarrollo web React con IA</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo web React potenciado por IA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-seo-blue/20">
                <AccordionTrigger className="text-white font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
            ¿No encuentras respuesta a tu pregunta? Contacta con nuestro equipo y te ayudaremos
            a resolver todas tus dudas sobre desarrollo web React con IA.
            </p>
            <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto" className="flex items-center gap-2">
                Contactar ahora <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "¿Por qué React con IA es mejor que otros frameworks para páginas web?",
    answer: "React combinado con IA ofrece ventajas únicas: nuestro código React está optimizado por inteligencia artificial para lograr la mayor velocidad del mercado, creamos diseños 100% personalizados que convierten mejor, e implementamos el SEO más avanzado del mercado. Mientras otros usan templates, nosotros desarrollamos cada página web desde cero con tecnología de vanguardia que supera a la competencia en todos los aspectos."
  },
  {
    question: "¿Cuánto tiempo se tarda en desarrollar una página web React con IA?",
    answer: "Gracias a nuestras herramientas de IA, podemos desarrollar páginas web React más rápido sin comprometer calidad. Una landing page optimizada está lista en 2-3 semanas, una web corporativa completa en 3-5 semanas, y páginas web complejas en 6-12 semanas. La IA nos permite acelerar el desarrollo mientras garantizamos la máxima velocidad, mejor UX y posicionamiento SEO #1 desde el primer día."
  },
  {
    question: "¿Las páginas web React con IA realmente tienen el mejor SEO del mercado?",
    answer: "Sí, nuestras páginas web React con IA dominan consistentemente en Google. Utilizamos Next.js con técnicas SEO avanzadas, estructura optimizada por IA, contenido semántico perfecto, y Core Web Vitals ultraoptimizados. Nuestra metodología SEO exclusiva, potenciada por inteligencia artificial, analiza tu mercado y competencia para crear páginas web que no solo posicionan #1, sino que mantienen esa posición a largo plazo."
  },
  {
    question: "¿Qué hace que sus páginas web React sean las más rápidas del mercado?",
    answer: "Nuestro código React está optimizado con IA para eliminar cualquier elemento que ralentice la carga. Utilizamos técnicas avanzadas como code splitting inteligente, lazy loading optimizado, compresión de imágenes con IA, y CDN ultrarrápido. Cada línea de código está analizada por inteligencia artificial para garantizar tiempos de carga sub-segundo. No son promesas: son resultados medibles y garantizados."
  },
  {
    question: "¿Cómo garantizan un UX perfecto en las páginas web React?",
    answer: "Utilizamos IA para analizar el comportamiento de usuarios en tu sector y crear interfaces que guían naturalmente hacia la conversión. Cada elemento está posicionado estratégicamente, los colores y tipografías están optimizados psicológicamente, y las interacciones están diseñadas para maximizar engagement. El resultado son páginas web que no solo se ven perfectas, sino que convierten significativamente mejor que la competencia."
  },
  {
    question: "¿Qué tipo de páginas web son ideales para desarrollar con React + IA?",
    answer: "Cualquier página web se beneficia de nuestro enfoque React + IA: landing pages ultrarrápidas que convierten al máximo, webs corporativas que dominan su mercado, portafolios profesionales que destacan sobre la competencia, páginas de servicios optimizadas para SEO local, y tiendas online que superan en velocidad y conversión. Si necesitas la página web más rápida, con mejor diseño y posicionamiento #1, React + IA es la solución."
  },
  {
    question: "¿Incluyen soporte y evolución continua con IA?",
    answer: "Sí, nuestras páginas web React evolucionan constantemente con IA. Incluimos monitorización inteligente de rendimiento, optimizaciones automáticas basadas en datos reales, actualizaciones de SEO con nuevos algoritmos, mejoras de UX basadas en comportamiento de usuarios, y soporte técnico especializado. Tu página web no solo se mantiene actualizada, sino que mejora continuamente para mantenerse siempre por delante de la competencia."
  },
  {
    question: "¿Cómo se integran las páginas web React con IA con herramientas de marketing?",
    answer: "Nuestras páginas web React están diseñadas para integrarse perfectamente con todo tu ecosistema de marketing digital. Configuramos tracking avanzado con Google Analytics 4, pixels de Facebook optimizados, integración con CRMs como HubSpot, conexión con herramientas de email marketing, chatbots con IA, y sistemas de automatización. Todo está optimizado para maximizar conversiones y ROI desde el primer día."
  }
];
