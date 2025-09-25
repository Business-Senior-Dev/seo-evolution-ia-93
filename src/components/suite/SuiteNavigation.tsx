import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3,
  Settings,
  Home,
  Search,
  MousePointer,
  Globe,
  ShoppingCart,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/suite',
    icon: Home,
  },
  {
    title: 'Cuentas',
    href: '/suite/accounts',
    icon: Building2,
  },
  {
    title: 'SEO',
    href: '/suite/seo',
    icon: Search,
  },
  {
    title: 'SEM',
    href: '/suite/sem',
    icon: MousePointer,
  },
  {
    title: 'WEB',
    href: '/suite/web',
    icon: Globe,
  },
  {
    title: 'ECOMMERCE',
    href: '/suite/ecommerce',
    icon: ShoppingCart,
  },
  {
    title: 'FICHA DE GOOGLE',
    href: '/suite/ficha-google',
    icon: MapPin,
  },
  {
    title: 'RANK TO RENT',
    href: '/suite/rank-to-rent',
    icon: TrendingUp,
  },
  {
    title: 'Facturación',
    href: '/suite/billing',
    icon: CreditCard,
  },
  {
    title: 'Equipo',
    href: '/suite/team',
    icon: Users,
  },
  {
    title: 'Analíticas',
    href: '/suite/analytics',
    icon: BarChart3,
  },
  {
    title: 'Configuración',
    href: '/suite/settings',
    icon: Settings,
  },
];

export function SuiteNavigation() {
  const location = useLocation();

  return (
    <nav className="space-y-2">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.href;
        
        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive
                ? 'bg-seo-blue/20 text-seo-bright border-l-2 border-seo-blue'
                : 'text-gray-300 hover:bg-seo-blue/10 hover:text-white'
            )}
          >
            <item.icon size={18} className="mr-3" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}