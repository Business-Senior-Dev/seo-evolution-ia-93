
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export type TableOfContentsItem = {
  id: string;
  title: string;
  subItems?: TableOfContentsItem[];
};

export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    // Observe all section headers
    const headers = document.querySelectorAll("h2[id], h3[id]");
    headers.forEach((header) => observer.observe(header));

    return () => {
      headers.forEach((header) => observer.unobserve(header));
    };
  }, []);

  return (
    <div className="sticky top-24 bg-seo-card rounded-xl p-6 mb-8 border border-seo-blue/20 shadow-lg shadow-blue-900/10 max-h-[calc(100vh-120px)] hidden md:block">
      <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
        Índice
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-seo-blue to-seo-cyan rounded"></span>
      </h2>
      <ScrollArea className="pr-4 max-h-[calc(100vh-220px)]">
        <nav>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center group text-gray-300 hover:text-seo-bright transition-colors duration-200 ${
                    activeId === item.id ? "text-seo-bright font-medium" : ""
                  }`}
                >
                  <ChevronRight 
                    size={16} 
                    className={`mr-1.5 transition-transform duration-200 group-hover:translate-x-1 ${
                      activeId === item.id ? "text-seo-bright" : "text-gray-500"
                    }`} 
                  />
                  <span className="border-b border-transparent group-hover:border-seo-blue/30">{item.title}</span>
                </a>
                {item.subItems && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <a
                          href={`#${subItem.id}`}
                          className={`flex items-center group text-gray-400 hover:text-seo-bright transition-colors duration-200 text-sm ${
                            activeId === subItem.id ? "text-seo-bright font-medium" : ""
                          }`}
                        >
                          <ChevronRight 
                            size={14} 
                            className={`mr-1.5 transition-transform duration-200 group-hover:translate-x-1 ${
                              activeId === subItem.id ? "text-seo-bright" : "text-gray-500"
                            }`} 
                          />
                          <span className="border-b border-transparent group-hover:border-seo-blue/30">{subItem.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
