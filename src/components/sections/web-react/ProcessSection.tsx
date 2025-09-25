
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Code2, CheckCircle, Rocket } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-seo-darkBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Nuestro proceso de <span className="text-gradient">desarrollo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <FileSearch className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">1. Análisis</h3>
              <p className="text-gray-300">
                Estudiamos tus necesidades y objetivos para diseñar la mejor 
                solución técnica.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Code2 className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">2. Desarrollo</h3>
              <p className="text-gray-300">
                Implementamos tu proyecto utilizando las últimas tecnologías 
                y mejores prácticas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <CheckCircle className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">3. Testing</h3>
              <p className="text-gray-300">
                Realizamos pruebas exhaustivas para garantizar la calidad y 
                funcionamiento.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-seo-card border-seo-blue/20">
            <CardContent className="p-6">
              <Rocket className="w-12 h-12 text-seo-bright mb-4" />
              <h3 className="text-xl font-semibold mb-4">4. Lanzamiento</h3>
              <p className="text-gray-300">
                Desplegamos tu web y te acompañamos en todo el proceso post-lanzamiento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
