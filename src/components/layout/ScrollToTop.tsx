
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hace scroll al top suavemente cada vez que cambie la ruta.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
