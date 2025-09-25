
import { navigationConfig } from '@/config/navigation';

interface SitemapRoute {
  path: string;
  lastmod?: string;
}

export function generateSitemapXML(): string {
  const baseURL = 'https://evolucionaseo.es';
  const today = new Date().toISOString().split('T')[0];
  
  // Extract all service routes from navigationConfig
  const serviceRoutes: SitemapRoute[] = [];
  
  // Add SEO services
  navigationConfig.seoServices.services.forEach(service => {
    serviceRoutes.push({
      path: service.path,
      lastmod: today
    });
  });
  
  // Add other services
  navigationConfig.otherServices.services.forEach(service => {
    serviceRoutes.push({
      path: service.path,
      lastmod: today
    });
  });
  
  // Add SEO tools
  navigationConfig.seoTools.services.forEach(service => {
    serviceRoutes.push({
      path: service.path,
      lastmod: today
    });
  });

  // Add blog posts
  const blogPosts: SitemapRoute[] = [
    { path: '/blog/futuro-seo-local-2025', lastmod: today },
    { path: '/blog/categorias-fichas-producto-ecommerce', lastmod: today },
    { path: '/blog/seo-inteligente-ia', lastmod: today },
    { path: '/blog/seo-react-claves-optimizacion', lastmod: today },
    { path: '/blog/inteligencia-artificial-negocios', lastmod: today }
  ];

  // Add additional static routes
  const staticRoutes: SitemapRoute[] = [
    { path: '/', lastmod: today },
    { path: '/blog', lastmod: today },
    { path: '/agenda-consultoria', lastmod: today },
    { path: '/analizador-encabezados', lastmod: today },
  ];

  // Combine all routes and remove duplicates
  const allRoutes = [...new Set([...serviceRoutes, ...blogPosts, ...staticRoutes])];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${baseURL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return xmlContent;
}
