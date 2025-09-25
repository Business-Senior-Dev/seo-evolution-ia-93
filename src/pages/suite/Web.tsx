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

export default function Web() {
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
            <BreadcrumbPage className="text-white">WEB</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">WEB</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Gestión de proyectos de desarrollo web.
          </p>
        </CardContent>
      </Card>

      <ProjectsList 
        serviceType="WEB" 
        onCreateProject={() => setCreateModalOpen(true)} 
      />

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType="WEB"
        projectTypeLabel="WEB"
        onProjectCreated={handleProjectCreated}
      />
    </div>
  );
}