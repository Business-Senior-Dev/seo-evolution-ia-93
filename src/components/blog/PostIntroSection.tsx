
interface PostIntroSectionProps {
  category: string;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

export function PostIntroSection({ 
  category,
  title,
  date,
  author,
  imageUrl,
  imageAlt,
  description
}: PostIntroSectionProps) {
  return (
    <>
      <div className="mb-8">
        <span className="px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 text-xs font-medium text-seo-bright">
          {category}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
          {title}
        </h1>
        <div className="flex items-center text-gray-400 text-sm mb-8">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>Por {author}</span>
        </div>
      </div>

      <div className="mb-10">
        <img 
          src={imageUrl} 
          alt={imageAlt || `Imagen destacada del artículo: ${title}`} 
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      <p className="prose prose-lg prose-invert max-w-none mb-8">
        {description}
      </p>
    </>
  );
}
