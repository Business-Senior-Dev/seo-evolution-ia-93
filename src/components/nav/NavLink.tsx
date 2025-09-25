
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ to, children, onClick, className = "" }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`text-gray-300 hover:text-seo-bright transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
