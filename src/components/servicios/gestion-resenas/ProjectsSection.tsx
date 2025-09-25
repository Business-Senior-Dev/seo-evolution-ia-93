
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
              <span className="text-xs font-medium text-seo-bright">PROYECTOS | GESTIÓN DE RESEÑAS CON IA</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Casos reales de gestión de reseñas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  🏆 La Tienda Berenguer | Gestión estratégica de reseñas
                </h3>
                <p className="text-gray-300 mb-4">
                  <strong>Antes:</strong> Esta ficha de Google Business Profile tenía una valoración media de 3,9 estrellas 
                  con pocas reseñas visibles, lo que afectaba negativamente a la percepción de nuevos clientes.
                </p>
                <p className="text-gray-300">
                  <strong>Después de nuestra estrategia:</strong> Tras implementar una campaña personalizada de reseñas reales, 
                  mensajes optimizados para WhatsApp y email, y un sistema de alertas para responder a cada reseña, 
                  la ficha pasó a tener más de 450 valoraciones con una nota media de 4,8 estrellas. Además de mejorar 
                  la reputación online, esto impulsó la visibilidad local en Google y duplicó el tráfico físico a sus 
                  cinco tiendas en Madrid.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  ✂️ Barber's Roldan | Liderazgo local a través de las reseñas
                </h3>
                <p className="text-gray-300 mb-4">
                  <strong>Antes:</strong> Barber's Roldan era un negocio emergente con presencia digital mínima 
                  y sin estrategia activa de reputación online.
                </p>
                <p className="text-gray-300">
                  <strong>Después de nuestra intervención:</strong> En solo un año, gracias a nuestra estrategia de 
                  gestión de reseñas personalizada, pasaron a ocupar el primer lugar en resultados locales para 
                  peluquerías de caballeros en Numancia de la Sagra. Implementamos un sistema de solicitud de 
                  reseñas tras cada cita, activamos la opción de reservas online desde el perfil y redactamos 
                  respuestas que potenciaban su imagen de marca. Hoy, cuentan con una comunidad sólida y fiel 
                  que no deja de crecer.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
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
