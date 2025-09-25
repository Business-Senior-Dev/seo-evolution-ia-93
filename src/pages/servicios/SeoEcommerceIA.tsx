
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/seo-ecommerce/HeroSection";
import { ChallengesSection } from "@/components/sections/seo-ecommerce/ChallengesSection";
import { ServicesSection } from "@/components/sections/seo-ecommerce/ServicesSection";
import { RoiSection } from "@/components/sections/seo-ecommerce/RoiSection";
import { CaseStudiesSection } from "@/components/sections/seo-ecommerce/CaseStudiesSection";
import { ComparisonSection } from "@/components/sections/seo-ecommerce/ComparisonSection";
import { FaqSection } from "@/components/sections/seo-ecommerce/FaqSection";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const SeoEcommerceIA = () => {
  return (
    <>
      <Helmet>
        <title>SEO para Ecommerce con IA | Más Ventas Online | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Aumenta las ventas de tu tienda online con SEO especializado para ecommerce y tecnología IA. Optimización inteligente para productos, categorías y estrategias de conversión."
        />
        <meta 
          name="keywords" 
          content="SEO ecommerce, posicionamiento tienda online, SEO con IA, optimización ecommerce, ventas online, SEO para tiendas online"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/seo-ecommerce-ia" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow pt-24">
          <HeroSection />
          <ChallengesSection />
          <ServicesSection />
          <RoiSection />
          <CaseStudiesSection />
          <ComparisonSection />
          <FaqSection />
          
          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-r from-seo-blue/20 to-seo-cyan/20">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Tu competencia ya está optimizando su tienda online con IA
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                Cada día que pasa sin una estrategia SEO avanzada es un día en que tus competidores te quitan clientes potenciales. 
                No dejes que sigan ganando terreno y comenzemos hoy mismo a transformar tu tienda online.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
                  <Link to="/agenda-consultoria">Quiero multiplicar mis ventas</Link>
                </Button>
                <Button asChild variant="outline" className="border-seo-blue/40 text-white hover:bg-seo-blue/10">
                  <a href="https://wa.me/34910626684" target="_blank" rel="noopener noreferrer">
                    Hablar con un especialista
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default SeoEcommerceIA;
