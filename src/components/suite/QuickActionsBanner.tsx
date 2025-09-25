import { Link } from 'react-router-dom';
import { Plus, Users, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function QuickActionsBanner() {
  return (
    <div className="bg-seo-darkBlue/50 border-b border-seo-blue/20 px-4 py-3 mb-6">
      <div className="flex items-center justify-center space-x-6">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-seo-bright hover:bg-seo-blue/20 transition-colors"
        >
          <Link to="/suite/accounts/new" className="flex items-center space-x-2">
            <Plus size={16} />
            <span>Nueva Cuenta</span>
          </Link>
        </Button>
        
        <div className="h-4 w-px bg-seo-blue/30" />
        
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-seo-bright hover:bg-seo-blue/20 transition-colors"
        >
          <Link to="/suite/projects/new" className="flex items-center space-x-2">
            <Plus size={16} />
            <span>Nuevo Proyecto</span>
          </Link>
        </Button>
        
        <div className="h-4 w-px bg-seo-blue/30" />
        
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-seo-bright hover:bg-seo-blue/20 transition-colors"
        >
          <Link to="/suite/facturacion" className="flex items-center space-x-2">
            <CreditCard size={16} />
            <span>Facturación</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}