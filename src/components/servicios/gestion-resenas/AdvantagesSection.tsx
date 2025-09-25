
import { BarChart, Shield, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24 bg-seo-darkBlue relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            Ventajas de una <span className="text-gradient">estrategia profesional de reseñas</span>
          </h2>
          
          <p className="text-center text-gray-300 mb-12">
            Gestionar tus reseñas con estrategia profesional impulsa tu visibilidad, confianza y resultados reales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-seo-card rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Mejora tu posicionamiento local (SEO)</h3>
              <p className="text-gray-300">Las reseñas positivas y bien gestionadas incrementan tu relevancia en Google, haciendo que más clientes potenciales te encuentren fácilmente.</p>
            </div>
            
            <div className="p-6 bg-seo-card rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Aumenta la confianza de nuevos clientes</h3>
              <p className="text-gray-300">Las opiniones reales y las respuestas profesionales generan confianza inmediata en usuarios que aún no conocen tu negocio.</p>
            </div>
            
            <div className="p-6 bg-seo-card rounded-lg text-center hover-scale hover-glow transition-all">
              <div className="w-16 h-16 mx-auto bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <Star className="text-seo-bright w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Diferénciate de la competencia sin trampas</h3>
              <p className="text-gray-300">Destaca por autenticidad y transparencia, utilizando estrategias éticas que fortalecen tu reputación frente a competidores.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Convierte tu perfil en una herramienta fiable de visibilidad y resultados. Escríbenos hoy y lleva el reconocimiento de tu marca al siguiente nivel con inteligencia artificial.
            </p>
            <p className="text-gray-300 mb-8 italic">
              Nuestra metodología de gestión de reseñas combina estrategia humana y tecnología avanzada para construir una reputación auténtica, visible y que convierte.
            </p>
            <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">
                🌟 Mejora tu reputación con reseñas reales
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
