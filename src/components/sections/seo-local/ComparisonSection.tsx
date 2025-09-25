
import React from "react";
import { Check, X } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function ComparisonSection() {
  return (
    <section className="py-16 bg-seo-darkBlue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-seo-blue/5 rounded-full filter blur-3xl -z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-gradient">🤖 ¿Por qué elegir SEO local con IA</span> y no solo campañas de Ads?
          </h2>
        </div>
        
        <div className="bg-seo-card border border-seo-blue/10 rounded-xl p-6 md:p-8 mb-10">
          <div className="grid grid-cols-3 gap-4 mb-4 text-center font-bold">
            <div className="col-span-1">CARACTERÍSTICA</div>
            <div className="col-span-1">SEO LOCAL CON IA</div>
            <div className="col-span-1">CAMPAÑAS DE ADS</div>
          </div>
          
          {comparisonItems.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 border-t border-seo-blue/10 text-center">
              <div className="col-span-1 text-gray-300 flex items-center justify-center md:justify-start md:text-left">
                {item.feature}
              </div>
              <div className="col-span-1 text-center">
                {item.seoValue ? (
                  <div className="flex justify-center items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-500 ml-2 hidden md:inline">{item.seoLabel}</span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <X className="h-5 w-5 text-red-500" />
                    <span className="text-red-500 ml-2 hidden md:inline">{item.seoLabel}</span>
                  </div>
                )}
              </div>
              <div className="col-span-1 text-center">
                {item.adsValue ? (
                  <div className="flex justify-center items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-500 ml-2 hidden md:inline">{item.adsLabel}</span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <X className="h-5 w-5 text-red-500" />
                    <span className="text-red-500 ml-2 hidden md:inline">{item.adsLabel}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

const comparisonItems = [
  {
    feature: "Visibilidad a largo plazo",
    seoValue: true,
    seoLabel: "Sí",
    adsValue: false,
    adsLabel: "No"
  },
  {
    feature: "Coste sostenido",
    seoValue: true,
    seoLabel: "Bajo",
    adsValue: false,
    adsLabel: "Alto"
  },
  {
    feature: "Autoridad y confianza",
    seoValue: true,
    seoLabel: "Alta",
    adsValue: false,
    adsLabel: "Baja"
  },
  {
    feature: "Resultados orgánicos",
    seoValue: true,
    seoLabel: "Mejores",
    adsValue: false,
    adsLabel: "Dependen del pago"
  }
];
