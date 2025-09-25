
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ContactCTASection = () => {
  return (
    <section className="my-12 p-8 bg-seo-blue/10 rounded-lg border border-seo-blue/20">
      <h2 className="text-2xl font-bold text-white mb-4">
        ¿Quieres implementar SEO Inteligente en tu negocio?
      </h2>
      <p className="text-gray-300 mb-6">
        En EvolucionaSEO somos especialistas en aplicar técnicas avanzadas de SEO con inteligencia artificial
        para multiplicar la visibilidad y las conversiones de tu empresa online.
      </p>
      <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
        <Link to="/agenda-consultoria">Solicitar consultoría gratuita</Link>
      </Button>
    </section>
  );
};
