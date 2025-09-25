
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Beneficios de elegir nuestro servicio de <span className="text-gradient">desarrollo web React con IA</span>
          </h2>
          <p className="text-gray-300 text-lg">
            En EvolucionaSEO no solo desarrollamos páginas web con React, creamos activos digitales 
            que dominan tu mercado con la mayor velocidad, mejor UX y posicionamiento SEO #1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="bg-seo-card border-seo-blue/20 hover-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Velocidad y rendimiento sin competencia</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Páginas que cargan en menos de 0.8 segundos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Core Web Vitals perfectos optimizados con IA</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Código ultraoptimizado que supera a la competencia</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Rendimiento medido y garantizado en todos los dispositivos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20 hover-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">El mejor SEO del mercado con IA</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Posicionamiento #1 garantizado con técnicas SEO + IA</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Estructura web optimizada que supera algoritmos de Google</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Contenido y metadatos optimizados con inteligencia artificial</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Metodología SEO exclusiva que domina cualquier mercado</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20 hover-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">UX perfecto que convierte con IA</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Diseño 100% personalizado optimizado para conversión</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Interfaces que guían naturalmente hacia objetivos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">A/B testing con IA para optimización continua</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Experiencias que superan expectativas y fidelizan</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20 hover-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Desarrollo con IA de nueva generación</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Código optimizado con inteligencia artificial</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Soporte técnico especializado en React + IA</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Evolución continua con nuevas técnicas de IA</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-seo-bright mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Formación sobre gestión de páginas web avanzadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
            <a href="#contacto">Solicitar una propuesta personalizada</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
