
import { FC, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm: FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-seo-card p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Solicita información</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Nombre completo *
          </label>
          <Input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-seo-dark border-seo-blue/30 focus:border-seo-blue"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-seo-dark border-seo-blue/30 focus:border-seo-blue"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Teléfono *
            </label>
            <Input 
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-seo-dark border-seo-blue/30 focus:border-seo-blue"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Empresa
          </label>
          <Input 
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-seo-dark border-seo-blue/30 focus:border-seo-blue"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Mensaje *
          </label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-32 bg-seo-dark border-seo-blue/30 focus:border-seo-blue"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Solicitar consultoría gratuita"}
        </Button>
        
        <p className="text-xs text-gray-400 mt-4">
          Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para poder atender tu solicitud.
        </p>
      </form>
    </div>
  );
};
