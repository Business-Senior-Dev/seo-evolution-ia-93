
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Bike, Cpu } from "lucide-react";

export const CaseStudiesSection = () => {
  return (
    <section id="casos-exito" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Casos de éxito con <span className="text-gradient">React</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Descubre algunos ejemplos de proyectos web desarrollados con React que han 
            conseguido resultados excepcionales en términos de rendimiento, experiencia 
            de usuario y posicionamiento SEO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Bike className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">ComprarAirbagMoto.es</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Plataforma de afiliados de Amazon especializada en la venta de airbags 
                para motos. Desarrollo completo con React, optimizada para SEO y con 
                integración de API de Amazon.
              </p>
              
              <div className="bg-seo-blue/10 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Resultados obtenidos:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+185% en tráfico orgánico en 6 meses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tiempo de carga reducido a 1.2s</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+42% en tasa de conversión</span>
                  </li>
                </ul>
              </div>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Integración con API de Amazon</li>
                <li>• Sistema de filtrado avanzado</li>
                <li>• Optimización SEO</li>
                <li>• Diseño responsivo</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <a href="http://comprarairbagmoto.es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <ShoppingBag className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">CompraTuRopaPorKilos.com</h3>
              </div>
              <p className="text-gray-300 mb-6">
                E-commerce especializado en venta de ropa al por mayor. Desarrollo con 
                React y integración de pasarela de pagos, gestión de pedidos y stock.
              </p>
              
              <div className="bg-seo-blue/10 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Resultados obtenidos:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+250% en ventas mensuales tras el lanzamiento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>-65% en tasa de rebote en móviles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+38% en valor medio de pedido</span>
                  </li>
                </ul>
              </div>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Carrito de compra avanzado</li>
                <li>• Sistema de gestión de stock</li>
                <li>• Pasarela de pagos segura</li>
                <li>• Panel de administración</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <a href="https://compraturopaporkilos.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Cpu className="w-8 h-8 text-seo-bright" />
                <h3 className="text-xl font-semibold">ICSERVICE</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Transformación digital completa para una empresa con más de 20 años de experiencia en 
                instalaciones eléctricas, telecomunicaciones, placas solares y fibra óptica.
              </p>
              
              <div className="bg-seo-blue/10 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-white mb-2">Resultados obtenidos:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+280% en visitas orgánicas en 3 meses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Top 1 en Google para servicios técnicos locales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-seo-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>+60% en solicitudes de presupuesto online</span>
                  </li>
                </ul>
              </div>
              
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Web desarrollada con React + IA</li>
                <li>• Contenido SEO de alto nivel técnico</li>
                <li>• Encabezados optimizados para búsquedas locales</li>
                <li>• Panel interno para gestión y futuras integraciones</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <a href="https://icservice.es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
