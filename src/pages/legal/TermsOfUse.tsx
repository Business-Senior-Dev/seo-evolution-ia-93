
import { LegalPage } from "@/components/layout/LegalPage";
import { Helmet } from "react-helmet";
import { FileText } from "lucide-react";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Condiciones Generales de Uso | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Condiciones generales de uso de EvolucionaSEO"
        />
      </Helmet>

      <LegalPage title={
        <div className="flex items-center justify-center gap-2">
          <FileText className="text-seo-bright" size={24} />
          <span>CONDICIONES GENERALES DE USO</span>
        </div>
      }>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Objeto</h2>
            <p>
              Estas condiciones regulan el uso del sitio web www.evolucionaseo.es, titularidad de SEOEVOLUTION SL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Servicios ofrecidos</h2>
            <p>
              La agencia ofrece servicios profesionales de posicionamiento SEO, análisis web, campañas publicitarias, auditorías SEO y mantenimiento técnico, entre otros. Cualquier contratación se regirá por un contrato específico y personalizado con el cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Obligaciones del usuario</h2>
            <p>
              El usuario se compromete a hacer un uso adecuado del sitio web, a no utilizarlo con fines ilícitos o contrarios a la buena fe, y a no causar daños en los sistemas físicos o lógicos del titular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Política de contratación</h2>
            <p>
              La contratación de servicios implica la aceptación de las condiciones particulares acordadas entre ambas partes por vía escrita o electrónica. El pago de los servicios podrá realizarse mediante transferencia bancaria, Stripe u otros métodos acordados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Modificaciones</h2>
            <p>
              SEOEVOLUTION SL se reserva el derecho de modificar cualquier aspecto de la web sin previo aviso.
            </p>
          </section>
        </div>
      </LegalPage>
    </>
  );
}
