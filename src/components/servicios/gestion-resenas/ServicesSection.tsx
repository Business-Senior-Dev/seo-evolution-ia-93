
import { AlertTriangle, BarChart, CheckCircle, MessageCircle, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
            ¿QUÉ INCLUYE NUESTRO SERVICIO DE <span className="text-gradient">GESTIÓN DE RESEÑAS CON IA</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Estrategia personalizada para conseguir más reseñas</h3>
                <p className="text-gray-300">Creamos acciones específicas para incentivar valoraciones reales de clientes satisfechos.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Guías y materiales para pedir reseñas sin incomodar</h3>
                <p className="text-gray-300">Diseñamos plantillas y mensajes para WhatsApp, email o QR, sin parecer insistente.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Respuesta profesional a reseñas</h3>
                <p className="text-gray-300">Redactamos respuestas que aportan valor, calman quejas y potencian las buenas experiencias.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Monitorización y alertas de nuevas reseñas</h3>
                <p className="text-gray-300">Te avisamos de cada reseña nueva y analizamos su impacto en tu visibilidad.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Análisis inteligente del sentimiento</h3>
                <p className="text-gray-300">Utilizamos inteligencia artificial para identificar patrones en las opiniones de tus clientes, ayudándote a entender lo que valoran y dónde puedes mejorar.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-seo-card border-seo-blue/20 hover-scale hover-glow transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-seo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-seo-bright w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Asesoramiento continuo</h3>
                <p className="text-gray-300">Te acompañamos con mejoras continuas en tu ficha y reputación digital, sin atajos ni reseñas falsas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
