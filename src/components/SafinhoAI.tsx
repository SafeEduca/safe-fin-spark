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
            <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground p-6 flex items-center gap-4">
              {/* Mascote Safinho - Personagem amigável */}
              <div className="relative group">
                <div className="w-20 h-20 relative">
                  {/* Corpo do mascote - formato de cofre/porquinho estilizado */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-amber-400 to-orange-500 rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    {/* Brilho */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full blur-sm"></div>
                  </div>
                  {/* Rosto */}
                  <div className="absolute inset-1 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-xl flex flex-col items-center justify-center">
                    {/* Olhos */}
                    <div className="flex gap-3 mb-1">
                      <div className="w-3 h-4 bg-amber-900 rounded-full relative">
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <div className="w-3 h-4 bg-amber-900 rounded-full relative">
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* Sorriso */}
                    <div className="w-6 h-3 border-b-[3px] border-amber-900 rounded-b-full"></div>
                    {/* Bochechas */}
                    <div className="absolute bottom-3 left-2 w-2 h-1.5 bg-orange-400/60 rounded-full"></div>
                    <div className="absolute bottom-3 right-2 w-2 h-1.5 bg-orange-400/60 rounded-full"></div>
                  </div>
                  {/* Símbolo $ no topo */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white font-bold text-xs">$</span>
                  </div>
                  {/* Orelhinhas */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Safinho</h3>
                <p className="text-sm text-primary-foreground/80">Seu amigo da educação financeira • Online</p>
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
                {/* Mini mascote no chat */}
                <div className="w-12 h-12 shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-xl flex flex-col items-center justify-center shadow-md">
                    <div className="flex gap-1.5 mb-0.5">
                      <div className="w-2 h-2.5 bg-amber-900 rounded-full relative">
                        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="w-2 h-2.5 bg-amber-900 rounded-full relative">
                        <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-4 h-2 border-b-2 border-amber-900 rounded-b-full"></div>
                  </div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center border border-white">
                    <span className="text-white font-bold text-[8px]">$</span>
                  </div>
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
