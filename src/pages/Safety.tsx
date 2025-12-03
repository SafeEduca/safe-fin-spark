import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Gamepad2, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const Safety = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-gold overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-accent-foreground/80 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Em Desenvolvimento
                </div>
                
                <div className="text-6xl mb-6">🚀</div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground mb-6 leading-tight">
                  SAFETY
                </h1>
                
                <p className="text-xl md:text-2xl text-accent-foreground/90 mb-8 leading-relaxed">
                  O futuro da educação financeira: Plataforma digital interativa e gamificada
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" onClick={() => setIsModalOpen(true)}>
                    Quero ser o primeiro a saber
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              O que está <span className="text-accent">por vir</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Gamepad2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Aprendizado Gamificado</h3>
                <p className="text-muted-foreground">
                  Aprenda educação financeira através de jogos interativos, desafios e missões que tornam o aprendizado divertido e eficaz.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Simuladores Reais</h3>
                <p className="text-muted-foreground">
                  Pratique investimentos, gestão de orçamento e tomada de decisões financeiras em um ambiente seguro e realista.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Comunidade Ativa</h3>
                <p className="text-muted-foreground">
                  Conecte-se com outros estudantes, compartilhe conquistas e aprenda em comunidade com rankings e desafios colaborativos.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">IA Personalizada</h3>
                <p className="text-muted-foreground">
                  Assistente virtual inteligente que adapta o conteúdo ao seu nível e oferece recomendações personalizadas de aprendizado.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Multiplataforma</h3>
                <p className="text-muted-foreground">
                  Acesse de qualquer lugar: web, aplicativo móvel e tablet. Seu progresso sincronizado em todos os dispositivos.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">Conquistas e Badges</h3>
                <p className="text-muted-foreground">
                  Sistema de recompensas com badges, troféus e certificados digitais para celebrar cada conquista no aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Seja um dos <span className="text-accent">primeiros</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cadastre-se agora e receba acesso antecipado assim que o SAFETY for lançado. 
              Você também receberá atualizações exclusivas sobre o desenvolvimento da plataforma.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
              Quero acesso antecipado
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="SAFETY - Software Educacional"
      />
    </div>
  );
};

export default Safety;
