import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { LinkBuildingSection } from "@/components/sections/LinkBuildingSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EvolucionaSEO | Agencia SEO con Inteligencia Artificial</title>
        <meta 
          name="description" 
          content="Optimizamos tu presencia digital con estrategias SEO potenciadas por IA. Servicio profesional de posicionamiento web en Madrid y toda España."
        />
        <meta 
          name="keywords" 
          content="agencia SEO, posicionamiento web, SEO con IA, marketing digital, SEO Madrid, consultoría SEO"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <ResultsSection />
          <LinkBuildingSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
