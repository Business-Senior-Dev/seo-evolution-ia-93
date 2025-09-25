
import React from 'react';
import { SearchCheck, BarChart3, Cpu, LineChart, PenTool, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MethodologySection = () => {
  const steps = [
    {
      icon: SearchCheck,
      title: "Análisis y auditoría",
      description: "Evaluación exhaustiva de campañas existentes e investigación de mercado mediante IA para identificar oportunidades."
    },
    {
      icon: BarChart3,
      title: "Estrategia basada en datos",
      description: "Desarrollo de estrategia personalizada basada en análisis competitivo y predicciones de comportamiento del usuario."
    },
    {
      icon: Cpu,
      title: "Configuración de IA",
      description: "Implementación de algoritmos de machine learning adaptados a los objetivos específicos del negocio."
    },
    {
      icon: PenTool,
      title: "Creación optimizada",
      description: "Generación de anuncios y selección de palabras clave mediante herramientas de IA para maximizar relevancia."
    },
    {
      icon: LineChart,
      title: "Monitorización continua",
      description: "Seguimiento en tiempo real y ajustes automatizados para optimizar el rendimiento de las campañas."
    },
    {
      icon: Gauge,
      title: "Optimización y escalado",
      description: "Mejora continua basada en el aprendizaje automático y escalado de estrategias exitosas."
    }
  ];

  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Nuestra metodología <span className="text-gradient">SEM + IA</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Un enfoque estructurado para maximizar el rendimiento de tus campañas publicitarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-seo-card border-seo-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-seo-blue/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-seo-bright font-semibold">{index + 1}</span>
                  </div>
                  <step.icon className="w-6 h-6 text-seo-bright" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
