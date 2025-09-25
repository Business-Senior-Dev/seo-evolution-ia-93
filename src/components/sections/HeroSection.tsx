
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      {/* Animated gradient lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTQ0MCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMiI+PGcgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNLTg4LjAwMDEgNzQwTDE0NDAgNzQwIiBzdHJva2U9InVybCgjZ3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0tODguMDAwMSA1MjBMMTQ0MCA1MjAiIHN0cm9rZT0idXJsKCNncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTS04OC4wMDAxIDMwMEwxNDQwIDMwMCIgc3Ryb2tlPSJ1cmwoI2dyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNLTg4LjAwMDEgOTYwTDE0NDAgOTYwIiBzdHJva2U9InVybCgjZ3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48ZyBvcGFjaXR5PSIwLjIiPjxwYXRoIGQ9Ik0xNTIgLTg4VjEwMjQiIHN0cm9rZT0idXJsKCNncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTM5MiAtODhWMTAyNCIgc3Ryb2tlPSJ1cmwoI2dyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNNjMyIC04OFYxMDI0IiBzdHJva2U9InVybCgjZ3JhZGllbnQpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik04NzIgLTg4VjEwMjQiIHN0cm9rZT0idXJsKCNncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTExMTIgLTg4VjEwMjQiIHN0cm9rZT0idXJsKCNncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTEzNTIgLTg4VjEwMjQiIHN0cm9rZT0idXJsKCNncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9nPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjElIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwNmI2ZDQiLz48c3RvcCBvZmZzZXQ9IjElIiBzdG9wLWNvbG9yPSIjMDI4NGM3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-8 md:mt-0">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-6">
            <span className="text-xs font-medium text-seo-bright">✨ EVOLUCIONASEO + IA | EL REVOLUCIONARIO SEO INTELIGENTE</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Agencia <span className="text-gradient">SEO con IA</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in relative overflow-hidden group" style={{ animationDelay: "0.2s" }}>
            <span className="relative inline-block">
              {/* Glow effect behind text */}
              <span className="absolute inset-0 text-transparent bg-gradient-to-r from-seo-blue via-seo-cyan to-seo-blue bg-clip-text blur-sm opacity-60 animate-pulse"></span>
              
              {/* Main text with enhanced styling */}
              <span className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Revoluciona tu presencia digital
              </span>
              
              {/* Primary light sweep - faster */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-seo-cyan/80 to-transparent translate-x-[-100%] animate-[light-sweep_2.5s_ease-in-out_1.5s_infinite] w-full h-full"></span>
              
              {/* Secondary light sweep - slower, different color */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-seo-blue/40 to-transparent translate-x-[-100%] animate-[light-sweep_4s_ease-in-out_3s_infinite] w-full h-full"></span>
              
              {/* Scanning line effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[light-sweep_1.8s_linear_0.5s_infinite] w-[2px] h-full"></span>
              
              {/* Subtle matrix-like dots */}
              <span className="absolute -inset-2 opacity-20">
                <span className="absolute top-0 left-1/4 w-1 h-1 bg-seo-cyan rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></span>
                <span className="absolute top-2 right-1/3 w-1 h-1 bg-seo-blue rounded-full animate-pulse" style={{ animationDelay: "1.2s" }}></span>
                <span className="absolute bottom-1 left-2/3 w-1 h-1 bg-seo-cyan rounded-full animate-pulse" style={{ animationDelay: "2.1s" }}></span>
              </span>
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Combinamos la precisión de la Inteligencia Artificial con estrategias SEO de vanguardia para llevar tu visibilidad online al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="#contacto">Solicitar Estrategia SEO</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-seo-blue/40 text-white hover:bg-seo-blue/10">
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>
          
          {/* Partner logos */}
          <div className="mt-16 mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//shopify-partner.png" 
                alt="Logo de Shopify Partner" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//google-ads-2.png" 
                alt="Logo de Google Ads Certified Partner" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//prestashop-2.png" 
                alt="Logo de PrestaShop Partner" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//dinorank-2.png" 
                alt="Logo de Dino Rank" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//semrush-partner.png" 
                alt="Logo de SEMRush Partner" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <img 
                src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//bing-2.png" 
                alt="Logo de Bing Partner" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          </div>
          
          {/* Animated arrow down - Moved below partner logos */}
          <div className="flex justify-center mt-8">
            <a href="#servicios" className="flex items-center justify-center w-10 h-10 rounded-full bg-seo-blue/20 text-white animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
