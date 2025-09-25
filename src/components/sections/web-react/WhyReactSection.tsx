
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code, Globe, Star, Search, Link } from "lucide-react";

export const WhyReactSection = () => {
  return (
    <section className="py-16 bg-seo-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ¿Por qué elegir <span className="text-gradient">React con IA</span> para tu página web?
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            React combinado con inteligencia artificial es la fórmula perfecta para crear 
            páginas web que superan a la competencia en velocidad, diseño y posicionamiento SEO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">La mayor velocidad del mercado</h3>
              <p className="text-gray-300">
                Nuestro código React optimizado con IA logra tiempos de carga sub-segundo. 
                Utilizamos técnicas avanzadas que hacen que tu web sea la más rápida de tu sector.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Code className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diseño 100% personalizado</h3>
              <p className="text-gray-300">
                Cada página web es única, diseñada desde cero según tu marca y objetivos. 
                La IA nos ayuda a crear interfaces que convierten mejor y destacan sobre la competencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Globe className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tecnología de vanguardia</h3>
              <p className="text-gray-300">
                Utilizamos las últimas tecnologías React y herramientas de IA para crear 
                páginas web que están años por delante de la competencia en funcionalidad y rendimiento.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Star className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">UX perfecto optimizado por IA</h3>
              <p className="text-gray-300">
                La inteligencia artificial analiza el comportamiento de usuarios para crear 
                experiencias perfectas que guían naturalmente hacia la conversión y fidelización.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Search className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">El mejor SEO del mercado</h3>
              <p className="text-gray-300">
                Nuestra metodología SEO potenciada por IA garantiza posicionamiento #1 en Google. 
                Cada página está optimizada al máximo para dominar los resultados de búsqueda.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Link className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Desarrollo con IA integrada</h3>
              <p className="text-gray-300">
                Utilizamos herramientas de inteligencia artificial en cada fase del desarrollo 
                para optimizar código, mejorar rendimiento y crear páginas web superiores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
