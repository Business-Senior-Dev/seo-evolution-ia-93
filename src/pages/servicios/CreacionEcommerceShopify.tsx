import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { HeroShopifySection } from "@/components/sections/ecommerce-shopify/HeroShopifySection";
import { WhyShopifySection } from "@/components/sections/ecommerce-shopify/WhyShopifySection";
import { DevelopmentSection } from "@/components/sections/ecommerce-shopify/DevelopmentSection";
import { FeaturesSection } from "@/components/sections/ecommerce-shopify/FeaturesSection";
import { OptimizationSection } from "@/components/sections/ecommerce-shopify/OptimizationSection";
import { StoreTypesSection } from "@/components/sections/ecommerce-shopify/StoreTypesSection";
import { ServiceDetailsSection } from "@/components/sections/ecommerce-shopify/ServiceDetailsSection";
import { SuccessStoriesSection } from "@/components/sections/ecommerce-shopify/SuccessStoriesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const CreacionEcommerceShopify = () => {
  return (
    <>
      <Helmet>
        <title>Creación de Tiendas Online Shopify | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Desarrollo profesional de tiendas online con Shopify. Optimización SEO, diseño personalizado y estrategias de conversión para tu ecommerce."
        />
        <meta 
          name="keywords" 
          content="Shopify, crear tienda online, ecommerce, desarrollo web, tienda virtual, comercio electrónico"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/creacion-ecommerce-shopify" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroShopifySection />
          <WhyShopifySection />
          <DevelopmentSection />
          <FeaturesSection />
          <OptimizationSection />
          <StoreTypesSection />
          <ServiceDetailsSection />
          <SuccessStoriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CreacionEcommerceShopify;
