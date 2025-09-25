
import { Zap, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Beneficios de la Publicidad <span className="text-gradient">SEM</span> con IA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mejora del rendimiento</h3>
              <p className="text-gray-300">
                Automatización y optimización de campañas para lograr un aumento significativo 
                en el rendimiento y la eficiencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <DollarSign className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reducción de costes</h3>
              <p className="text-gray-300">
                Minimiza errores humanos y reduce costes operativos gestionando campañas 
                de forma más eficiente con IA.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <BarChart3 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Adaptación en tiempo real</h3>
              <p className="text-gray-300">
                Ajusta estrategias de manera dinámica, respondiendo rápidamente a cambios 
                en el comportamiento del consumidor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
