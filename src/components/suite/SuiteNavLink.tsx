import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuiteNavLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function SuiteNavLink({ to, icon: Icon, children, isActive, onClick }: SuiteNavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
        isActive
          ? 'bg-seo-blue/20 text-seo-bright border-l-2 border-seo-blue'
          : 'text-gray-300 hover:bg-seo-blue/10 hover:text-white'
      )}
    >
      <Icon size={18} className="mr-3" />
      {children}
    </Link>
  );
}