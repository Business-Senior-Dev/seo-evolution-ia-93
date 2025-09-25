
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostQuote } from "@/components/blog/PostQuote";

export function AreasClaveSection() {
  return (
    <PostSection id="areas-clave" title="Áreas clave para aplicar inteligencia artificial">
      <p className="text-gray-300 mb-6">
        La inteligencia artificial se puede aplicar en diversas áreas dentro de una empresa, permitiendo optimizar procesos, mejorar la atención al cliente y potenciar las ventas. Explorar cada una de estas aplicaciones constituye un paso esencial hacia el aprovechamiento máximo de la IA en el entorno empresarial.
      </p>

      <h3 id="ventas-marketing" className="text-xl font-semibold text-white mt-8 mb-4">
        Ventas y marketing
      </h3>
      <p className="text-gray-300 mb-4">
        El sector de ventas y marketing ha sido uno de los más beneficiados por la implementación de la inteligencia artificial. Esta tecnología permite automatizar procesos y crear estrategias más efectivas, lo que se traduce en un incremento en la conversión de clientes potenciales.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-seo-card p-4 rounded-lg">
          <h4 className="font-semibold text-white mb-2">Automatización de procesos de ventas</h4>
          <p className="text-gray-300">
            La automatización en ventas se manifiesta en la capacidad de los sistemas de IA para gestionar tareas repetitivas. Los chatbots pueden calificar prospectos y gestionar el seguimiento de clientes, liberando al equipo de ventas para que se concentre en interacciones más significativas.
          </p>
        </div>
        <div className="bg-seo-card p-4 rounded-lg">
          <h4 className="font-semibold text-white mb-2">Generación de contenido para redes sociales</h4>
          <p className="text-gray-300">
            La creación de contenido relevante y atractivo es crucial para captar la atención del público. Herramientas de IA pueden generar textos publicitarios, publicaciones para redes y otros materiales de marketing en cuestión de segundos.
          </p>
        </div>
      </div>

      <h3 id="atencion-cliente" className="text-xl font-semibold text-white mt-8 mb-4">
        Atención al cliente
      </h3>
      <p className="text-gray-300 mb-4">
        La atención al cliente ha evolucionado significativamente gracias a la inteligencia artificial. La rapidez en las respuestas y la personalización del servicio son aspectos centrales que mejoran la satisfacción del cliente.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-seo-card p-4 rounded-lg">
          <h4 className="font-semibold text-white mb-2">Chatbots y asistentes virtuales</h4>
          <p className="text-gray-300">
            Los chatbots permiten ofrecer atención al cliente de manera continua. Estos sistemas pueden gestionar interacciones en múltiples canales, respondiendo a preguntas frecuentes y resolviendo problemas sencillos.
          </p>
        </div>
        <div className="bg-seo-card p-4 rounded-lg">
          <h4 className="font-semibold text-white mb-2">Respuestas rápidas y personalizadas</h4>
          <p className="text-gray-300">
            La capacidad de proporcionar respuestas rápidas y personalizadas logra un acercamiento más humano hacia el cliente. Los algoritmos de IA pueden analizar datos históricos para ofrecer soluciones adaptadas a las necesidades específicas de cada usuario.
          </p>
        </div>
      </div>

      <h3 id="recursos-humanos" className="text-xl font-semibold text-white mt-8 mb-4">
        Gestión de recursos humanos
      </h3>
      <p className="text-gray-300 mb-6">
        La gestión del capital humano se beneficia enormemente con el uso de la inteligencia artificial. Desde la selección de personal hasta el análisis del rendimiento, las herramientas de IA hacen que estos procesos sean más precisos y eficientes.
      </p>

      <h3 id="procesos-internos" className="text-xl font-semibold text-white mt-8 mb-4">
        Optimización de procesos internos
      </h3>
      <p className="text-gray-300 mb-6">
        Optimizar la operativa interna de una empresa a través de la inteligencia artificial permite reducir costos y mejorar la eficiencia. La IA puede analizar flujos de trabajo, detectar cuellos de botella y sugerir mejoras, lo que contribuye a la agilidad y eficacia en la ejecución de tareas. Implementar sistemas de IA que analicen datos en tiempo real ofrece una visión clara del rendimiento empresarial, facilitando la toma de decisiones estratégicas.
      </p>
      <PostQuote 
        text="Las empresas que implementan soluciones de IA para optimizar procesos internos reportan una reducción de costes de hasta un 30% y un incremento en la productividad del 40% en los primeros 12 meses."
      />
    </PostSection>
  );
}
