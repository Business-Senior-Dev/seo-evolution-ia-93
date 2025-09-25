import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ProjectTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  type: string;
  onCreateProject: (type: string, label: string) => void;
}

export function ProjectTypeCard({ icon: Icon, title, description, type, onCreateProject }: ProjectTypeCardProps) {
  return (
    <Card className="bg-seo-darkBlue border-seo-blue/20 hover:border-seo-blue/40 transition-colors group">
      <CardHeader className="text-center pb-3">
        <div className="mx-auto mb-3 p-3 bg-gradient-to-r from-seo-blue/20 to-seo-cyan/20 rounded-full w-fit">
          <Icon size={32} className="text-seo-bright group-hover:text-seo-cyan transition-colors" />
        </div>
        <CardTitle className="text-white text-lg">{title}</CardTitle>
        <CardDescription className="text-gray-400 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          onClick={() => onCreateProject(type, title)}
          className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
        >
          Crear Proyecto
        </Button>
      </CardContent>
    </Card>
  );
}