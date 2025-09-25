import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProjectsList } from '@/components/suite/projects/ProjectsList';
import { CreateProjectModal } from '@/components/suite/CreateProjectModal';

export default function Sem() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleProjectCreated = () => {
    setCreateModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/suite" className="text-gray-400 hover:text-white">
              Suite
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-400" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">SEM</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">SEM</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Gestión de campañas SEM y publicidad de pago.
          </p>
        </CardContent>
      </Card>

      <ProjectsList 
        serviceType="SEM" 
        onCreateProject={() => setCreateModalOpen(true)} 
      />

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType="SEM"
        projectTypeLabel="SEM"
        onProjectCreated={handleProjectCreated}
      />
    </div>
  );
}