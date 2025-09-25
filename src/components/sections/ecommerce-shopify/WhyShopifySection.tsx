
import { ShoppingCart, Settings, CreditCard } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export const WhyShopifySection = () => {
  const features = [
    {
      Icon: ShoppingCart,
      title: "Plataforma robusta, rápida y escalable",
      description: "Shopify ofrece una infraestructura sólida y escalable para que tu tienda crezca sin límites y con máximo rendimiento."
    },
    {
      Icon: Settings,
      title: "Gestión sencilla de productos y pedidos",
      description: "Panel de control intuitivo para gestionar inventario, pedidos y envíos de forma eficiente y sin complicaciones."
    },
    {
      Icon: CreditCard,
      title: "Múltiples opciones de pago y envío",
      description: "Integración con las principales pasarelas de pago y servicios de envío para una experiencia de compra completa."
    }
  ];

  return (
    <section className="py-16 bg-seo-darkBlue" id="por-que-shopify">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ¿Por qué elegir <span className="text-gradient">Shopify</span> para tu ecommerce?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
