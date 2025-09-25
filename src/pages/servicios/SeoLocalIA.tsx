
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroLocal } from "@/components/sections/seo-local/HeroLocal";
import { ServiceCards } from "@/components/sections/seo-local/ServiceCards";
import { BenefitsSection } from "@/components/sections/seo-local/BenefitsSection";
import { CaseStudiesSection } from "@/components/sections/seo-local/CaseStudiesSection";
import { ComparisonSection } from "@/components/sections/seo-local/ComparisonSection";
import { MethodologySection } from "@/components/sections/seo-local/MethodologySection";
import { LocalFAQ } from "@/components/sections/seo-local/LocalFAQ";
import { CtaButton } from "@/components/sections/seo-local/CtaButton";

const SeoLocalIA = () => {
  return (
    <>
      <Helmet>
        <title>SEO Local con IA | Posicionamiento Local Inteligente | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Mejora la visibilidad de tu negocio local con estrategias SEO impulsadas por IA. Atrae más clientes y aumenta ventas en tu zona de influencia."
        />
        <meta 
          name="keywords" 
          content="SEO local, posicionamiento local, Google My Business, SEO con IA, visibilidad local, marketing local"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/seo-local-ia" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow pt-24">
          <HeroLocal />
          <ServiceCards />
          <BenefitsSection />
          <CaseStudiesSection />
          <ComparisonSection />
          <MethodologySection />
          <LocalFAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SeoLocalIA;
