
import { FileSpreadsheet, Code2, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServiceDetailsSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ¿Qué incluye nuestro servicio de <span className="text-gradient">Shopify</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <FileSpreadsheet className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Consultoría inicial y planificación</h3>
              <p className="text-gray-300">
                Analizamos tu negocio para elegir el plan adecuado y diseñar la 
                mejor estrategia para tu tienda.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Code2 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diseño y desarrollo completo</h3>
              <p className="text-gray-300">
                Nos encargamos de todo el proceso: diseño, desarrollo, configuración 
                y lanzamiento de tu tienda.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <HeadphonesIcon className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Soporte post-venta</h3>
              <p className="text-gray-300">
                Te acompañamos después del lanzamiento con soporte técnico y 
                mantenimiento continuo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
