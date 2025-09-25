
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-seo-dark border-t border-seo-blue/20 pt-12 pb-6 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//evolucionaseo.png" 
                  alt="EvolucionaSEO Logo" 
                  className="h-[80px] w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Agencia SEO con IA que revoluciona tu presencia digital con estrategias inteligentes y resultados medibles.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-seo-bright transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-seo-bright transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-seo-bright transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-seo-bright transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios/seo-local-ia" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">SEO Local con IA</Link></li>
              <li><Link to="/servicios/seo-web-ia" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">SEO Web con IA</Link></li>
              <li><Link to="/servicios/seo-ecommerce-ia" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">SEO para E-commerce</Link></li>
              <li><Link to="/mas-servicios" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Link Building</Link></li>
              <li><Link to="/mas-servicios" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Publicidad SEM</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Blog</Link></li>
              <li><Link to="/mas-servicios" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Casos de Éxito</Link></li>
              <li><Link to="/mas-servicios" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Recursos Gratuitos</Link></li>
              <li><Link to="/mas-servicios" className="text-gray-400 hover:text-seo-bright transition-colors text-sm">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">agencia@evolucionaseo.es</li>
              <li className="text-gray-400 text-sm">910 62 66 84</li>
              <li className="text-gray-400 text-sm">🕒 Lunes a viernes de 9:00 a 18:00</li>
              <li className="text-gray-400 text-sm">🌍 Estamos en la nube... pero con los pies en el SEO. 100% Online donde nos necesites.</li>
              <li className="mt-4">
                <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity w-full">
                  <a href="#contacto">Hablemos</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} EvolucionaSEO. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal/privacidad" className="text-gray-500 hover:text-seo-bright transition-colors text-sm">Política de Privacidad</Link>
            <Link to="/legal/terminos-servicio" className="text-gray-500 hover:text-seo-bright transition-colors text-sm">Términos de Servicio</Link>
            <Link to="/legal/cookies" className="text-gray-500 hover:text-seo-bright transition-colors text-sm">Cookies</Link>
            <Link to="/legal/condiciones-uso" className="text-gray-500 hover:text-seo-bright transition-colors text-sm">Condiciones de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
