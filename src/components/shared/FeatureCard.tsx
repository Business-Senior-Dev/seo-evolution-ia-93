
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-seo-card border-seo-blue/20">
      <CardContent className="p-6">
        <Icon className="w-12 h-12 text-seo-bright mb-4" />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};
