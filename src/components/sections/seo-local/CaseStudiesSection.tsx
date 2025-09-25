import React from "react";

export function CaseStudiesSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
            <span className="text-xs font-medium text-seo-bright">CASOS DE ÉXITO</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Proyectos | <span className="text-gradient">SEO Local con tecnología IA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mt-4">
            Casos reales, cómo hemos posicionado negocios en su zona
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CaseStudyProps {
  category: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

const caseStudies = [
  {
    category: "COMERCIO MINORISTA",
    name: "La Tienda Berenguer",
    location: "Madrid (5 establecimientos físicos)",
    description: "Implementamos una estrategia integral de SEO local combinada con IA para mejorar la presencia de sus cinco tiendas en Google. Optimizamos cada ficha de Google Business Profile con productos visibles en búsqueda, palabras clave locales, horarios y llamadas a la acción. Además, gestionamos campañas automatizadas para la captación de reseñas positivas. El resultado: pasaron de recibir 100 visitas al mes a más de 2.000 y hoy dominan los primeros puestos de resultados locales.",
    imageUrl: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//berenguer-evoluciona-seo.webp"
  },
  {
    category: "SERVICIOS PERSONALES",
    name: "Barber's Roldan",
    location: "Numancia de la Sagra (Toledo)",
    description: "Creamos desde cero el perfil de Google Business Profile para su peluquería y aplicamos una estrategia local con IA para posicionarla rápidamente en su zona. Hoy es el negocio número 1 en búsquedas de peluquerías en Numancia de la Sagra y tiene su agenda llena. Gestionamos su sistema de citas directas desde el perfil de Google, añadimos fotos actualizadas y realizamos campañas específicas para obtener reseñas positivas que refuercen su reputación online.",
    imageUrl: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//barbers-roldan-evoluciona-seo.webp"
  },
  {
    category: "SERVICIOS PROFESIONALES",
    name: "Logopedia Alcorcón",
    location: "Alcorcón (Madrid)",
    description: "Realizamos una renovación completa del perfil de Google Business, incluyendo optimización técnica, actualización visual y una campaña de palabras clave estratégicas geolocalizadas. Gracias a esta estrategia, el cliente pasó de recibir apenas 10 visitas mensuales a superar las 500, alcanzando la primera posición en búsquedas relacionadas con logopedia en su zona.",
    imageUrl: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//local-aprendo.webp"
  },
  {
    category: "SERVICIOS TÉCNICOS",
    name: "Tecmóvil Yuncos",
    location: "Yuncos (Toledo)",
    description: "Creamos su perfil de Google Business desde cero y lo optimizamos estratégicamente para posicionarlo como la opción líder en 'reparación de móviles en Yuncos'. Desarrollamos una campaña de palabras clave locales y configuramos todos los servicios destacados en su zona, consiguiendo que aparezca en primera posición. Actualmente recibe llamadas y visitas diarias de clientes de todo el municipio y alrededores, consolidando su presencia como referente técnico en reparaciones móviles.",
    imageUrl: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//tecmovil-yuncos-seo-local.webp"
  }
];

function CaseStudyCard({ category, name, location, description, imageUrl }: CaseStudyProps) {
  return (
    <div className="bg-seo-card border border-seo-blue/10 rounded-xl p-6 hover-scale hover-glow transition-all duration-300">
      <span className="text-xs font-medium text-seo-bright">{category}</span>
      <h3 className="text-xl font-bold text-white mt-2 mb-1">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">Ubicación: {location}</p>
      <div className="h-64 flex items-center justify-center overflow-hidden rounded-lg mb-4">
        <img 
          src={imageUrl} 
          alt={`Caso de éxito SEO local - ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-seo-bright text-sm font-medium mb-2">🛠️ Descripción del trabajo SEO local realizado:</h4>
        <p className="text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CaseStudiesSection;
