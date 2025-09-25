
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ZonaCardProps {
  nombre_cliente: string;
  servicio: string;
  zona: string;
  estado: string;
  fecha_inicio?: string;
  logo?: string;
  url_web_cliente?: string;
}

export const ZonaCard: React.FC<ZonaCardProps> = ({
  nombre_cliente,
  servicio,
  zona,
  estado,
  fecha_inicio,
  logo,
  url_web_cliente,
}) => {
  const isDisponible = estado === "disponible";

  return (
    <div className={`p-6 rounded-lg shadow-md ${isDisponible ? "bg-seo-darkBlue border-l-4 border-green-500" : "bg-gray-800 border-l-4 border-gray-500"}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          {logo && (
            <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logo} alt={nombre_cliente} className="object-cover" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-white">{nombre_cliente}</h3>
        </div>
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${isDisponible ? "bg-green-900/30 text-green-400" : "bg-gray-700 text-gray-300"}`}>
          {isDisponible ? "🟢 Zona disponible" : "✅ Zona reservada"}
        </span>
      </div>
      
      <div className="mt-4 space-y-2 text-gray-300">
        <p><span className="font-medium text-white">Servicio:</span> {servicio}</p>
        <p><span className="font-medium text-white">Ubicación:</span> {zona}</p>
        {fecha_inicio && <p><span className="font-medium text-white">Fecha inicio:</span> {new Date(fecha_inicio).toLocaleDateString('es-ES')}</p>}
      </div>

      <div className="mt-6">
        {isDisponible ? (
          <Button asChild className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 transition-opacity">
            <Link to="/#contacto">Quiero reservar esta zona</Link>
          </Button>
        ) : (
          <div className="p-3 bg-gray-700/50 rounded-md text-center text-sm text-gray-300">
            Actualmente trabajamos con un cliente en esta zona
          </div>
        )}
        {url_web_cliente && (
          <a href={url_web_cliente} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm text-seo-bright hover:underline">
            Ver sitio web
          </a>
        )}
      </div>
    </div>
  );
};
