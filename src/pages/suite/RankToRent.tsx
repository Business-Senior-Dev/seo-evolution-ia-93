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

export default function RankToRent() {
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
            <BreadcrumbPage className="text-white">Rank-to-Rent</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Rank-to-Rent</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Gestión de proyectos Rank-to-Rent y posicionamiento local.
          </p>
        </CardContent>
      </Card>

      <ProjectsList 
        serviceType="RANK_TO_RENT" 
        onCreateProject={() => setCreateModalOpen(true)} 
      />

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType="RANK_TO_RENT"
        projectTypeLabel="RANK TO RENT"
        onProjectCreated={handleProjectCreated}
      />
    </div>
  );
}