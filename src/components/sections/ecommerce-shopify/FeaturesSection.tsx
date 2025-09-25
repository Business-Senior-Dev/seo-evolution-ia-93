
import { ListFilter, Bot, MessageSquare } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      Icon: ListFilter,
      title: "Categorías, filtros y gestión de stock",
      description: "Organizamos tus productos de forma intuitiva con categorías y filtros avanzados para una mejor experiencia de compra."
    },
    {
      Icon: Bot,
      title: "Automatizaciones con IA para marketing",
      description: "Implementamos automatizaciones inteligentes para email marketing, recuperación de carritos y más."
    },
    {
      Icon: MessageSquare,
      title: "Blog, reseñas y venta cruzada",
      description: "Integramos funcionalidades adicionales para potenciar tus ventas y mejorar la experiencia del cliente."
    }
  ];

  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Funcionalidades que incluimos en tu tienda <span className="text-gradient">Shopify</span>
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
