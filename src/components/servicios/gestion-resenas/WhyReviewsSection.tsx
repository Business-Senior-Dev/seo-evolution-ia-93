
import { BarChart, CheckCircle, Star } from "lucide-react";

export function WhyReviewsSection() {
  return (
    <section className="py-16 bg-seo-darkBlue relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            ¿Por qué es importante gestionar bien tus reseñas online?
          </h2>
          
          <p className="text-gray-300 mb-8">
            Las opiniones de tus clientes son uno de los factores más influyentes en la toma de decisiones de compra. 
            Además de impactar en tu reputación, también afectan directamente al posicionamiento local y la conversión. 
            En EvolucionaSEO te ayudamos a construir una estrategia ética y efectiva para destacar tu negocio a través 
            de reseñas reales y bien gestionadas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-seo-card p-6 rounded-lg hover-scale hover-glow transition-all">
              <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <Star className="text-seo-bright w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Credibilidad</h3>
              <p className="text-gray-300">El 93% de los consumidores consulta reseñas antes de decidir una compra.</p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg hover-scale hover-glow transition-all">
              <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-seo-bright w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">SEO Local</h3>
              <p className="text-gray-300">Las reseñas son uno de los principales factores de posicionamiento en Google.</p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg hover-scale hover-glow transition-all">
              <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-seo-bright w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Conversión</h3>
              <p className="text-gray-300">Las reseñas gestionadas profesionalmente aumentan las conversiones hasta un 270%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
