
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface UrlFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export function UrlForm({ onSubmit, isLoading }: UrlFormProps) {
  const [url, setUrl] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      // Add https:// if no protocol is specified
      let processedUrl = url.trim();
      if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
        processedUrl = `https://${processedUrl}`;
      }
      onSubmit(processedUrl);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="bg-seo-card rounded-xl p-6 border border-seo-blue/30">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Introduce la URL de tu web (ej: https://tudominio.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              className="bg-seo-dark border-seo-blue/30 focus:border-seo-blue h-14 text-base"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isLoading || !url.trim()}
            className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity h-14 px-6 min-w-[140px]"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                <span>Analizando...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <SearchIcon size={20} />
                <span>Analizar</span>
              </div>
            )}
          </Button>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          Analizaremos la URL y evaluaremos la estructura de sus encabezados HTML.
        </p>
      </div>
    </form>
  );
}
