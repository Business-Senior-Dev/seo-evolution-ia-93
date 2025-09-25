
import { Link2, Gauge, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const OptimizationSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Optimización SEO y rendimiento para <span className="text-gradient">ecommerce</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Link2 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">URLs limpias y estructuradas</h3>
              <p className="text-gray-300">
                Implementamos una estructura de URLs optimizada para SEO y fácil de 
                entender por usuarios y buscadores.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Gauge className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Velocidad de carga optimizada</h3>
              <p className="text-gray-300">
                Optimizamos todos los aspectos técnicos para garantizar una 
                experiencia rápida y fluida.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <BarChart3 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Integración con Analytics y más</h3>
              <p className="text-gray-300">
                Configuramos las herramientas necesarias para medir y mejorar el 
                rendimiento de tu tienda.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
