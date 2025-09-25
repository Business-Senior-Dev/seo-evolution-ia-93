
interface PostHighlightProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
  className?: string;
}

export function PostHighlight({ children, type = "info", className = "" }: PostHighlightProps) {
  const bgColors = {
    info: "bg-seo-blue/10 border-seo-blue/20",
    warning: "bg-yellow-500/10 border-yellow-500/20",
    tip: "bg-green-500/10 border-green-500/20"
  };

  const textColors = {
    info: "text-seo-bright",
    warning: "text-yellow-400",
    tip: "text-green-400"
  };

  return (
    <div className={`my-6 rounded-lg border p-4 ${bgColors[type]} ${className}`}>
      <div className={`mb-2 font-medium ${textColors[type]}`}>
        {type === "info" && "Información importante"}
        {type === "warning" && "Advertencia"}
        {type === "tip" && "Consejo"}
      </div>
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
}
