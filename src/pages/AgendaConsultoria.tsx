
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { HeroAgendaSection } from "@/components/sections/agenda/HeroAgendaSection";
import { ContactForm } from "@/components/sections/agenda/ContactForm";
import { CalendlyWidget } from "@/components/sections/agenda/CalendlyWidget";
import { ContactInfo } from "@/components/sections/agenda/ContactInfo";
import { BenefitsSection } from "@/components/sections/agenda/BenefitsSection";

const AgendaConsultoria = () => {
  return (
    <>
      <Helmet>
        <title>Agenda una Consultoría SEO Gratuita | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Solicita una consultoría SEO gratuita con nuestros expertos. Analizamos tu web y diseñamos una estrategia personalizada para mejorar tu visibilidad."
        />
        <meta 
          name="keywords" 
          content="consultoría SEO, análisis web gratuito, auditoría SEO, estrategia digital, posicionamiento web"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/agenda-consultoria" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-seo-dark text-white">
        <Navbar />
        <main className="flex-grow pt-24">
          <HeroAgendaSection />
          
          <section className="py-16 bg-seo-darkBlue">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactForm />
                <CalendlyWidget />
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <BenefitsSection />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AgendaConsultoria;
