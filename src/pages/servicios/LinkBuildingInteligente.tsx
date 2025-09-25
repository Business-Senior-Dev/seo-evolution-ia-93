
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LinkBuildingHeroSection } from "@/components/sections/link-building/LinkBuildingHeroSection";
import { LinkBuildingExplanationSection } from "@/components/sections/link-building/LinkBuildingExplanationSection";
import { LinkBuildingApproachSection } from "@/components/sections/link-building/LinkBuildingApproachSection";
import { LinkBuildingBenefitsSection } from "@/components/sections/link-building/LinkBuildingBenefitsSection";
import { LinkBuildingServicesSection } from "@/components/sections/link-building/LinkBuildingServicesSection";
import { LinkBuildingTargetSection } from "@/components/sections/link-building/LinkBuildingTargetSection";
import { LinkBuildingSuccessSection } from "@/components/sections/link-building/LinkBuildingSuccessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet";

const LinkBuildingInteligente = () => {
  return (
    <>
      <Helmet>
        <title>Link Building con IA | Enlaces de Calidad | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Construye una estrategia de enlaces inteligente con IA. Obtén backlinks de calidad que mejoran tu autoridad y posicionamiento web de forma natural."
        />
        <meta 
          name="keywords" 
          content="link building, construcción de enlaces, backlinks, SEO off page, autoridad web"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/link-building-inteligente" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <LinkBuildingHeroSection />
          <LinkBuildingExplanationSection />
          <LinkBuildingApproachSection />
          <LinkBuildingBenefitsSection />
          <LinkBuildingServicesSection />
          <LinkBuildingTargetSection />
          <LinkBuildingSuccessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LinkBuildingInteligente;
