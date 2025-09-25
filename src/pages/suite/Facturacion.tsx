import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Facturacion() {
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
            <BreadcrumbPage className="text-white">Facturación</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-seo-dark border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Gestión de Facturación</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Aquí podrás gestionar la facturación y pagos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}