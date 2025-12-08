import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles, Bot } from "lucide-react";

const SafinhoAI = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // TODO: Integrar com Lovable AI após ativar Cloud
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage("");
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
              <Sparkles className="w-4 h-4" />
              Novidade SAFE
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Conheça o <span className="text-accent">Safinho</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso assistente virtual de educação financeira! Tire suas dúvidas sobre finanças pessoais, investimentos e muito mais.
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-6 flex items-center gap-4">
              {/* Mascote Safinho - Moeda animada */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center shadow-lg border-4 border-yellow-300 relative animate-pulse">
                <span className="text-amber-900 font-bold text-xl">$</span>
                {/* Olhinhos da moeda */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-amber-900 rounded-full"></div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-amber-900 rounded-full"></div>
                {/* Sorriso */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-amber-900 rounded-b-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Safinho</h3>
                <p className="text-sm text-primary-foreground/80">Sua moeda amiga das finanças • Online</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm">Ativo</span>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="p-6 min-h-[300px] bg-gradient-to-b from-muted/20 to-transparent">
              {/* Welcome Message */}
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center shrink-0 border-2 border-yellow-300 relative">
                  <span className="text-amber-900 font-bold text-sm">$</span>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-amber-900 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-amber-900 rounded-full"></div>
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-tl-md p-4 max-w-[80%] shadow-sm">
                  <p className="text-foreground">
                    Olá! Eu sou o <strong>Safinho</strong>, o mascote da SAFE Educação Financeira! 🎉
                  </p>
                  <p className="text-foreground mt-2">
                    Estou aqui para ajudar você com dúvidas sobre:
                  </p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>💰 Economia e orçamento pessoal</li>
                    <li>📈 Investimentos para iniciantes</li>
                    <li>🎯 Metas financeiras</li>
                    <li>💡 Dicas de educação financeira</li>
                  </ul>
                  <p className="text-foreground mt-3">
                    Como posso te ajudar hoje?
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Digite sua pergunta sobre finanças..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 rounded-full px-5 py-6 bg-muted/50 border-border focus:border-accent"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !message.trim()}
                  className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 text-white"
                >
                  {isLoading ? (
                    <Bot className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Em breve o Safinho estará disponível para responder suas perguntas em tempo real! 🚀
              </p>
            </form>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "🎓", title: "Educação Acessível", desc: "Respostas simples para todas as idades" },
              { icon: "⚡", title: "Respostas Rápidas", desc: "Tire suas dúvidas instantaneamente" },
              { icon: "🔒", title: "100% Gratuito", desc: "Converse sem custos adicionais" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-heading font-bold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafinhoAI;
