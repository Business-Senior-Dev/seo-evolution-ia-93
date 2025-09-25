
import React from 'react';

interface PostListProps {
  items: string[];
  type?: "ordered" | "unordered";
  className?: string;
}

export function PostList({ items, type = "unordered", className = "" }: PostListProps) {
  if (type === "ordered") {
    return (
      <ol className={`list-decimal pl-6 mb-4 space-y-2 ${className}`}>
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className={`list-disc pl-6 mb-4 space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">{item}</li>
      ))}
    </ul>
  );
}
