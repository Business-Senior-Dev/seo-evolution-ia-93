
import React from "react";
import { Search } from "lucide-react";

interface ZonasFilterSectionProps {
  servicios: string[];
  zonas: string[];
  selectedServicio: string;
  selectedZona: string;
  selectedEstado: string;
  onServicioChange: (servicio: string) => void;
  onZonaChange: (zona: string) => void;
  onEstadoChange: (estado: string) => void;
  onSearchChange: (search: string) => void;
}

export const ZonasFilterSection: React.FC<ZonasFilterSectionProps> = ({
  servicios,
  zonas,
  selectedServicio,
  selectedZona,
  selectedEstado,
  onServicioChange,
  onZonaChange,
  onEstadoChange,
  onSearchChange,
}) => {
  return (
    <section className="py-8 bg-seo-dark/80">
      <div className="container mx-auto px-4">
        <div className="bg-seo-darkBlue p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Buscar por nombre o zona..."
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                value={selectedServicio}
                onChange={(e) => onServicioChange(e.target.value)}
              >
                <option value="">Todos los servicios</option>
                {servicios.map((servicio) => (
                  <option key={servicio} value={servicio}>
                    {servicio}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                value={selectedZona}
                onChange={(e) => onZonaChange(e.target.value)}
              >
                <option value="">Todas las zonas</option>
                {zonas.map((zona) => (
                  <option key={zona} value={zona}>
                    {zona}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5"
                value={selectedEstado}
                onChange={(e) => onEstadoChange(e.target.value)}
              >
                <option value="">Todos los estados</option>
                <option value="reservada">Zonas reservadas</option>
                <option value="disponible">Zonas disponibles</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
