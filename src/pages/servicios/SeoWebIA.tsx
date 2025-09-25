
import React from 'react';
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSeoWebSection } from "@/components/sections/seo-web/HeroSeoWebSection";
import { ReportingSection } from "@/components/sections/seo-web/ReportingSection";
import { AuditSection } from "@/components/sections/seo-web/AuditSection";
import { BenefitsSection } from "@/components/sections/seo-web/BenefitsSection";
import { KeywordResearchSection } from "@/components/sections/seo-web/KeywordResearchSection";
import { OnPageSection } from "@/components/sections/seo-web/OnPageSection";
import { OffPageSection } from "@/components/sections/seo-web/OffPageSection";
import { CaseStudiesSection } from "@/components/sections/seo-web/CaseStudiesSection";

const SeoWebIA = () => {
  return (
    <>
      <Helmet>
        <title>SEO Web con IA | Posicionamiento Web Automatizado | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Optimiza tu web con estrategias SEO potenciadas por IA. Aumenta el tráfico orgánico y mejora tu posicionamiento en buscadores de forma inteligente."
        />
        <meta 
          name="keywords" 
          content="SEO web, posicionamiento web, SEO con IA, optimización web, tráfico orgánico, SEO automatizado"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/seo-web-ia" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroSeoWebSection />
          <ReportingSection />
          <AuditSection />
          <BenefitsSection />
          <KeywordResearchSection />
          <OnPageSection />
          <OffPageSection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SeoWebIA;
