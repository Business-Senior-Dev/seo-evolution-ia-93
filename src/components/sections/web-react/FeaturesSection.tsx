
import { Code, Zap, Layout, Smartphone, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Características de nuestras <span className="text-gradient">páginas web React</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Velocidad Ultrarrápida</h3>
              <p className="text-gray-300">
                Páginas web que cargan en menos de 1 segundo. Nuestro código React 
                optimizado con IA garantiza la mayor velocidad del mercado.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Smartphone className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diseño Personalizado con IA</h3>
              <p className="text-gray-300">
                Cada diseño es único, creado desde cero usando IA para analizar tu mercado 
                y crear interfaces que convierten mejor que la competencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Layout className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">UX Perfecto</h3>
              <p className="text-gray-300">
                Experiencias de usuario optimizadas por IA que guían naturalmente 
                a los visitantes hacia la conversión y maximizan resultados.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Code className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Código Propio Optimizado</h3>
              <p className="text-gray-300">
                Desarrollo 100% propio sin plantillas. Cada línea de código está 
                optimizada con IA para máximo rendimiento y escalabilidad.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <ShieldCheck className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Seguridad Máxima con IA</h3>
              <p className="text-gray-300">
                Implementación de las últimas técnicas de seguridad web potenciadas por IA 
                para proteger tu página web y datos de usuarios al máximo nivel.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Sparkles className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">El Mejor SEO del Mercado</h3>
              <p className="text-gray-300">
                SEO potenciado por IA que garantiza posicionamiento #1 en Google. 
                Dominamos las técnicas más avanzadas de optimización web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
