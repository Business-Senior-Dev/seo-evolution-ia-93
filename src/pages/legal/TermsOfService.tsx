
import { LegalPage } from "@/components/layout/LegalPage";
import { Helmet } from "react-helmet";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Términos del Servicio | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Términos del servicio y aviso legal de EvolucionaSEO"
        />
      </Helmet>

      <LegalPage title="TÉRMINOS DEL SERVICIO Y AVISO LEGAL">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Titularidad del sitio web</h2>
            <p className="mb-4">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico, se reflejan a continuación los siguientes datos:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Titular: SEOEVOLUTION SL</li>
              <li>CIF: B75804120</li>
              <li>Domicilio social: Paseo Húsares 14, 3ºC, 28024 Madrid</li>
              <li>Correo electrónico de contacto: agencia@evolucionaseo.es</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Objeto</h2>
            <p>
              La web evolucionaseo.es tiene por objeto ofrecer información y servicios de marketing digital, posicionamiento SEO y optimización de presencia online mediante el uso de inteligencia artificial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos, imágenes, gráficos o código fuente, están protegidos por derechos de propiedad intelectual e industrial. El usuario únicamente podrá hacer un uso privado y personal de los mismos. Queda prohibido su uso con fines comerciales o ilícitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsabilidad</h2>
            <p>
              El titular no se hace responsable del mal uso que se realice de los contenidos de su página web ni de los daños o perjuicios derivados de su uso.
            </p>
          </section>
        </div>
      </LegalPage>
    </>
  );
}
