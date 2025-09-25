
import { Brain, Target, PenTool, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyAiSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ¿Por qué integrar <span className="text-gradient">IA</span> en tus campañas SEM?
          </h2>
          <p className="text-gray-300">
            La inteligencia artificial revoluciona la forma en que gestionamos la publicidad digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Target className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Automatización de pujas y segmentación precisa</h3>
              <p className="text-gray-300">
                Ajusta pujas en tiempo real y segmenta audiencias con mayor precisión, asegurando que tus 
                anuncios lleguen al público adecuado en el momento oportuno.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <PenTool className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Generación de anuncios más efectivos</h3>
              <p className="text-gray-300">
                Utiliza IA para crear anuncios más atractivos y relevantes, mejorando la tasa de clics 
                y la conversión al comprender mejor la intención del usuario.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <LineChart className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">Análisis predictivo para decisiones</h3>
              <p className="text-gray-300">
                Anticipa tendencias y comportamientos del consumidor mediante análisis predictivos, 
                permitiéndote tomar decisiones estratégicas basadas en datos concretos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
