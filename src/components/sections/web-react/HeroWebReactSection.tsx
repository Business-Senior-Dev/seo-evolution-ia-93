
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroWebReactSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">DESARROLLO WEB PROFESIONAL</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Páginas WEB <span className="text-gradient">más rápidas</span> del mercado con React + IA
          </h1>
          
          <p className="text-gray-300 text-lg mb-6">
            Desarrollamos páginas web con código propio React optimizado al máximo. 
            Combinamos velocidad ultrarrápida, diseño 100% personalizado, UX perfecto 
            y el mejor SEO del mercado, todo potenciado por inteligencia artificial.
          </p>

          <p className="text-gray-300 text-md mb-10">
            Nuestro enfoque único utiliza IA para optimizar cada línea de código, crear diseños 
            que convierten y asegurar el posicionamiento #1 en Google. No son templates, 
            es desarrollo web de nueva generación pensado para dominar tu mercado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">Solicitar presupuesto</a>
            </Button>

            <Button asChild variant="outline" className="border-seo-blue/40 text-white hover:bg-seo-blue/10">
              <a href="#tecnologias" className="flex items-center gap-2">
                Ver tecnologías <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
