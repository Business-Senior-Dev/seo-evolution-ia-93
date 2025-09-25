
import { AlertCircle } from "lucide-react";

export const ChallengesSection = () => {
  const challenges = [
    {
      title: "Visibilidad reducida frente a gigantes del sector",
      description: "Las grandes marcas dominan las primeras posiciones en Google, haciendo que tu tienda quede relegada a páginas donde nadie llega."
    },
    {
      title: "Fichas de producto que no convierten",
      description: "Contenido genérico que no diferencia tus productos ni comunica su valor real, resultando en altas tasas de rebote."
    },
    {
      title: "Tráfico pero sin ventas",
      description: "Recibes visitas que no se transforman en ventas porque no estás atrayendo a usuarios con intención de compra."
    },
    {
      title: "Estructura web confusa y lenta",
      description: "Tu tienda tiene problemas técnicos que frustran a los usuarios y penalizan tu posicionamiento en Google."
    },
    {
      title: "Actualización manual imposible",
      description: "Con cientos o miles de productos, es imposible mantener todo optimizado manualmente de forma constante."
    }
  ];

  return (
    <section className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          ¿Te identificas con estos problemas en tu tienda online?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-seo-card border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
              </div>
              <p className="text-gray-300">{challenge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-seo-blue/20 to-seo-cyan/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Estos problemas están costando a tu negocio miles de euros cada mes en ventas perdidas
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            La diferencia entre una tienda exitosa y una que apenas sobrevive está en la capacidad para captar tráfico cualificado y convertirlo en ventas. 
            Sin una estrategia SEO avanzada para ecommerce, estás cediendo clientes a tu competencia cada día.
          </p>
        </div>
      </div>
    </section>
  );
};
