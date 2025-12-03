import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Gamepad2, TrendingUp, Users, Cpu, Zap, Code, Layers } from "lucide-react";
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
        {/* Hero Section - Tecnológico e Futurista */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-900 overflow-hidden">
          {/* Tech grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          {/* Animated glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-violet-300 hover:text-cyan-400 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-400/30">
                  <Cpu className="w-4 h-4" />
                  Em Desenvolvimento
                </div>
                
                <div className="relative mb-6">
                  <div className="text-7xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400">
                    SAFETY
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 blur-xl -z-10"></div>
                </div>
                
                <p className="text-xl md:text-2xl text-violet-200 mb-8 leading-relaxed">
                  O futuro da educação financeira: Plataforma digital interativa e gamificada
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white font-bold shadow-lg shadow-violet-500/25"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Quero ser o primeiro a saber
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
              O que está <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">por vir</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">Aprendizado Gamificado</h3>
                <p className="text-slate-400">
                  Aprenda educação financeira através de jogos interativos, desafios e missões que tornam o aprendizado divertido e eficaz.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">Simuladores Reais</h3>
                <p className="text-slate-400">
                  Pratique investimentos, gestão de orçamento e tomada de decisões financeiras em um ambiente seguro e realista.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">Comunidade Ativa</h3>
                <p className="text-slate-400">
                  Conecte-se com outros estudantes, compartilhe conquistas e aprenda em comunidade com rankings e desafios colaborativos.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">IA Personalizada</h3>
                <p className="text-slate-400">
                  Assistente virtual inteligente que adapta o conteúdo ao seu nível e oferece recomendações personalizadas de aprendizado.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">Multiplataforma</h3>
                <p className="text-slate-400">
                  Acesse de qualquer lugar: web, aplicativo móvel e tablet. Seu progresso sincronizado em todos os dispositivos.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-lg text-center border border-violet-500/20 hover:border-cyan-500/40 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">Conquistas e Badges</h3>
                <p className="text-slate-400">
                  Sistema de recompensas com badges, troféus e certificados digitais para celebrar cada conquista no aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-violet-950">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              Seja um dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">primeiros</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Cadastre-se agora e receba acesso antecipado assim que o SAFETY for lançado. 
              Você também receberá atualizações exclusivas sobre o desenvolvimento da plataforma.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-bold shadow-lg shadow-violet-500/25 px-8"
            >
              <Zap className="w-5 h-5 mr-2" />
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