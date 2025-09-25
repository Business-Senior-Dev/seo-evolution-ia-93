
import { LegalPage } from "@/components/layout/LegalPage";
import { Helmet } from "react-helmet";

export default function CookiesPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Política de cookies de EvolucionaSEO"
        />
      </Helmet>

      <LegalPage title="🍪 POLÍTICA DE COOKIES">
        <div className="space-y-6">
          <p>
            En esta web utilizamos cookies propias y de terceros para fines analíticos y para mejorar tu experiencia como usuario. Las cookies se gestionan a través de la plataforma CookieFirst, la cual permite al usuario aceptar o rechazar su uso conforme al RGPD.
          </p>
          
          <p>
            Puedes modificar tu consentimiento en cualquier momento desde el panel de configuración de cookies.
          </p>
        </div>
      </LegalPage>
    </>
  );
}
