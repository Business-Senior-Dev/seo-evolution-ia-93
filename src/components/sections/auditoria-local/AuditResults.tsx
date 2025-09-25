
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { AuditResult } from './LocalSEOAuditor';

interface AuditResultsProps {
  result: AuditResult;
  onRequestOptimization: () => void;
}

export const AuditResults: React.FC<AuditResultsProps> = ({ result, onRequestOptimization }) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-500";
    if (score >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreText = (score: number) => {
    if (score >= 70) return "¡Excelente!";
    if (score >= 40) return "Necesita mejoras";
    return "Optimización urgente";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 70) return "bg-gradient-to-r from-green-500 to-green-400";
    if (score >= 40) return "bg-gradient-to-r from-yellow-500 to-yellow-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
  };

  return (
    <div className="bg-seo-card border border-seo-blue/20 rounded-lg overflow-hidden shadow-lg animate-fade-in">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-2 text-white">Resultados del análisis</h2>
        <p className="text-gray-400 mb-6">
          Ficha analizada: <span className="text-seo-bright">{result.nombre_negocio}</span>
        </p>

        {/* Score section */}
        <div className="bg-seo-darkBlue/50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-300">Puntuación SEO Local:</span>
            <span className={`text-2xl font-bold ${getScoreColor(result.puntuacion)}`}>
              {result.puntuacion}/100
            </span>
          </div>
          
          <div className="w-full bg-seo-dark/50 rounded-full h-3 mb-2">
            <div 
              className={`${getProgressBarColor(result.puntuacion)} h-3 rounded-full transition-all duration-1000`}
              style={{ width: `${result.puntuacion}%` }}
            />
          </div>
          
          <p className={`text-sm text-right ${getScoreColor(result.puntuacion)}`}>
            {getScoreText(result.puntuacion)}
          </p>
        </div>

        {/* Business details */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3 text-white">Datos del negocio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-gray-400">Dirección: <span className="text-white">{result.direccion || "No disponible"}</span></p>
              <p className="text-gray-400">Teléfono: <span className="text-white">{result.telefono || "No disponible"}</span></p>
              <p className="text-gray-400">Web: <span className="text-white">{result.sitio_web ? "Disponible" : "No disponible"}</span></p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Categoría: <span className="text-white">{result.categoria || "No disponible"}</span></p>
              <p className="text-gray-400">Valoración: <span className="text-white">{result.valoracion || 0}/5</span></p>
              <p className="text-gray-400">Reseñas: <span className="text-white">{result.num_resenas || 0}</span></p>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <h3 className="text-lg font-medium mb-3 text-white">Factores SEO analizados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <ChecklistItem 
            title="Tiene reseñas" 
            isChecked={result.tiene_resenas} 
            tooltip="Las reseñas son fundamentales para la credibilidad" 
          />
          <ChecklistItem 
            title="Más de 25 reseñas" 
            isChecked={result.muchas_resenas} 
            tooltip="Un mayor volumen de reseñas mejora la confianza" 
          />
          <ChecklistItem 
            title="Valoración > 4.2" 
            isChecked={result.buena_valoracion} 
            tooltip="Una buena valoración mejora la visibilidad" 
          />
          <ChecklistItem 
            title="Título optimizado" 
            isChecked={result.keyword_en_titulo} 
            tooltip="La palabra clave en el título ayuda al posicionamiento" 
          />
          <ChecklistItem 
            title="Categoría correcta" 
            isChecked={result.categoria_correcta} 
            tooltip="Una categoría relevante mejora la visibilidad en búsquedas relacionadas" 
          />
          <ChecklistItem 
            title="Ficha verificada" 
            isChecked={result.ficha_verificada} 
            tooltip="Las fichas verificadas tienen más credibilidad" 
          />
          <ChecklistItem 
            title="Datos completos" 
            isChecked={result.datos_completos} 
            tooltip="Teléfono, web y horarios mejoran la experiencia del usuario" 
          />
          <ChecklistItem 
            title="Tiene fotos" 
            isChecked={result.tiene_fotos} 
            tooltip="Las fotos generan más interacciones y conversiones" 
          />
        </div>

        {/* CTA section */}
        <div className="bg-seo-blue/10 border border-seo-blue/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-3 text-white">¿Quieres optimizar tu ficha con IA?</h3>
          <p className="text-gray-300 mb-4">
            Podemos mejorar automáticamente tu presencia local para aumentar tu visibilidad y conseguir más clientes.
          </p>
          <Button 
            onClick={onRequestOptimization}
            size="lg"
            className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90"
          >
            Solicitar optimización
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ChecklistItemProps {
  title: string;
  isChecked: boolean;
  tooltip: string;
}

const ChecklistItem = ({ title, isChecked, tooltip }: ChecklistItemProps) => {
  return (
    <div className={`flex items-center gap-2 p-3 rounded-md ${isChecked ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
      <div className={`rounded-full p-1 ${isChecked ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
        {isChecked ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Info className="h-4 w-4 text-red-500" />
        )}
      </div>
      <span className={`flex-grow text-sm ${isChecked ? 'text-green-100' : 'text-red-100'}`}>
        {title}
      </span>
      <div className="group relative">
        <Info className="h-4 w-4 text-gray-400 cursor-help" />
        <div className="absolute bottom-full mb-2 right-0 w-56 bg-seo-darkBlue border border-seo-blue/20 p-2 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          {tooltip}
        </div>
      </div>
    </div>
  );
};
