
import { Helmet } from "react-helmet";

interface PostHeaderProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
}

export function PostHeader({ title, description, keywords, author, canonicalUrl }: PostHeaderProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="language" content="es" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
