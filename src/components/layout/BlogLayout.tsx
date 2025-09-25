
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type BlogLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function BlogLayout({ children, className = "" }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-seo-dark text-white">
      <Navbar />
      <main className={`flex-grow pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
