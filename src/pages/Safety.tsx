import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Gamepad2, TrendingUp, Users, Zap, Award, Layers, Building2, Check, ChevronDown, Smartphone, Trophy, Target, BookOpen, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import phoneHero from "@/assets/safety-screen-splash.jpeg";
import phoneFeatures from "@/assets/safety-screen-ranking.jpeg";
import phoneLessons from "@/assets/safety-screen-trilhas.jpeg";
import phoneAvatar from "@/assets/safety-screen-avatar.jpeg";
import phoneUpdate from "@/assets/safety-screen-update.jpeg";

const glassCard = {
  background: 'rgba(255,255,255,0.06)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
} as React.CSSProperties;

const glassCardHover = {
  background: 'rgba(255,255,255,0.12)',
  borderColor: 'rgba(255,255,255,0.2)',
  boxShadow: '0 12px 40px rgba(139,92,246,0.15)',
} as React.CSSProperties;

const glassButton = {
  background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(6,182,212,0.5))',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
} as React.CSSProperties;

const features = [
  { icon: Gamepad2, title: "Gamificação Inteligente", description: "Missões, desafios e recompensas que tornam o aprendizado financeiro viciante e divertido." },
  { icon: TrendingUp, title: "Simuladores Financeiros", description: "Pratique investimentos e gestão de orçamento em cenários realistas, sem risco real." },
  { icon: Users, title: "Comunidade & Rankings", description: "Compete com amigos, compartilhe conquistas e suba no ranking da educação financeira." },
  { icon: Sparkles, title: "IA Personalizada", description: "Assistente que adapta conteúdos ao seu nível e cria trilhas de aprendizado sob medida." },
  { icon: Layers, title: "Multiplataforma", description: "Web, app e tablet — seu progresso sincronizado em todos os dispositivos." },
  { icon: Award, title: "Certificados Digitais", description: "Conquiste badges, troféus e certificados reconhecidos ao concluir módulos." },
];

const plans = [
  {
    name: "Essencial",
    icon: Smartphone,
    price: "29,90",
    total: "358,80",
    description: "Acesso ao aplicativo",
    features: [
      "Acesso completo à plataforma",
      "Todos os módulos e trilhas",
      "Simuladores financeiros",
      "Rankings e desafios semanais",
      "Certificados digitais",
    ],
    highlighted: false,
    cta: "Começar agora",
  },
  {
    name: "Completo",
    icon: Star,
    price: "49,90",
    total: "598,80",
    description: "App + Campanhas",
    features: [
      "Tudo do plano Essencial",
      "Campanhas financeiras mensais",
      "IA personalizada",
      "Comunidade exclusiva",
      "Suporte via chat prioritário",
      "Conteúdos extras e bônus",
    ],
    highlighted: true,
    cta: "Escolher Completo",
    badge: "Mais popular",
  },
  {
    name: "Premium",
    icon: Crown,
    price: "89,90",
    total: "1.078,80",
    description: "App + Consultoria",
    features: [
      "Tudo do plano Completo",
      "Consultoria financeira individual",
      "Plano financeiro personalizado",
      "Acompanhamento mensal com consultor",
      "Acesso a workshops exclusivos",
      "Suporte VIP",
    ],
    highlighted: false,
    cta: "Quero Premium",
  },
];

const faqs = [
  { q: "O que é o SAFETY?", a: "O SAFETY é uma plataforma de educação financeira gamificada que ensina finanças pessoais de forma interativa, com jogos, desafios, simuladores e inteligência artificial." },
  { q: "Para quem é indicado?", a: "Para qualquer pessoa que deseja aprender ou melhorar seus conhecimentos em finanças pessoais, desde iniciantes até intermediários. Também oferecemos soluções para empresas." },
  { q: "Como funciona a gamificação?", a: "Você avança por níveis, completa missões, ganha moedas virtuais e badges. Cada conquista desbloqueia novos conteúdos e desafios mais avançados." },
  { q: "Posso cancelar a qualquer momento?", a: "O plano anual tem fidelidade de 12 meses. Após esse período, a renovação é automática mas pode ser cancelada a qualquer momento." },
  { q: "A empresa pode personalizar o conteúdo?", a: "Sim! No plano empresarial, podemos adaptar módulos e trilhas de acordo com as necessidades específicas da organização e seus colaboradores." },
];

const marqueeWords = ["organizado", "consciente", "preparado", "livre", "confiante", "inteligente", "estratégico", "focado"];

const Safety = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProgram, setModalProgram] = useState("SAFETY - Plano Anual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (program: string) => {
    setModalProgram(program);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ========== HERO ========== */}
        <section className="relative py-16 md:py-28 overflow-hidden" style={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
        }}>
          <div className="absolute top-10 left-[10%] w-72 h-72 rounded-full opacity-40 blur-[100px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full opacity-30 blur-[120px]" style={{ background: '#06b6d4' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[150px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para Home
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 text-cyan-200" style={{
                  ...glassCard,
                  border: '1px solid rgba(6,182,212,0.3)',
                }}>
                  <Smartphone className="w-3.5 h-3.5" />
                  Plataforma Gamificada de Educação Financeira
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Aprenda finanças{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                  }}>jogando</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Transforme sua relação com o dinheiro de forma divertida e eficaz com a plataforma SAFETY.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => openModal("SAFETY - Plano Anual")}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105"
                    style={glassButton}
                  >
                    <Zap className="w-5 h-5" />
                    Começar agora — R$ 49,90/mês
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('empresas');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white/80 hover:text-white transition-all duration-300"
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <Building2 className="w-5 h-5" />
                    Para Empresas
                  </button>
                </div>
              </div>

              {/* Right - Phone mockup */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-[80px] scale-75" />
                <img src={phoneHero} alt="SAFETY App - Dashboard" className="relative z-10 w-64 md:w-80 drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== MARQUEE ========== */}
        <section className="py-4 overflow-hidden" style={{ background: 'linear-gradient(90deg, #24243e, #302b63, #24243e)' }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="mx-6 text-white/30 text-sm font-heading font-semibold tracking-widest uppercase flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50" />
                seja {word}
              </span>
            ))}
          </div>
        </section>

        {/* ========== ABOUT / WHAT IS ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #24243e 0%, #1a1a2e 100%)'
        }}>
          <div className="absolute top-1/3 right-[5%] w-64 h-64 rounded-full opacity-20 blur-[100px]" style={{ background: '#7c3aed' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-[80px] scale-75" />
                <img src={phoneLessons} alt="SAFETY App - Lições interativas" className="relative z-10 w-56 md:w-72 drop-shadow-2xl" />
              </div>

              <div className="flex-1">
                <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Sobre a plataforma</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Educação financeira que{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                  }}>engaja de verdade</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  O SAFETY combina gamificação, inteligência artificial e simuladores para criar uma experiência de aprendizado imersiva. 
                  Diferente de cursos tradicionais, aqui você aprende fazendo — com desafios práticos, conquistas e uma comunidade que te motiva.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Trophy, label: "Conquistas" },
                    { icon: Target, label: "Metas Financeiras" },
                    { icon: BookOpen, label: "Lições Guiadas" },
                    { icon: Sparkles, label: "IA Adaptativa" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                        background: 'rgba(139,92,246,0.15)',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}>
                        <item.icon className="w-5 h-5 text-violet-300" />
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES GRID ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
        }}>
          <div className="absolute bottom-1/4 left-[5%] w-64 h-64 rounded-full opacity-25 blur-[100px]" style={{ background: '#7c3aed' }} />
          <div className="absolute top-1/4 right-[10%] w-48 h-48 rounded-full opacity-20 blur-[80px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Funcionalidades</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Tudo que você precisa para{" "}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                }}>dominar suas finanças</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">Recursos pensados para transformar sua relação com o dinheiro</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <GlassCard key={index}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{
                      background: 'rgba(139,92,246,0.15)',
                      border: '1px solid rgba(139,92,246,0.2)',
                    }}>
                      <Icon className="w-6 h-6 text-violet-300" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PHONE SHOWCASE ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #16213e 0%, #1a1a2e 100%)'
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[120px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Multiplataforma</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Aprenda em qualquer lugar
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">Disponível no celular, tablet e computador com progresso sincronizado</p>
            </div>

            <div className="flex justify-center items-end gap-4 md:gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-500/20 rounded-3xl blur-[60px] scale-90" />
                <img src={phoneAvatar} alt="SAFETY - Perfil e estatísticas" className="relative z-10 w-36 md:w-52 rounded-2xl drop-shadow-2xl opacity-80 -mb-4" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-[80px] scale-90" />
                <img src={phoneLessons} alt="SAFETY - Trilhas de aprendizado" className="relative z-10 w-48 md:w-64 rounded-2xl drop-shadow-2xl" />
              </div>
              <div className="relative hidden sm:block">
                <div className="absolute inset-0 bg-violet-500/20 rounded-3xl blur-[60px] scale-90" />
                <img src={phoneFeatures} alt="SAFETY - Rankings" className="relative z-10 w-36 md:w-52 rounded-2xl drop-shadow-2xl opacity-80 -mb-4" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #24243e 100%)'
        }}>
          <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full opacity-20 blur-[120px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-1/4 right-[15%] w-64 h-64 rounded-full opacity-15 blur-[100px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Nosso preço</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Invista no seu{" "}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                }}>futuro financeiro</span>
              </h2>
              <p className="text-white/40 max-w-lg mx-auto">Um plano que cabe no seu bolso e transforma sua vida</p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto rounded-3xl p-1" style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.3))',
            }}>
              <div className="rounded-[1.35rem] p-8 md:p-10" style={{
                background: 'rgba(15,12,41,0.9)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Plano Anual</h3>
                  <p className="text-white/40 text-sm mb-6">Acesso completo por 12 meses</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-white/40 text-lg">12x</span>
                    <span className="text-5xl font-heading font-bold text-white">R$ 49</span>
                    <span className="text-2xl font-heading font-bold text-white">,90</span>
                  </div>
                  <p className="text-white/30 text-sm mt-2">ou R$ 598,80 à vista</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {planFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{
                        background: 'rgba(34,211,238,0.15)',
                      }}>
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal("SAFETY - Plano Anual (12x R$49,90)")}
                  className="w-full py-4 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                  style={glassButton}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Assinar agora
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== EMPRESAS ========== */}
        <section id="empresas" className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #24243e 0%, #1a1a2e 100%)'
        }}>
          <div className="absolute top-1/2 right-[10%] w-80 h-80 rounded-full opacity-15 blur-[120px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Para empresas</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Saúde financeira como{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                  }}>benefício corporativo</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  Ofereça educação financeira gamificada como benefício para seus colaboradores ou clientes. 
                  Empresas que investem no bem-estar financeiro de seus times colhem maior produtividade, 
                  engajamento e retenção de talentos.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Planos customizados para equipes de qualquer tamanho",
                    "Dashboard administrativo com métricas de engajamento",
                    "Conteúdo adaptável à cultura da empresa",
                    "Relatórios de progresso dos colaboradores",
                    "Suporte dedicado e onboarding guiado",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-white/60">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                        background: 'rgba(6,182,212,0.15)',
                      }}>
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal("SAFETY - Plano Empresarial")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105"
                  style={glassButton}
                >
                  <Building2 className="w-5 h-5" />
                  Falar com comercial
                </button>
              </div>

              {/* Enterprise glass card illustration */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="rounded-3xl p-8 md:p-10 max-w-sm mx-auto" style={glassCard}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <Building2 className="w-10 h-10 text-cyan-300" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">Plano Empresarial</h3>
                    <p className="text-white/40 text-sm mb-6">Preço sob consulta</p>
                    
                    <div className="space-y-3 text-left">
                      {["Licenças ilimitadas", "Conteúdo exclusivo", "API de integração", "Suporte premium"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0c29 100%)'
        }}>
          <div className="absolute top-1/3 left-[20%] w-64 h-64 rounded-full opacity-15 blur-[100px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={glassCard}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                    <p className="px-6 text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="relative py-20 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 100%)'
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-[120px]" style={{ background: '#7c3aed' }} />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="rounded-3xl p-10 md:p-14 text-center" style={glassCard}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Comece sua jornada financeira
              </h2>
              <p className="text-white/40 text-lg mb-8 max-w-lg mx-auto">
                Junte-se a milhares de pessoas que estão transformando sua relação com o dinheiro através do SAFETY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal("SAFETY - Plano Anual (12x R$49,90)")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 hover:scale-105"
                  style={glassButton}
                >
                  <Zap className="w-5 h-5" />
                  Assinar por R$ 49,90/mês
                </button>
                <button
                  onClick={() => openModal("SAFETY - Plano Empresarial")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white/70 hover:text-white transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.05)',
                  }}
                >
                  <Building2 className="w-5 h-5" />
                  Sou empresa
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName={modalProgram}
      />
    </div>
  );
};

/* ========== Glass Card Component ========== */
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 cursor-default ${className}`}
    style={glassCard}
    onMouseEnter={(e) => {
      Object.assign(e.currentTarget.style, glassCardHover);
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = glassCard.background as string;
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      e.currentTarget.style.boxShadow = glassCard.boxShadow as string;
    }}
  >
    {children}
  </div>
);

export default Safety;
