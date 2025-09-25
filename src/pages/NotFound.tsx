
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada | 404 | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Lo sentimos, la página que buscas no existe. Vuelve a la página de inicio para encontrar lo que necesitas."
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Página no encontrada</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
