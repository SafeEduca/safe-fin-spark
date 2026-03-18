import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Gamepad2, TrendingUp, Users, Cpu, Zap, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const features = [
  {
    icon: Gamepad2,
    title: "Aprendizado Gamificado",
    description: "Aprenda educação financeira através de jogos interativos, desafios e missões que tornam o aprendizado divertido e eficaz.",
  },
  {
    icon: TrendingUp,
    title: "Simuladores Reais",
    description: "Pratique investimentos, gestão de orçamento e tomada de decisões financeiras em um ambiente seguro e realista.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros estudantes, compartilhe conquistas e aprenda em comunidade com rankings e desafios colaborativos.",
  },
  {
    icon: Sparkles,
    title: "IA Personalizada",
    description: "Assistente virtual inteligente que adapta o conteúdo ao seu nível e oferece recomendações personalizadas de aprendizado.",
  },
  {
    icon: Layers,
    title: "Multiplataforma",
    description: "Acesse de qualquer lugar: web, aplicativo móvel e tablet. Seu progresso sincronizado em todos os dispositivos.",
  },
  {
    icon: Code,
    title: "Conquistas e Badges",
    description: "Sistema de recompensas com badges, troféus e certificados digitais para celebrar cada conquista no aprendizado.",
  },
];

const Safety = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Glassmorphism */}
        <section className="relative py-20 md:py-32 overflow-hidden" style={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
        }}>
          {/* Decorative blurred orbs */}
          <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full opacity-40 blur-[100px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full opacity-30 blur-[120px]" style={{ background: '#06b6d4' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[150px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                {/* Glass badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 text-cyan-200 border border-white/15"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}>
                  <Cpu className="w-4 h-4" />
                  Em Desenvolvimento
                </div>

                <div className="relative mb-8">
                  <h1 className="text-7xl md:text-9xl font-heading font-bold text-white tracking-tight"
                    style={{
                      textShadow: '0 0 80px rgba(139,92,246,0.5), 0 0 40px rgba(6,182,212,0.3)',
                    }}>
                    SAFETY
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                  O futuro da educação financeira: Plataforma digital interativa e gamificada
                </p>

                {/* Glass CTA button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.4))',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  }}
                >
                  <Zap className="w-5 h-5" />
                  Quero ser o primeiro a saber
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Glass Cards */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #24243e 0%, #1a1a2e 50%, #16213e 100%)'
        }}>
          {/* Background orbs */}
          <div className="absolute top-1/4 left-[5%] w-64 h-64 rounded-full opacity-25 blur-[100px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full opacity-20 blur-[80px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-white">
              O que está por vir
            </h2>
            <p className="text-center text-white/50 mb-14 max-w-xl mx-auto">
              Funcionalidades pensadas para transformar sua relação com o dinheiro
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(139,92,246,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(139,92,246,0.15)',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}>
                      <Icon className="w-7 h-7 text-violet-300" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Glass Panel */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #16213e 0%, #0f0c29 100%)'
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-[120px]" style={{ background: '#7c3aed' }} />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="rounded-3xl p-10 md:p-14 text-center"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 16px 64px rgba(0,0,0,0.2)',
              }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                Seja um dos primeiros
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                Cadastre-se agora e receba acesso antecipado assim que o SAFETY for lançado.
                Você também receberá atualizações exclusivas sobre o desenvolvimento da plataforma.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.4))',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              >
                <Zap className="w-5 h-5" />
                Quero acesso antecipado
              </button>
            </div>
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
