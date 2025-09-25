
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { LocalSEOAuditor } from "@/components/sections/auditoria-local/LocalSEOAuditor";

export default function AuditoriaLocalSEO() {
  return (
    <Layout>
      <Helmet>
        <title>Auditoría SEO Local con IA | Análisis de Google My Business | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Analiza tu ficha de negocio local en Google usando inteligencia artificial. Obtén una puntuación real y consejos para mejorar tu posicionamiento local."
        />
        <meta 
          name="keywords" 
          content="auditoría SEO local, Google My Business, análisis GMB, posicionamiento local, SEO local"
        />
      </Helmet>
      
      <LocalSEOAuditor />
    </Layout>
  );
}
