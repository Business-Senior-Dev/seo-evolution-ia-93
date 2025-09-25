
import { cn } from "@/lib/utils";
import { MobileMenuItems } from "./MobileMenuItems";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export function MobileNav({ isOpen, onLinkClick }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 md:hidden transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="absolute inset-0 bg-seo-dark/95" />
      <nav className="relative h-[calc(100vh-4rem)] w-full overflow-y-auto bg-seo-darkBlue p-6">
        <MobileMenuItems onLinkClick={onLinkClick} />
      </nav>
    </div>
  );
}
