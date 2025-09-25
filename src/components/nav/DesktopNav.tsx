
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { ServiceMenu } from "./ServiceMenu";
import { navigationConfig } from "@/config/navigation";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink to="/">Inicio</NavLink>
      <ServiceMenu 
        trigger={navigationConfig.seoServices.title} 
        services={navigationConfig.seoServices.services} 
      />
      <ServiceMenu 
        trigger={navigationConfig.otherServices.title} 
        services={navigationConfig.otherServices.services} 
      />
      <ServiceMenu 
        trigger={navigationConfig.seoTools.title} 
        services={navigationConfig.seoTools.services} 
      />
      <NavLink to="/agenda-consultoria">Agenda consultoría</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      
      <Button asChild className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity ml-4">
        <a href="#contacto">Contactar</a>
      </Button>
      
      <Button asChild variant="outline" className="border-seo-blue/20 text-seo-bright hover:bg-seo-blue/20 ml-2">
        <NavLink to="/login">Acceder</NavLink>
      </Button>
    </nav>
  );
}
