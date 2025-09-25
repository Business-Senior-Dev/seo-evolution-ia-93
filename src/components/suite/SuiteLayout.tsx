import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Settings, 
  Plug,
  Menu,
  X,
  LogOut,
  Search,
  MousePointer,
  Globe,
  ShoppingCart,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { SuiteNavLink } from './SuiteNavLink';

const navigation = [
  { name: 'Dashboard', href: '/suite', icon: LayoutDashboard },
  { name: 'Cuentas', href: '/suite/accounts', icon: Users },
  { name: 'SEO', href: '/suite/seo', icon: Search },
  { name: 'SEM', href: '/suite/sem', icon: MousePointer },
  { name: 'WEB', href: '/suite/web', icon: Globe },
  { name: 'ECOMMERCE', href: '/suite/ecommerce', icon: ShoppingCart },
  { name: 'FICHA DE GOOGLE', href: '/suite/ficha-google', icon: MapPin },
  { name: 'RANK TO RENT', href: '/suite/rank-to-rent', icon: TrendingUp },
  { name: 'Facturación', href: '/suite/facturacion', icon: CreditCard },
  { name: 'Integraciones', href: '/suite/integraciones', icon: Plug },
  { name: 'Ajustes', href: '/suite/ajustes', icon: Settings },
];

export function SuiteLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile, signOut } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-seo-dark flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-seo-darkBlue border-r border-seo-blue/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-seo-blue/20">
            <div className="flex items-center space-x-2">
              <img 
                src="https://agnyfrhzafvfsrbwdfpi.supabase.co/storage/v1/object/public/imagenes-evoluciona//evolucionaseo.png"
                alt="Evoluciona Suite"
                className="h-8 w-auto"
              />
              <span className="text-white font-semibold">Suite</span>
            </div>
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <SuiteNavLink
                key={item.name}
                to={item.href}
                icon={item.icon}
                isActive={location.pathname === item.href}
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </SuiteNavLink>
            ))}
          </nav>

          {/* User info and logout */}
          <div className="px-4 py-4 border-t border-seo-blue/20">
            <div className="text-sm text-gray-400 mb-2">
              {profile?.name || profile?.email}
            </div>
            <div className="text-xs text-gray-500 mb-3 capitalize">
              {profile?.role}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="w-full text-gray-300 border-seo-blue/20 hover:bg-seo-blue/20"
            >
              <LogOut size={16} className="mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-0">
        {/* Top bar */}
        <header className="bg-seo-darkBlue border-b border-seo-blue/20 px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between">
            <button
              className="lg:hidden text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-white text-lg font-semibold lg:block hidden">
              Evoluciona Suite
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm hidden md:block">
                Bienvenido, {profile?.name || profile?.email}
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}