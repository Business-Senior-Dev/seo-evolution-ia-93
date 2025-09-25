
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+34910626684";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[+\s]/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
