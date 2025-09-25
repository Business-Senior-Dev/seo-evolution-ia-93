
import React from "react";
import { ZonaCard } from "./ZonaCard";
import { Skeleton } from "@/components/ui/skeleton";

interface Cliente {
  id: string;
  nombre_cliente: string;
  servicio: string;
  zona: string;
  estado: string;
  fecha_inicio?: string;
  logo?: string;
  url_web_cliente?: string;
}

interface ZonasGridSectionProps {
  clientes: Cliente[];
  loading: boolean;
  error: boolean;
}

export const ZonasGridSection: React.FC<ZonasGridSectionProps> = ({
  clientes,
  loading,
  error,
}) => {
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-10">
          <p className="text-red-400 text-lg">
            Ha ocurrido un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-seo-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Zonas y servicios
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-800">
                <Skeleton className="h-12 w-full bg-gray-700 mb-4" />
                <Skeleton className="h-6 w-3/4 bg-gray-700 mb-2" />
                <Skeleton className="h-6 w-1/2 bg-gray-700 mb-2" />
                <Skeleton className="h-10 w-full bg-gray-700 mt-4" />
              </div>
            ))}
          </div>
        ) : clientes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((cliente) => (
              <ZonaCard
                key={cliente.id}
                nombre_cliente={cliente.nombre_cliente}
                servicio={cliente.servicio}
                zona={cliente.zona}
                estado={cliente.estado}
                fecha_inicio={cliente.fecha_inicio}
                logo={cliente.logo}
                url_web_cliente={cliente.url_web_cliente}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400 text-lg">
              No se encontraron zonas que coincidan con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
