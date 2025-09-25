
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet";
import { 
  HeroSemSection,
  WhyAiSection,
  BenefitsSection,
  ServicesSection,
  SuccessCasesSection,
  MethodologySection,
  TechnologiesSection,
  FaqSection
} from "@/components/sections/publicidad-sem";
import { CtaSection } from "@/components/servicios/gestion-resenas";

const PublicidadSemIA = () => {
  return (
    <>
      <Helmet>
        <title>SEM con IA | Publicidad Google Ads Inteligente | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Maximiza el ROI de tus campañas SEM con IA. Gestión profesional de Google Ads y Microsoft Ads para conseguir más conversiones a menor coste."
        />
        <meta 
          name="keywords" 
          content="SEM, Google Ads, publicidad online, PPC, anuncios Google, publicidad IA, inteligencia artificial, machine learning, marketing digital"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/publicidad-sem-ia" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroSemSection />
          <WhyAiSection />
          <BenefitsSection />
          <TechnologiesSection />
          <ServicesSection />
          <MethodologySection />
          <SuccessCasesSection />
          <FaqSection />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PublicidadSemIA;
