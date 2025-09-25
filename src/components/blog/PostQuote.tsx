
import { Quote } from "lucide-react";

interface PostQuoteProps {
  text: string;
  author?: string;
  className?: string;
}

export function PostQuote({ text, author, className = "" }: PostQuoteProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative">
        <Quote className="absolute -left-4 -top-4 h-8 w-8 text-seo-blue/20" />
        <blockquote className="border-l-4 border-seo-blue/20 pl-6 italic text-gray-300">
          {text}
        </blockquote>
      </div>
      {author && (
        <figcaption className="mt-2 text-right text-sm text-gray-400">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}
