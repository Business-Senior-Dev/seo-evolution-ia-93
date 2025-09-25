
import { Store, User, Boxes } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const StoreTypesSection = () => {
  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Tipos de ecommerce que <span className="text-gradient">desarrollamos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Store className="w-12 h-12 text-seo-bright mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-4">Tiendas D2C (directo al consumidor)</h3>
              <p className="text-gray-300">
                Plataformas de venta directa para marcas que quieren controlar toda 
                la experiencia del cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <User className="w-12 h-12 text-seo-bright mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-4">Negocios de nicho o marcas personales</h3>
              <p className="text-gray-300">
                Tiendas especializadas con diseño y funcionalidades adaptadas a 
                mercados específicos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Boxes className="w-12 h-12 text-seo-bright mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-4">Proyectos de dropshipping</h3>
              <p className="text-gray-300">
                Soluciones automatizadas para modelos de negocio basados en 
                dropshipping y proveedores externos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
