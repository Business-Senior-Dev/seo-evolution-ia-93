
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { navigationConfig } from "@/config/navigation";
import { Link } from "react-router-dom";

interface MobileMenuItemsProps {
  onLinkClick: () => void;
}

export function MobileMenuItems({ onLinkClick }: MobileMenuItemsProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryKey) 
        ? prev.filter(key => key !== categoryKey) 
        : [...prev, categoryKey]
    );
  };

  const isCategoryExpanded = (categoryKey: string) => {
    return expandedCategories.includes(categoryKey);
  };

  return (
    <div className="container mx-auto flex flex-col space-y-4 pb-20">
      <NavLink 
        to="/" 
        onClick={onLinkClick}
        className="text-white font-semibold text-lg py-3"
      >
        Inicio
      </NavLink>
      
      {Object.entries(navigationConfig).map(([categoryKey, group]) => (
        <div key={categoryKey} className="py-3 px-2 bg-seo-dark/50 rounded-md">
          <button 
            onClick={() => toggleCategory(categoryKey)}
            className="w-full text-white mb-3 font-medium flex items-between justify-between text-lg py-2"
            aria-expanded={isCategoryExpanded(categoryKey)}
          >
            <span>{group.title}</span>
            {isCategoryExpanded(categoryKey) ? 
              <ChevronUp size={16} className="ml-2" /> : 
              <ChevronDown size={16} className="ml-2" />
            }
          </button>
          
          <div 
            className={`pl-4 flex flex-col space-y-3 border-l border-seo-blue/40 overflow-hidden transition-all duration-300 ${
              isCategoryExpanded(categoryKey) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {group.services.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                onClick={onLinkClick}
                className="text-white hover:text-seo-bright py-2 transition-colors"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
      
      <NavLink 
        to="/agenda-consultoria" 
        onClick={onLinkClick} 
        className="text-white font-semibold text-lg py-3"
      >
        Agenda consultoría
      </NavLink>
      
      <NavLink 
        to="/blog" 
        onClick={onLinkClick} 
        className="text-white font-semibold text-lg py-3"
      >
        Blog
      </NavLink>
      
      <Button 
        className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity mt-4 w-full text-white py-6 text-lg"
        onClick={onLinkClick}
      >
        <Link to="/#contacto">Contactar</Link>
      </Button>
    </div>
  );
}
