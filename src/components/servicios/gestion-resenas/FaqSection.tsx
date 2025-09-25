
export function FaqSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
              <span className="text-xs font-medium text-seo-bright">FAQS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Por qué son tan importantes las reseñas para el posicionamiento local?</h3>
              <p className="text-gray-300">
                Las reseñas son uno de los factores de ranking más importantes para Google en búsquedas locales. 
                Afectan directamente a tu visibilidad, ya que Google considera la cantidad, calidad y recencia de tus 
                opiniones para determinar qué negocios mostrar en el mapa y resultados locales.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Cómo conseguir más reseñas positivas sin incomodar a mis clientes?</h3>
              <p className="text-gray-300">
                La clave está en el momento y la forma. Identificamos el mejor momento del customer journey para solicitar 
                la reseña y diseñamos mensajes personalizados que faciliten el proceso al cliente. Utilizamos herramientas 
                como códigos QR, enlaces directos y recordatorios no invasivos que se integran naturalmente en la experiencia.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Responder a las reseñas realmente influye en mi reputación online?</h3>
              <p className="text-gray-300">
                Absolutamente. Responder a las reseñas (tanto positivas como negativas) demuestra compromiso con tus clientes 
                y puede transformar una experiencia negativa en una oportunidad de fidelización. Google también valora 
                positivamente este tipo de interacción para el posicionamiento local.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Qué hago si recibo una reseña negativa?</h3>
              <p className="text-gray-300">
                Las reseñas negativas son una oportunidad. Respondemos de forma profesional, reconociendo el problema, 
                ofreciendo una solución y llevando la conversación fuera del ámbito público cuando sea necesario. Una 
                gestión adecuada puede incluso mejorar tu imagen frente a otros clientes potenciales.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Puedo eliminar reseñas falsas o negativas en Google?</h3>
              <p className="text-gray-300">
                Google permite reportar reseñas que violen sus políticas (contenido ofensivo, spam, competencia desleal), 
                pero no elimina reseñas simplemente por ser negativas. Te asesoramos sobre cómo identificar y reportar 
                reseñas que incumplan las normas y, sobre todo, cómo gestionar adecuadamente las críticas legítimas.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Es ético solicitar reseñas a mis clientes?</h3>
              <p className="text-gray-300">
                Completamente ético y recomendable, siempre que no se ofrezcan incentivos a cambio ni se soliciten 
                específicamente opiniones positivas. Google anima a los negocios a pedir reseñas de forma natural como 
                parte del proceso de atención al cliente.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿En cuánto tiempo se notan resultados en mi posicionamiento local con una buena gestión de reseñas?</h3>
              <p className="text-gray-300">
                Los primeros resultados en visibilidad local suelen apreciarse entre 1-3 meses, dependiendo de la competencia 
                en tu sector y ubicación. La consistencia es clave: una estrategia sostenida mejora progresivamente tu 
                posicionamiento y consolida tu reputación a largo plazo.
              </p>
            </div>
            
            <div className="bg-seo-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">¿Usáis inteligencia artificial en la gestión de reseñas?</h3>
              <p className="text-gray-300">
                Sí, aplicamos IA para analizar el sentimiento de las reseñas, detectar patrones en la opinión de los clientes 
                y generar respuestas personalizadas que luego son revisadas por nuestro equipo. También utilizamos algoritmos 
                para identificar el mejor momento para solicitar reseñas según el comportamiento del cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
