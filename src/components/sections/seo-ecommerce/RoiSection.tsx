
import { TrendingUp, BarChart2, PieChart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const RoiSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            El <span className="text-gradient">ROI</span> del SEO para ecommerce
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            A diferencia de la publicidad, donde pagas constantemente por cada clic, el SEO es una 
            inversión que genera retornos crecientes y sostenibles en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tráfico orgánico sin coste por clic</h3>
              <p className="text-gray-300">
                Mientras que en SEM pagas entre 0,5€ y 5€ por cada clic (o más en sectores competitivos), 
                el SEO te permite recibir miles de visitas sin coste adicional una vez posicionado.
              </p>
              <div className="mt-4 p-3 bg-seo-blue/10 rounded-lg">
                <p className="text-white font-medium">Caso real: <span className="text-seo-bright">10.000 visitas/mes</span></p>
                <p className="text-sm text-gray-300">Ahorro equivalente en SEM: <span className="text-white">15.000€/mes</span></p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <BarChart2 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mayor tasa de conversión</h3>
              <p className="text-gray-300">
                Las visitas orgánicas convierten un 20-30% mejor que las de pago, ya que los usuarios 
                confían más en los resultados naturales y tienen mayor intención de compra.
              </p>
              <div className="mt-4 p-3 bg-seo-blue/10 rounded-lg">
                <p className="text-white font-medium">Dato: <span className="text-seo-bright">+25% tasa de conversión</span></p>
                <p className="text-sm text-gray-300">Por cada 1.000€ en ventas por SEM: <span className="text-white">1.250€ con SEO</span></p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <PieChart className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mayor ticket medio</h3>
              <p className="text-gray-300">
                El SEO permite posicionar para productos de mayor valor y para búsquedas más específicas, 
                atrayendo clientes con mayor poder adquisitivo y disposición a la compra.
              </p>
              <div className="mt-4 p-3 bg-seo-blue/10 rounded-lg">
                <p className="text-white font-medium">Incremento medio: <span className="text-seo-bright">+35% en ticket medio</span></p>
                <p className="text-sm text-gray-300">De 85€ a <span className="text-white">115€ por pedido</span></p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Efecto acumulativo y duradero</h3>
              <p className="text-gray-300">
                A diferencia de la publicidad que cesa al detener la inversión, los resultados del SEO 
                perduran y se acumulan, generando un activo digital valioso para tu negocio.
              </p>
              <div className="mt-4 p-3 bg-seo-blue/10 rounded-lg">
                <p className="text-white font-medium">Análisis: <span className="text-seo-bright">ROI creciente</span></p>
                <p className="text-sm text-gray-300">Retorno de <span className="text-white">3-5x la inversión en 12 meses</span></p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gradient font-bold">
            La pregunta no es si puedes permitirte invertir en SEO, sino si puedes permitirte NO hacerlo
          </p>
        </div>
      </div>
    </section>
  );
};
