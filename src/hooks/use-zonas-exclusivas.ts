
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Zona {
  id: string;
  servicio: string;
  zona: string;
  disponible: boolean;
  created_at: string;
}

export function useZonasExclusivas() {
  const [clientes, setClientes] = useState<Zona[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<Zona[]>([]);
  const [servicios, setServicios] = useState<string[]>([]);
  const [zonas, setZonas] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  // Filtros
  const [selectedServicio, setSelectedServicio] = useState<string>("");
  const [selectedZona, setSelectedZona] = useState<string>("");
  const [selectedEstado, setSelectedEstado] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Cargar datos
  useEffect(() => {
    async function fetchClientes() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('zonas')
          .select('*');
        
        if (error) {
          console.error('Error fetching clientes:', error);
          setError(true);
          return;
        }
        
        if (data) {
          setClientes(data);
          setFilteredClientes(data);
          
          // Extraer servicios únicos
          const uniqueServicios = [...new Set(data.map(item => item.servicio))];
          setServicios(uniqueServicios);
          
          // Extraer zonas únicas
          const uniqueZonas = [...new Set(data.map(item => item.zona))];
          setZonas(uniqueZonas);
        }
      } catch (err) {
        console.error('Error in fetch:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    fetchClientes();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let result = [...clientes];
    
    if (selectedServicio) {
      result = result.filter(zona => zona.servicio === selectedServicio);
    }
    
    if (selectedZona) {
      result = result.filter(zona => zona.zona === selectedZona);
    }
    
    if (selectedEstado) {
      result = result.filter(zona => zona.disponible === (selectedEstado === 'disponible'));
    }
    
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      result = result.filter(
        zona =>
          zona.servicio.toLowerCase().includes(searchTermLower) ||
          zona.zona.toLowerCase().includes(searchTermLower)
      );
    }
    
    setFilteredClientes(result);
  }, [clientes, selectedServicio, selectedZona, selectedEstado, searchTerm]);

  return {
    clientes: filteredClientes,
    servicios,
    zonas,
    loading,
    error,
    filters: {
      selectedServicio,
      selectedZona,
      selectedEstado,
      setSelectedServicio,
      setSelectedZona,
      setSelectedEstado,
      setSearchTerm,
    },
  };
}
