
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostQuote } from "@/components/blog/PostQuote";
import { PostList } from "@/components/blog/PostList";

export function ImportanciaSection() {
  return (
    <PostSection id="importancia" title="Importancia de las fichas de producto en ecommerce">
      <p className="text-gray-300 mb-6">
        Las fichas de producto desempeñan un papel crucial en el éxito de cualquier tienda online. Su adecuada optimización puede ser determinante para captar la atención del consumidor y facilitar la decisión de compra.
      </p>

      <PostSection id="que-es" title="¿Qué es una ficha de producto?">
        <p className="text-gray-300 mb-6">
          Una ficha de producto es una página dedicada a un artículo específico dentro de un comercio electrónico. Esta incluye toda la información necesaria que un cliente potencial podría requerir para tomar una decisión de compra informada.
        </p>
      </PostSection>

      <PostSection id="impacto" title="Impacto en la conversión y ventas">
        <PostQuote 
          text="La efectividad de las fichas de producto se traduce directamente en los índices de conversión de una tienda online. Se ha demostrado que una ficha bien elaborada puede inducir al cliente a completar una compra."
          author="Ángel Ruz"
        />
        <PostList
          items={[
            "Mejora de la experiencia del usuario: Una ficha que ofrece información clara y concisa facilita la navegación por el sitio, reduciendo así la tasa de abandono.",
            "Aumento de la confianza del consumidor: Los clientes están más dispuestos a comprar cuando perciben que tienen toda la información necesaria.",
            "Optimización para motores de búsqueda: Una ficha de producto optimizada para SEO no solo atrae tráfico, sino que también aumenta la visibilidad.",
            "Incremento en el valor medio de pedido: Las fichas de producto que incorporan estrategias de cross-selling pueden persuadir a añadir más artículos."
          ]}
        />
      </PostSection>
    </PostSection>
  );
}
