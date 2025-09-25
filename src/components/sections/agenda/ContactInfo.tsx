
import { FC } from 'react';
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactInfo: FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Información de contacto</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-seo-bright mt-1 mr-3" />
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <p className="text-gray-300">agencia@evolucionaseo.es</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-seo-bright mt-1 mr-3" />
            <div>
              <h3 className="font-medium text-white">Teléfono</h3>
              <p className="text-gray-300">910 62 66 84</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-seo-bright mt-1 mr-3" />
            <div>
              <h3 className="font-medium text-white">Dirección</h3>
              <p className="text-gray-300">100% Online</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-seo-bright mt-1 mr-3" />
            <div>
              <h3 className="font-medium text-white">Horario</h3>
              <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
