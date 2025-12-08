import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5546933005265";
  const message = "Olá! Gostaria de saber mais sobre os cursos da SAFE Educação Financeira.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Fale conosco
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
    </a>
  );
};

export default WhatsAppButton;
