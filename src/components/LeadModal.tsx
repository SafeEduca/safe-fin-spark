import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { X } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName: string;
}

const LeadModal = ({ isOpen, onClose, programName }: LeadModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    // Validate input lengths
    if (formData.name.length > 100 || formData.email.length > 255 || formData.phone.length > 20) {
      toast.error("Por favor, verifique os dados informados.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using mailto link as fallback (opens email client)
      const subject = encodeURIComponent(`Interesse em ${programName} - ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Programa: ${programName}\n` +
        `Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}`
      );
      
      // Open mailto link
      window.location.href = `mailto:contato@safeeduca.com.br?subject=${subject}&body=${body}`;
      
      toast.success("Redirecionando para seu cliente de e-mail. Envie a mensagem para concluir!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (error) {
      toast.error("Erro ao processar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-foreground">
            Interesse em {programName}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nome Completo *
            </Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-mail *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Telefone *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              maxLength={20}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mensagem (opcional)
            </Label>
            <Textarea
              id="message"
              placeholder="Conte-nos um pouco sobre seu interesse..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              maxLength={500}
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" variant="hero" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Enviando..." : "Enviar Interesse"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
