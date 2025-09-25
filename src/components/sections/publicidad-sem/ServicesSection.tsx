
import { Settings2, Brain, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Nuestro servicio de Publicidad SEM con IA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Settings2 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Auditoría y análisis inicial</h3>
              <p className="text-gray-300">
                Evaluamos el estado actual de tus campañas y detectamos oportunidades 
                de mejora mediante herramientas avanzadas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Brain className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Estrategias personalizadas</h3>
              <p className="text-gray-300">
                Diseñamos e implementamos estrategias adaptadas a tu negocio, 
                utilizando IA para maximizar resultados.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Optimización continua</h3>
              <p className="text-gray-300">
                Supervisamos constantemente el desempeño, realizando ajustes 
                necesarios para asegurar resultados óptimos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
