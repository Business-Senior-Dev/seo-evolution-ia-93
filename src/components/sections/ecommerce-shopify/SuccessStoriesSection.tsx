
import { TrendingUp, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Casos de éxito en ecommerce con <span className="text-gradient">Shopify</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tiendas que triplicaron sus ventas</h3>
              <p className="text-gray-300">
                Nuestros clientes han logrado multiplicar sus ventas gracias a una 
                estrategia integral de diseño y optimización.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Rocket className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Marcas que despegaron desde cero</h3>
              <p className="text-gray-300">
                Hemos ayudado a nuevas marcas a establecerse y crecer rápidamente 
                en el mercado digital.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
