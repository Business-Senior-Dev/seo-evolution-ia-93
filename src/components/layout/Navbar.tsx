
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { DesktopNav } from "../nav/DesktopNav";
import { MobileNav } from "../nav/MobileNav";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-seo-dark/80 backdrop-blur-md border-b border-seo-blue/20">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img 
              src="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//evolucionaseo.png" 
              alt="Logo de EvolucionaSEO - Agencia SEO con IA" 
              className="h-[80px] w-auto"
            />
          </Link>
        </div>

        <DesktopNav />

        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileNav isOpen={isMenuOpen} onLinkClick={closeMenu} />
    </header>
  );
}
