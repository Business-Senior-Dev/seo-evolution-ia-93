
import { Palette, Smartphone, Brush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const DevelopmentSection = () => {
  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Desarrollo de tiendas online adaptadas a tu <span className="text-gradient">negocio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Palette className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diseño personalizado y optimizado para conversión</h3>
              <p className="text-gray-300">
                Diseñamos tu tienda pensando en la experiencia del usuario y en 
                maximizar las conversiones desde el primer día.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Smartphone className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">100% responsive y preparado para móviles</h3>
              <p className="text-gray-300">
                Tu tienda funcionará perfectamente en cualquier dispositivo, 
                ofreciendo una experiencia de compra óptima.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Brush className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Adaptación a tu identidad de marca</h3>
              <p className="text-gray-300">
                Personalizamos cada detalle para que tu tienda refleje la 
                identidad y valores de tu marca.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
