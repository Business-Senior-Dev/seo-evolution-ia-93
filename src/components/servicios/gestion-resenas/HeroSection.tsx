
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">GESTIÓN DE RESEÑAS CON IA</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Gestión de reseñas para mejorar tu <span className="text-gradient">reputación y visibilidad</span> en Google
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Estrategias éticas y efectivas para construir una reputación sólida y aumentar tu posicionamiento local
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">Consulta gratuita</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-seo-blue/30 text-seo-bright hover:bg-seo-blue/10">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
