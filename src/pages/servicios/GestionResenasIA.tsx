
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import {
  HeroSection,
  WhyReviewsSection,
  ServicesSection,
  AdvantagesSection,
  ProjectsSection,
  MethodologySection,
  FaqSection,
  CtaSection
} from "@/components/servicios/gestion-resenas";

const GestionResenasIA = () => {
  return (
    <>
      <Helmet>
        <title>Gestión de Reseñas con IA | Reputación Online | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Mejora tu reputación online con gestión profesional de reseñas. Aumenta valoraciones positivas y visibilidad en Google con estrategias basadas en IA."
        />
        <meta 
          name="keywords" 
          content="gestión de reseñas, reseñas Google, reputación online, valoraciones positivas, SEO local"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/servicios/gestion-resenas-ia" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow pt-24">
          <HeroSection />
          <WhyReviewsSection />
          <ServicesSection />
          <AdvantagesSection />
          <ProjectsSection />
          <MethodologySection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GestionResenasIA;
