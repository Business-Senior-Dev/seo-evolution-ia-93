
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, MousePointer, Users } from "lucide-react";

export const SuccessCasesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Casos de éxito con nuestra Publicidad SEM Inteligente
          </h2>
          <p className="text-gray-300 mb-8">
            Resultados medibles y concretos obtenidos con nuestras estrategias de SEM potenciadas por IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">E-commerce sector moda</h3>
                <span className="text-seo-bright text-2xl font-bold">+150%</span>
              </div>
              <p className="text-gray-300 mb-4">
                Aumento en conversiones implementando IA en las campañas SEM, optimizando 
                el rendimiento y maximizando el ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">ROAS mejorado: <span className="text-white font-semibold">+85%</span></span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">CPA reducido: <span className="text-white font-semibold">-40%</span></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Servicios B2B</h3>
                <span className="text-seo-bright text-2xl font-bold">-30%</span>
              </div>
              <p className="text-gray-300 mb-4">
                Reducción en coste por adquisición mediante estrategias basadas en IA, 
                mejorando la eficiencia de las campañas.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <MousePointer className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">CTR mejorado: <span className="text-white font-semibold">+65%</span></span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">Leads cualificados: <span className="text-white font-semibold">+120%</span></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Clínica dental local</h3>
                <span className="text-seo-bright text-2xl font-bold">+200%</span>
              </div>
              <p className="text-gray-300 mb-4">
                Incremento en solicitudes de cita mediante campañas locales optimizadas con IA 
                para segmentación geográfica precisa.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <MousePointer className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">Tasa conversión: <span className="text-white font-semibold">12.8%</span></span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">Coste por cita: <span className="text-white font-semibold">-45%</span></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">SaaS Internacional</h3>
                <span className="text-seo-bright text-2xl font-bold">+320%</span>
              </div>
              <p className="text-gray-300 mb-4">
                Aumento en registros de prueba gratuita utilizando IA para personalizar 
                anuncios según idioma y comportamiento regional.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">Conversión a pago: <span className="text-white font-semibold">+42%</span></span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-seo-blue mr-2" />
                  <span className="text-sm text-gray-300">Retención: <span className="text-white font-semibold">+35%</span></span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
