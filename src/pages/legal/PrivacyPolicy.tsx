
import { LegalPage } from "@/components/layout/LegalPage";
import { Helmet } from "react-helmet";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Política de privacidad de EvolucionaSEO"
        />
      </Helmet>

      <LegalPage title={
        <div className="flex items-center justify-center gap-2">
          <Shield className="text-seo-bright" size={24} />
          <span>POLÍTICA DE PRIVACIDAD</span>
        </div>
      }>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsable del tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responsable: SEOEVOLUTION SL</li>
              <li>CIF: B75804120</li>
              <li>Domicilio: Paseo Húsares 14, 3ºC, 28024 Madrid</li>
              <li>Email: agencia@evolucionaseo.es</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Finalidad del tratamiento</h2>
            <p>
              En SEOEVOLUTION SL tratamos la información que nos facilitan las personas interesadas con el fin de prestar los servicios contratados, gestionar solicitudes, envío de comunicaciones comerciales (siempre bajo consentimiento) y mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento del interesado, la ejecución de un contrato o el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Destinatarios</h2>
            <p>
              Los datos no se cederán a terceros, salvo obligación legal. Para el envío de newsletters, utilizamos la plataforma Mailrelay, con la que se han firmado los correspondientes contratos de tratamiento de datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Derechos</h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a agencia@evolucionaseo.es con el asunto "Protección de Datos". También puede presentar una reclamación ante la Agencia Española de Protección de Datos.
            </p>
          </section>
        </div>
      </LegalPage>
    </>
  );
}
