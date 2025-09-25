
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PostList } from "@/components/blog/PostList";

interface HeadingData {
  level: number;
  text: string;
}

interface AnalysisResultsProps {
  results: {
    score: number;
    totalHeadings: number;
    h1Count: number;
    hierarchyIssues: number;
    skipLevelIssues: number;
    feedback: string[];
    assessment: string;
    headings: HeadingData[];
  };
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  // Calculate score color based on the score
  const getScoreColor = () => {
    if (results.score >= 90) return "text-green-500";
    if (results.score >= 70) return "text-yellow-500";
    if (results.score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  // Get score ring color
  const getScoreRingColor = () => {
    if (results.score >= 90) return "from-green-500 to-green-400";
    if (results.score >= 70) return "from-yellow-500 to-yellow-400";
    if (results.score >= 50) return "from-orange-500 to-orange-400";
    return "from-red-500 to-red-400";
  };

  return (
    <div className="mt-10 animate-fade-in">
      <Card className="bg-seo-card border-seo-blue/30 overflow-hidden">
        <CardHeader className="bg-seo-darkBlue border-b border-seo-blue/20 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Resultados del análisis</h2>
              <p className="text-gray-300">
                {results.assessment}
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Score ring */}
                <div 
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${getScoreRingColor()} opacity-20`}
                ></div>
                <div className="absolute inset-2 rounded-full bg-seo-darkBlue"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className={`text-4xl font-bold ${getScoreColor()}`}>
                    {results.score}
                  </span>
                  <span className="text-gray-400 text-sm">/ 100</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Estadísticas</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Total encabezados:</span>
                  <span className="font-medium text-white">{results.totalHeadings}</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Encabezados H1:</span>
                  <span className={`font-medium ${results.h1Count === 1 ? 'text-green-500' : 'text-red-500'}`}>
                    {results.h1Count}
                  </span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Problemas de jerarquía:</span>
                  <span className={`font-medium ${results.hierarchyIssues === 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {results.hierarchyIssues}
                  </span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Saltos de nivel:</span>
                  <span className={`font-medium ${results.skipLevelIssues === 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {results.skipLevelIssues}
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Feedback</h3>
              <PostList items={results.feedback} />
            </div>
          </div>

          {/* Headings structure */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Estructura de encabezados encontrada</h3>
            <div className="bg-seo-darkBlue rounded-lg p-4 overflow-x-auto">
              <div className="min-w-full">
                {results.headings.map((heading, index) => (
                  <div 
                    key={index}
                    className="flex items-start py-2 border-b border-gray-700 last:border-0"
                    style={{ paddingLeft: `${(heading.level - 1) * 20}px` }}
                  >
                    <span className="inline-block px-2 py-1 bg-seo-blue/20 text-seo-bright rounded text-xs font-medium mr-3">
                      H{heading.level}
                    </span>
                    <span className="text-gray-300 truncate">
                      {heading.text || "<Encabezado vacío>"}
                    </span>
                  </div>
                ))}
                {results.headings.length === 0 && (
                  <p className="text-gray-400 italic">No se encontraron encabezados en esta página.</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
              <a href="/agenda-consultoria">
                🚀 Quiero que un experto revise mi sitio
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
