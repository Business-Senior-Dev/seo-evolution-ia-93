
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  company: string;
  text: string;
  rating: number;
  logo?: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bot Trade Pro",
    company: "Empresa tecnológica",
    text: "Gracias a EvolucionaSEO hemos mejorado drásticamente nuestra visibilidad online. Su enfoque basado en IA nos ha permitido superar a competidores que llevan años en el mercado. El incremento en tráfico cualificado ha sido espectacular.",
    rating: 5,
    date: "Marzo 2023"
  },
  {
    name: "Joel García",
    company: "Emprendedor digital",
    text: "Llevaba años luchando con el posicionamiento de mi sitio web hasta que encontré a EvolucionaSEO. Su metodología combinada con IA es simplemente revolucionaria. En menos de 3 meses mis visitas orgánicas han aumentado un 215%.",
    rating: 5,
    date: "Enero 2023"
  },
  {
    name: "Hugo Díaz",
    company: "Marketing Manager",
    text: "Lo que más valoro de EvolucionaSEO es su enfoque basado en datos reales y su capacidad para adaptar las estrategias. La IA que utilizan permite optimizar los recursos y maximizar los resultados. Totalmente recomendable.",
    rating: 5,
    date: "Febrero 2023"
  },
  {
    name: "Sergio Roldán",
    company: "E-commerce manager",
    text: "Mi tienda online ha experimentado un crecimiento exponencial desde que trabajamos con EvolucionaSEO. La combinación de SEO tradicional con análisis potenciado por IA ha supuesto un antes y un después para nuestro negocio.",
    rating: 5,
    date: "Abril 2023"
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">TESTIMONIOS DE CLIENTES</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que hablan por <span className="text-gradient">sí solos</span>
          </h2>
          
          <p className="text-gray-300">
            Descubre lo que nuestros clientes dicen sobre nuestra metodología SEO potenciada con IA
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4 md:px-6"
                >
                  <div className="bg-seo-card rounded-xl p-8 h-full border border-seo-blue/10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                      {testimonial.logo && (
                        <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="h-10 w-auto" />
                      )}
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="mb-6">
                      <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    </blockquote>
                    
                    <p className="text-right text-gray-400 text-sm">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-seo-card border border-seo-blue/20 flex items-center justify-center text-white hover:bg-seo-blue/20 transition-colors z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-seo-card border border-seo-blue/20 flex items-center justify-center text-white hover:bg-seo-blue/20 transition-colors z-10"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === activeIndex ? "bg-seo-bright" : "bg-gray-600"
              )}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
