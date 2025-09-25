
import { Card, CardContent } from "@/components/ui/card";
import { 
  Blocks, // Para React
  Code, // Para Next.js
  FileCode2, // Para TypeScript
  Database, // Para Redux
  Wind, // Para Tailwind CSS
  Network, // Para GraphQL
  TestTube2, // Para Jest
  Package2, // Para Webpack
  Server, // Para MongoDB
  Terminal, // Para Node.js
  Cloud, // Para AWS
  Globe, // Para Vercel
} from "lucide-react";

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="py-16 bg-seo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Tecnologías</span> de vanguardia para tu proyecto
          </h2>
          <p className="text-gray-300 text-lg">
            Utilizamos el stack tecnológico más avanzado combinado con IA para desarrollar páginas web 
            React que superan a la competencia en velocidad, diseño y posicionamiento SEO.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <Card key={tech.name} className="bg-seo-card border-seo-blue/20 hover-scale transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <div className="bg-seo-blue/10 rounded-full p-4 mb-3">
                  {tech.icon}
                </div>
                <h3 className="font-medium text-white">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">¿Por qué elegimos estas tecnologías?</h3>
          <p className="text-gray-300 mb-6">
            Este conjunto de herramientas nos permite crear páginas web ultrarrápidas, con diseño 
            personalizado perfecto y SEO dominante. La combinación con IA hace que nuestras webs 
            sean años superiores a la competencia en rendimiento y conversión.
          </p>
          <p className="text-gray-300">
            Todas las tecnologías que utilizamos están optimizadas con inteligencia artificial 
            para crear páginas web que no solo cargan más rápido, sino que convierten mejor y 
            posicionan #1 en Google de manera consistente.
          </p>
        </div>
      </div>
    </section>
  );
};

// Datos de las tecnologías
const technologies = [
  {
    name: "React",
    icon: <Blocks size={36} className="text-blue-400" strokeWidth={1.5} />,
  },
  {
    name: "Next.js",
    icon: <Code size={36} className="text-white" strokeWidth={1.5} />,
  },
  {
    name: "TypeScript",
    icon: <FileCode2 size={36} className="text-blue-500" strokeWidth={1.5} />,
  },
  {
    name: "Redux",
    icon: <Database size={36} className="text-purple-400" strokeWidth={1.5} />,
  },
  {
    name: "Tailwind CSS",
    icon: <Wind size={36} className="text-cyan-400" strokeWidth={1.5} />,
  },
  {
    name: "GraphQL",
    icon: <Network size={36} className="text-pink-400" strokeWidth={1.5} />,
  },
  {
    name: "Jest",
    icon: <TestTube2 size={36} className="text-red-400" strokeWidth={1.5} />,
  },
  {
    name: "Webpack",
    icon: <Package2 size={36} className="text-blue-300" strokeWidth={1.5} />,
  },
  {
    name: "MongoDB",
    icon: <Server size={36} className="text-green-400" strokeWidth={1.5} />,
  },
  {
    name: "Node.js",
    icon: <Terminal size={36} className="text-green-500" strokeWidth={1.5} />,
  },
  {
    name: "AWS",
    icon: <Cloud size={36} className="text-orange-300" strokeWidth={1.5} />,
  },
  {
    name: "Vercel",
    icon: <Globe size={36} className="text-white" strokeWidth={1.5} />,
  },
];
