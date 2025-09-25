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

export default function Seo() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleProjectCreated = () => {
    setCreateModalOpen(false);
    // The ProjectsList component will automatically refresh
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
            <BreadcrumbPage className="text-white">SEO</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">SEO</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Gestión de proyectos SEO y posicionamiento orgánico.
          </p>
        </CardContent>
      </Card>

      <ProjectsList 
        serviceType="SEO" 
        onCreateProject={() => setCreateModalOpen(true)} 
      />

      <CreateProjectModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        projectType="SEO"
        projectTypeLabel="SEO"
        onProjectCreated={handleProjectCreated}
      />
    </div>
  );
}