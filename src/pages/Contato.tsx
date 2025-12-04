import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os programas da SAFE.");
    window.open(`https://wa.me/5546933005265?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-28 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
              <ArrowLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Voltar para Home
            </Link>
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
                Fale <span className="text-accent">Conosco</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                Estamos prontos para ajudar você a transformar sua vida financeira!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-12 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  icon: Phone, 
                  title: "WhatsApp", 
                  value: "(46) 93300-5265",
                  action: handleWhatsApp,
                  color: "from-green-500 to-green-600"
                },
                { 
                  icon: Mail, 
                  title: "E-mail", 
                  value: "contato@safeeduca.com.br",
                  href: "mailto:contato@safeeduca.com.br",
                  color: "from-blue-500 to-blue-600"
                },
                { 
                  icon: MapPin, 
                  title: "Endereço", 
                  value: "Parque Tecnológico, Pato Branco - PR",
                  color: "from-red-500 to-red-600"
                },
                { 
                  icon: Clock, 
                  title: "Horário", 
                  value: "Seg - Sex: 8h às 18h",
                  color: "from-purple-500 to-purple-600"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div 
                    className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/50 ${item.action || item.href ? 'cursor-pointer' : ''}`}
                    onClick={item.action}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                );
                
                return item.href ? (
                  <a key={index} href={item.href}>{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-border/50">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Envie sua mensagem
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome completo *
                      </label>
                      <Input
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        required
                        placeholder="Como podemos ajudar?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      required
                      placeholder="Escreva sua mensagem aqui..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map and WhatsApp */}
              <div className="space-y-6 sm:space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/50">
                  <div className="p-4 sm:p-6 border-b border-border">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      Nossa localização
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                      Rua Lidio Oltramari 1628, Sala 19 - Parque Tecnológico de Pato Branco
                    </p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.873437687949!2d-52.66888892402867!3d-26.230099963825954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e5339e5e3c6c8f%3A0x8f7c8c9c8c9c8c9c!2sParque%20Tecnol%C3%B3gico%20de%20Pato%20Branco!5e0!3m2!1spt-BR!2sbr!4v1699000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização SAFE"
                    className="sm:h-[300px]"
                  />
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2">
                        Prefere WhatsApp?
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 mb-4">
                        Fale diretamente com nossa equipe e tire suas dúvidas em tempo real!
                      </p>
                      <Button 
                        onClick={handleWhatsApp}
                        className="bg-white text-green-600 hover:bg-white/90 font-bold w-full sm:w-auto"
                      >
                        Iniciar conversa
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;