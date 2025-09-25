
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">MULTIPLICA TUS VENTAS ONLINE</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            SEO avanzado con <span className="text-gradient">inteligencia artificial</span> para ecommerce que quieren destacar
          </h1>
          
          <p className="text-gray-300 text-lg mb-6">
            Si tienes una tienda online, sabes que la competencia es feroz. Mientras compites por visibilidad con gigantes del sector y otras tiendas, cada día pierdes ventas potenciales que van a parar a tus competidores mejor posicionados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="flex items-start">
              <div className="mr-3 bg-seo-blue/10 rounded-full p-2">
                <ShoppingBag className="h-6 w-6 text-seo-bright" />
              </div>
              <div>
                <h3 className="text-white font-medium">Duplica tus ventas</h3>
                <p className="text-sm text-gray-300">Sin aumentar tu inversión en publicidad</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-3 bg-seo-blue/10 rounded-full p-2">
                <TrendingUp className="h-6 w-6 text-seo-bright" />
              </div>
              <div>
                <h3 className="text-white font-medium">Clientes recurrentes</h3>
                <p className="text-sm text-gray-300">Aumenta tu valor de vida del cliente</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 italic border-l-4 border-seo-blue pl-4 mb-8">
            "Nuestra metodología de SEO para ecommerce con IA ha conseguido aumentar las ventas de nuestros clientes entre un 150% y un 400% en menos de un año. ¿Quieres ser el siguiente caso de éxito?"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity w-full sm:w-auto">
              <Link to="/agenda-consultoria">Solicitar consultoría gratuita</Link>
            </Button>
            <span className="text-gray-300 text-sm">Sin compromiso · Consulta personalizada · Resultados garantizados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
