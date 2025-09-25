
interface PostSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function PostSection({ id, title, children }: PostSectionProps) {
  return (
    <section className="mb-14">
      <h2 
        id={id} 
        className="text-2xl font-bold mt-10 mb-6 text-white relative inline-block"
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-seo-blue to-seo-cyan rounded"></span>
      </h2>
      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}
