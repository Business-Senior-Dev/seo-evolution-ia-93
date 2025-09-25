
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroWebReactSection } from "@/components/sections/web-react/HeroWebReactSection";
import { FeaturesSection } from "@/components/sections/web-react/FeaturesSection";
import { WhyReactSection } from "@/components/sections/web-react/WhyReactSection";
import { BenefitsSection } from "@/components/sections/web-react/BenefitsSection";
import { ProcessSection } from "@/components/sections/web-react/ProcessSection";
import { TechnologiesSection } from "@/components/sections/web-react/TechnologiesSection";
import { CaseStudiesSection } from "@/components/sections/web-react/CaseStudiesSection";
import { FaqSection } from "@/components/sections/web-react/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const CreacionWebReact = () => {
  return (
    <>
      <Helmet>
        <title>Desarrollo Web React | Páginas Web Más Rápidas del Mercado | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Creamos páginas web con React y IA: la mayor velocidad del mercado, diseño personalizado, UX perfecto y el mejor SEO. Código propio optimizado al máximo."
        />
        <meta 
          name="keywords" 
          content="desarrollo web React, páginas web rápidas, diseño web personalizado, SEO React, desarrollo web IA, páginas web optimizadas"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/creacion-web-react" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evolucionaseo.es/servicios/creacion-web-react" />
        <meta property="og:title" content="Páginas Web React Más Rápidas del Mercado | EvolucionaSEO" />
        <meta property="og:description" content="Desarrollo web con React y IA: máxima velocidad, diseño personalizado, UX perfecto y mejor SEO del mercado." />
        <meta property="og:image" content="https://evolucionaseo.es/og-image-react.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://evolucionaseo.es/servicios/creacion-web-react" />
        <meta property="twitter:title" content="Páginas Web React Más Rápidas del Mercado | EvolucionaSEO" />
        <meta property="twitter:description" content="Desarrollo web con React y IA: máxima velocidad, diseño personalizado, UX perfecto y mejor SEO del mercado." />
        <meta property="twitter:image" content="https://evolucionaseo.es/og-image-react.jpg" />

        {/* Estructurado de datos para Rich Snippets */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desarrollo Web React con IA",
            "provider": {
              "@type": "Organization",
              "name": "EvolucionaSEO",
              "url": "https://evolucionaseo.es"
            },
            "description": "Páginas web React más rápidas del mercado. Desarrollo con IA, diseño personalizado, UX perfecto y el mejor SEO.",
            "areaServed": "España",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de desarrollo web React",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Páginas web React ultrarrápidas",
                    "description": "Desarrollo de páginas web con la mayor velocidad del mercado"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webs corporativas con IA",
                    "description": "Páginas corporativas con diseño personalizado y UX perfecto"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Páginas web SEO optimizadas",
                    "description": "Desarrollo web con el mejor SEO del mercado usando IA"
                  }
                }
              ]
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroWebReactSection />
          <WhyReactSection />
          <FeaturesSection />
          <BenefitsSection />
          <ProcessSection />
          <TechnologiesSection />
          <CaseStudiesSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CreacionWebReact;
