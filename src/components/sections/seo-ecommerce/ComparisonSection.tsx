
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Análisis del comportamiento de compra",
      ia: "✅ En tiempo real con IA",
      traditional: "❌ Limitado y generalizado"
    },
    {
      feature: "Creación de contenido para productos",
      ia: "✅ Automatizada y optimizada",
      traditional: "❌ Manual y poco escalable"
    },
    {
      feature: "Detección de productos con mayor demanda",
      ia: "✅ Predictiva con algoritmos",
      traditional: "❌ Basada en intuición"
    },
    {
      feature: "Optimización técnica de la tienda",
      ia: "✅ Automatizada con IA",
      traditional: "❌ Requiere intervención manual"
    },
    {
      feature: "Personalización de la experiencia de usuario",
      ia: "✅ Adaptativa en tiempo real",
      traditional: "❌ Fija e igual para todos"
    },
    {
      feature: "Resultados escalables y medibles",
      ia: "✅ Datos y KPIs claros",
      traditional: "❌ Sin métricas avanzadas"
    },
    {
      feature: "Adaptación continua a tendencias del mercado",
      ia: "✅ IA aprende y se ajusta",
      traditional: "❌ Revisión manual periódica"
    }
  ];

  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          🛒 ¿Por qué elegir SEO para ecommerce con IA frente al SEO tradicional?
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-seo-blue/20 py-4 px-4 text-left text-gray-300">Característica</th>
                <th className="border-b border-seo-blue/20 py-4 px-4 text-left text-seo-bright">SEO Ecommerce con IA (EvolucionaSEO)</th>
                <th className="border-b border-seo-blue/20 py-4 px-4 text-left text-gray-400">SEO tradicional</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr key={index}>
                  <td className="border-b border-seo-blue/10 py-3 px-4 text-gray-300">{comparison.feature}</td>
                  <td className="border-b border-seo-blue/10 py-3 px-4 text-seo-bright">{comparison.ia}</td>
                  <td className="border-b border-seo-blue/10 py-3 px-4 text-gray-400">{comparison.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
            <Link to="/agenda-consultoria">
              <ShoppingCart className="mr-2 h-4 w-4" /> Quiero vender más
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
