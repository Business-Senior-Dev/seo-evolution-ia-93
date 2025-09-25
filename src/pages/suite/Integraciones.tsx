import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Integraciones() {
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
            <BreadcrumbPage className="text-white">Integraciones</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Integraciones</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Configura las integraciones con herramientas externas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}