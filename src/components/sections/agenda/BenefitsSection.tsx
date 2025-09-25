
import { FC } from 'react';
import { CheckCircle2 } from "lucide-react";

export const BenefitsSection: FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">¿Por qué reservar una consultoría?</h2>
      
      <ul className="space-y-4">
        <li className="flex items-start">
          <CheckCircle2 className="text-seo-bright mr-2 mt-1 flex-shrink-0 w-5 h-5" />
          <span className="text-gray-300">Análisis personalizado de tu situación SEO actual</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="text-seo-bright mr-2 mt-1 flex-shrink-0 w-5 h-5" />
          <span className="text-gray-300">Detección de problemas técnicos en tu web</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="text-seo-bright mr-2 mt-1 flex-shrink-0 w-5 h-5" />
          <span className="text-gray-300">Recomendaciones de estrategia a implementar</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="text-seo-bright mr-2 mt-1 flex-shrink-0 w-5 h-5" />
          <span className="text-gray-300">Sin compromiso y totalmente gratuito</span>
        </li>
      </ul>
    </div>
  );
};
