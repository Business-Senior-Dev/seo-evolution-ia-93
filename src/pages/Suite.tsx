import { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Globe, 
  MapPin, 
  Home,
  Megaphone
} from 'lucide-react';
import { QuickActionsBanner } from '@/components/suite/QuickActionsBanner';
import { ProjectTypeCard } from '@/components/suite/ProjectTypeCard';
import { CreateProjectModal } from '@/components/suite/CreateProjectModal';
import { FinancialDashboard } from '@/components/suite/FinancialDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const projectTypes = [
  {
    type: 'SEO',
    title: 'SEO',
    description: 'Optimización para motores de búsqueda',
    icon: Search,
  },
  {
    type: 'SEM',
    title: 'SEM',
    description: 'Marketing en motores de búsqueda',
    icon: Megaphone,
  },
  {
    type: 'WEB',
    title: 'Desarrollo Web',
    description: 'Creación y desarrollo de sitios web',
    icon: Globe,
  },
  {
    type: 'ECOMMERCE',
    title: 'E-commerce',
    description: 'Tiendas online y comercio electrónico',
    icon: ShoppingCart,
  },
  {
    type: 'FICHA_GOOGLE',
    title: 'Ficha de Google',
    description: 'Optimización de Google Business Profile',
    icon: MapPin,
  },
  {
    type: 'RANK_TO_RENT',
    title: 'Rank to Rent',
    description: 'Sitios web para alquilar posicionamiento',
    icon: Home,
  },
];

export default function Suite() {
  const { profile } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedTypeLabel, setSelectedTypeLabel] = useState('');

  const handleCreateProject = (type: string, label: string) => {
    setSelectedType(type);
    setSelectedTypeLabel(label);
    setModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <QuickActionsBanner />
      
      {/* Financial Dashboard */}
      <FinancialDashboard />
      
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tipos de Proyecto</h1>
        <p className="text-gray-400">
          Selecciona el tipo de proyecto que deseas crear.
        </p>
      </div>

      {/* Project Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectTypes.map((projectType) => (
          <ProjectTypeCard
            key={projectType.type}
            icon={projectType.icon}
            title={projectType.title}
            description={projectType.description}
            type={projectType.type}
            onCreateProject={handleCreateProject}
          />
        ))}
      </div>


      <CreateProjectModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        projectType={selectedType}
        projectTypeLabel={selectedTypeLabel}
      />
    </div>
  );
}