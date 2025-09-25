
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Link as LinkIcon, TrendingUp, MonitorSmartphone, ShoppingCart, Code, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MasServicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios SEO y Marketing Digital | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Explora nuestra gama completa de servicios SEO y marketing digital. Desde posicionamiento web hasta desarrollo de tiendas online con IA."
        />
        <meta 
          name="keywords" 
          content="servicios SEO, marketing digital, posicionamiento web, desarrollo web, ecommerce, WordPress, React"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/mas-servicios" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow pt-24">
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
                  <span className="text-xs font-medium text-seo-bright">CATÁLOGO COMPLETO</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Más <span className="text-gradient">Servicios</span>
                </h1>
                
                <p className="text-gray-300 text-lg mb-10">
                  Descubre servicios adicionales diseñados para potenciar tu presencia online con tecnología avanzada e inteligencia artificial.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-seo-darkBlue">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <MessageSquare className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Gestión de reseñas con IA</h2>
                        <p className="text-gray-300 mb-6">
                          Mejora tu reputación online y visibilidad en Google con una estrategia profesional de gestión de reseñas. 
                          Aumenta la confianza de nuevos clientes, destaca frente a la competencia y mejora tu posicionamiento local.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/gestion-resenas-ia">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <LinkIcon className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Link Building Inteligente</h2>
                        <p className="text-gray-300 mb-6">
                          Estrategia avanzada para construir enlaces de calidad que potencien la autoridad de tu dominio. 
                          Aumenta tu relevancia ante Google y mejora tu posicionamiento con enlaces naturales y efectivos.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/link-building-inteligente">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <TrendingUp className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Publicidad SEM con IA</h2>
                        <p className="text-gray-300 mb-6">
                          Campañas de Google Ads optimizadas con inteligencia artificial. Maximiza tu ROI, reduce el coste por 
                          adquisición y capta clientes cualificados con estrategias de pago por clic avanzadas.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/publicidad-sem-ia">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <MonitorSmartphone className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Creación WEB con WordPress</h2>
                        <p className="text-gray-300 mb-6">
                          Sitios web profesionales diseñados y optimizados en WordPress. Desde la conceptualización hasta la 
                          implementación, creamos webs a medida con enfoque en usabilidad, conversión y SEO.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/creacion-web-wordpress">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <ShoppingCart className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Creación Ecommerce con Shopify</h2>
                        <p className="text-gray-300 mb-6">
                          Tiendas online completas en Shopify. Desarrollamos tu ecommerce con todas las funcionalidades necesarias 
                          para vender, integración de pagos, logística y estrategia de marketing digital.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/creacion-ecommerce-shopify">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-seo-card border-seo-blue/20 overflow-hidden hover-scale hover-glow transition-all h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="p-6 flex-grow">
                        <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                          <Code className="text-seo-bright w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Creación WEB con React</h2>
                        <p className="text-gray-300 mb-6">
                          Aplicaciones web modernas y dinámicas desarrolladas con React. Soluciones personalizadas de alto 
                          rendimiento para proyectos que requieren interactividad y experiencias de usuario avanzadas.
                        </p>
                      </div>
                      <div className="p-6 border-t border-seo-blue/20 mt-auto">
                        <Button asChild className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                          <Link to="/servicios/creacion-web-react">
                            Ver servicio
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  ¿Necesitas un servicio <span className="text-gradient">personalizado</span>?
                </h2>
                <p className="text-gray-300 mb-8">
                  Nuestro equipo está preparado para crear soluciones a medida que se adapten 
                  a las necesidades específicas de tu negocio.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                  <a href="#contacto">Habla con un especialista</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MasServicios;
