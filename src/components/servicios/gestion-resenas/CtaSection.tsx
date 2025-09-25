
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-seo-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Impulsa tu negocio con <span className="text-gradient">SEO e IA</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            ¿Listo para transformar tu reputación online y destacar frente a tu competencia? 
            Nuestro equipo de expertos está aquí para ayudarte.
          </p>
          
          <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
            <a href="#contacto">
              Solicita tu análisis gratuito
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
