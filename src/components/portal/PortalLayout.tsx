import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FolderOpen, 
  FileText, 
  HelpCircle,
  LogOut,
  User
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigationItems = [
  {
    title: 'Inicio',
    href: '/portal',
    icon: Home,
  },
  {
    title: 'Proyectos',
    href: '/portal/projects',
    icon: FolderOpen,
  },
  {
    title: 'Facturas',
    href: '/portal/invoices',
    icon: FileText,
  },
  {
    title: 'Soporte',
    href: '/portal/support',
    icon: HelpCircle,
  },
];

export function PortalLayout() {
  const { profile, signOut } = useAuth();
  const location = useLocation();

  const getUserInitials = () => {
    if (profile?.name) {
      return profile.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return profile?.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <div className="min-h-screen bg-seo-dark">
      {/* Top Bar */}
      <header className="bg-seo-darkBlue border-b border-seo-blue/20 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-seo-blue to-seo-bright rounded-lg"></div>
            <div>
              <h1 className="text-xl font-bold text-white">Evoluciona Suite</h1>
              <p className="text-sm text-gray-400">Portal Cliente</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/portal/invoices">
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Facturas
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-seo-blue text-white">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-white">
                    {profile?.name || 'Usuario'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {profile?.email}
                  </p>
                </div>
                <DropdownMenuItem onClick={signOut} className="text-red-400">
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-seo-darkBlue border-r border-seo-blue/20 min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/portal' && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`
                    flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-seo-blue/20 text-seo-bright border-l-2 border-seo-blue' 
                      : 'text-gray-300 hover:bg-seo-blue/10 hover:text-white'
                    }
                  `}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}