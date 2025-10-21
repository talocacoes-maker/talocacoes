import { MessageCircle } from "lucide-react";
import { COMPANY } from "@shared/const";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para caçambas ou andaimes.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Abrir WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

