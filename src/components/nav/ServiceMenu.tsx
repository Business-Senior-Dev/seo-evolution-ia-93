
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ServiceItem } from "@/config/navigation";

interface ServiceMenuProps {
  trigger: string;
  services: ServiceItem[];
}

export function ServiceMenu({ trigger, services }: ServiceMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-seo-bright transition-colors duration-200">
            {trigger}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-seo-darkBlue border border-seo-blue/20 p-4 rounded-md min-w-[220px]">
            <ul className="grid gap-3 p-1">
              {services.map((service) => (
                <li key={service.path}>
                  <NavigationMenuLink asChild>
                    <Link 
                      to={service.path} 
                      className="block p-2 hover:bg-seo-blue/10 rounded-md text-gray-300 hover:text-seo-bright transition-colors"
                    >
                      {service.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
