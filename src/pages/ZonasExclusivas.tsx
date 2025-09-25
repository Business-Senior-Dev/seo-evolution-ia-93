
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { ZonasHeroSection } from "@/components/sections/zonas/ZonasHeroSection";
import { ZonaDisponibilidadForm } from "@/components/sections/zonas/ZonaDisponibilidadForm";
import { ExclusividadSection } from "@/components/sections/zonas/ExclusividadSection";
import { Helmet } from "react-helmet";

const ZonasExclusivas: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zonas Exclusivas | EvolucionaSEO - SEO con Exclusividad por Zona</title>
        <meta 
          name="description" 
          content="Consulta las zonas donde ya ofrecemos servicios exclusivos y reserva tu territorio antes que tu competencia. Garantizamos exclusividad por sector y ubicación."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evolucionaseo.es/zonas-exclusivas" />
      </Helmet>
      
      <Layout>
        <ZonasHeroSection />

        <section className="py-16 bg-seo-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ZonaDisponibilidadForm />
            </div>
          </div>
        </section>

        <ExclusividadSection />
      </Layout>
    </>
  );
};

export default ZonasExclusivas;
