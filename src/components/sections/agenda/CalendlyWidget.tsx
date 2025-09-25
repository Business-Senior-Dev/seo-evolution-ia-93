
import { FC, useEffect } from 'react';

export const CalendlyWidget: FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-seo-card p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Agenda directamente</h2>
      <div 
        className="calendly-inline-widget rounded-lg overflow-hidden" 
        data-url="https://calendly.com/evolucionaseo" 
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};
