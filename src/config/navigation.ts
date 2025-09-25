
export interface ServiceItem {
  title: string;
  path: string;
}

export interface ServiceGroup {
  title: string;
  services: ServiceItem[];
}

export const navigationConfig = {
  seoServices: {
    title: "Servicios SEO con IA",
    services: [
      { title: "SEO Local con tecnología IA", path: "/servicios/seo-local-ia" },
      { title: "SEO Web con IA", path: "/servicios/seo-web-ia" },
      { title: "SEO para Ecommerce con IA", path: "/servicios/seo-ecommerce-ia" },
    ],
  },
  otherServices: {
    title: "Más servicios",
    services: [
      { title: "Creación WEB con React", path: "/servicios/creacion-web-react" },
      { title: "Creación Ecommerce con Shopify", path: "/servicios/creacion-ecommerce-shopify" },
      { title: "Gestión de reseñas con IA", path: "/servicios/gestion-resenas-ia" },
      { title: "Link Building Inteligente", path: "/servicios/link-building-inteligente" },
      { title: "Publicidad SEM con IA", path: "/servicios/publicidad-sem-ia" },
    ],
  },
  seoTools: {
    title: "Herramientas SEO",
    services: [
      { title: "Analizador de Encabezados", path: "/analizador-encabezados-seo" },
      { title: "Auditoría SEO Local", path: "/auditoria-local-seo" },
      { title: "Zonas Exclusivas", path: "/zonas-exclusivas" },
    ],
  },
};
