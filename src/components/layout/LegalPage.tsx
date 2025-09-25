
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LegalPageProps = {
  children: React.ReactNode;
  title: React.ReactNode; // Changed from string to ReactNode to accept JSX elements
}

export function LegalPage({ children, title }: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-seo-dark text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h1>
            <div className="bg-seo-card rounded-lg p-6 md:p-8 text-gray-300">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
