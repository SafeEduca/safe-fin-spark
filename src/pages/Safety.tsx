import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles, Gamepad2, TrendingUp, Users, Zap, Award, Layers, Building2, Check, ChevronDown, Smartphone, Trophy, Target, BookOpen, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import phoneHero from "@/assets/safety-app-splash.png";
import phoneRanking from "@/assets/safety-app-ranking.png";
import phoneTrilhas from "@/assets/safety-app-trilhas.png";
import phoneAvatar from "@/assets/safety-app-avatar.png";
import phoneUpdate from "@/assets/safety-app-update.png";

/* ========== Glass Styles ========== */
const glass = {
  card: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  } as React.CSSProperties,
  cardLight: {
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
  } as React.CSSProperties,
  button: {
    background: 'linear-gradient(135deg, rgba(139,92,246,0.55), rgba(6,182,212,0.45))',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 8px 32px rgba(139,92,246,0.25)',
  } as React.CSSProperties,
  buttonOutline: {
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.04)',
  } as React.CSSProperties,
};

const dividerGradient = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)';

/* ========== Data ========== */
const features = [
  { icon: Gamepad2, title: "Gamificação Inteligente", description: "Missões, desafios e recompensas que tornam o aprendizado financeiro viciante e divertido." },
  { icon: TrendingUp, title: "Simuladores Financeiros", description: "Pratique investimentos e gestão de orçamento em cenários realistas, sem risco." },
  { icon: Users, title: "Comunidade & Rankings", description: "Compete com amigos, compartilhe conquistas e suba no ranking da educação financeira." },
  { icon: Sparkles, title: "IA Personalizada", description: "Assistente que adapta conteúdos ao seu nível e cria trilhas sob medida." },
  { icon: Layers, title: "Multiplataforma", description: "Web, app e tablet — progresso sincronizado em todos os dispositivos." },
  { icon: Award, title: "Certificados Digitais", description: "Conquiste badges, troféus e certificados ao concluir módulos." },
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

/* ========== Phone Mockup Component ========== */
const PhoneMockup = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 rounded-[2rem] blur-[60px] opacity-30" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }} />
    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl" style={{
      border: '3px solid rgba(255,255,255,0.12)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
    </div>
  </div>
);

/* ========== Main Component ========== */
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
    <div className="min-h-screen" style={{ background: '#0a0a1a' }}>
      <Header />
      <main>
        {/* ========== HERO ========== */}
        <section className="relative py-20 md:py-32 overflow-hidden" style={{
          background: 'linear-gradient(160deg, #0f0c29 0%, #1a1640 40%, #16213e 100%)'
        }}>
          {/* Decorative orbs */}
          <div className="absolute top-20 left-[5%] w-80 h-80 rounded-full opacity-25 blur-[120px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-0 right-[10%] w-[500px] h-[400px] rounded-full opacity-15 blur-[140px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/40 hover:text-white/70 mb-10 transition-colors text-sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para Home
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 text-cyan-300/80" style={{
                  ...glass.card,
                  border: '1px solid rgba(6,182,212,0.2)',
                }}>
                  <Smartphone className="w-3.5 h-3.5" />
                  Plataforma Gamificada de Educação Financeira
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.05]">
                  Aprenda finanças{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #c4b5fd, #22d3ee)',
                  }}>jogando</span>
                </h1>

                <p className="text-base md:text-lg text-white/45 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Transforme sua relação com o dinheiro de forma divertida e eficaz com a plataforma SAFETY.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => openModal("SAFETY - Plano Anual")}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                    style={glass.button}
                  >
                    <Zap className="w-4 h-4" />
                    Começar agora — R$ 49,90/mês
                  </button>
                  <button
                    onClick={() => document.getElementById('empresas')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white/60 hover:text-white/90 transition-all duration-300 active:scale-[0.97]"
                    style={glass.buttonOutline}
                  >
                    <Building2 className="w-4 h-4" />
                    Para Empresas
                  </button>
                </div>
              </div>

              <PhoneMockup src={phoneHero} alt="SAFETY App" className="w-52 md:w-64 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* ========== MARQUEE ========== */}
        <section className="py-3.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="mx-6 text-white/20 text-xs font-heading font-semibold tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-violet-400/40" />
                seja {word}
              </span>
            ))}
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #16213e 0%, #12122a 100%)'
        }}>
          <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full opacity-15 blur-[120px]" style={{ background: '#7c3aed' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
              <PhoneMockup src={phoneUpdate} alt="SAFETY - Atualizações" className="w-44 md:w-56 flex-shrink-0 order-2 lg:order-1" />

              <div className="flex-1 order-1 lg:order-2">
                <span className="text-cyan-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Sobre a plataforma</span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                  Educação financeira que{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #c4b5fd, #22d3ee)',
                  }}>engaja de verdade</span>
                </h2>
                <p className="text-white/40 text-base leading-relaxed mb-8">
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
                    <div key={i} className="flex items-center gap-3 text-white/55">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
                        background: 'rgba(139,92,246,0.12)',
                        border: '1px solid rgba(139,92,246,0.15)',
                      }}>
                        <item.icon className="w-4 h-4 text-violet-300/80" />
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #12122a 0%, #0f0c29 100%)'
        }}>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full opacity-20 blur-[100px]" style={{ background: '#7c3aed' }} />
          <div className="absolute top-1/4 right-[5%] w-48 h-48 rounded-full opacity-15 blur-[80px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-violet-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Funcionalidades</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                Tudo para{" "}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #c4b5fd, #22d3ee)',
                }}>dominar suas finanças</span>
              </h2>
              <p className="text-white/30 max-w-md mx-auto text-sm">Recursos pensados para transformar sua relação com o dinheiro</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 group"
                    style={glass.card}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{
                      background: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.15)',
                    }}>
                      <Icon className="w-5 h-5 text-violet-300/80" />
                    </div>
                    <h3 className="text-base font-heading font-bold mb-2 text-white/90">{feature.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== PHONE SHOWCASE ========== */}
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #0f0c29 0%, #1a1640 100%)'
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[140px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-cyan-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Experiência</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                Aprenda em qualquer lugar
              </h2>
              <p className="text-white/30 max-w-md mx-auto text-sm">Disponível no celular, tablet e computador com progresso sincronizado</p>
            </div>

            <div className="flex justify-center items-end gap-3 md:gap-6 lg:gap-10">
              <PhoneMockup src={phoneAvatar} alt="SAFETY - Avatar" className="w-28 md:w-44 opacity-75 -mb-6" />
              <PhoneMockup src={phoneTrilhas} alt="SAFETY - Trilhas" className="w-40 md:w-56" />
              <PhoneMockup src={phoneRanking} alt="SAFETY - Ranking" className="w-28 md:w-44 opacity-75 -mb-6 hidden sm:block" />
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #1a1640 0%, #16213e 100%)'
        }}>
          <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full opacity-15 blur-[120px]" style={{ background: '#7c3aed' }} />
          <div className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full opacity-10 blur-[100px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-violet-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Planos</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                Invista no seu{" "}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #c4b5fd, #22d3ee)',
                }}>futuro financeiro</span>
              </h2>
              <p className="text-white/30 max-w-md mx-auto text-sm">Escolha o plano ideal para sua jornada</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div key={index} className={`relative rounded-[1.5rem] p-[1px] ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`} style={{
                    background: plan.highlighted
                      ? 'linear-gradient(160deg, rgba(139,92,246,0.5), rgba(6,182,212,0.4))'
                      : 'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  }}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full text-[10px] font-bold text-white tracking-wide uppercase" style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                        boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
                      }}>
                        {plan.badge}
                      </div>
                    )}
                    <div className={`rounded-[calc(1.5rem-1px)] p-6 md:p-7 h-full flex flex-col`} style={{
                      background: plan.highlighted ? 'rgba(12,10,35,0.95)' : 'rgba(12,10,35,0.8)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                    }}>
                      {/* Header */}
                      <div className="text-center mb-5">
                        <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{
                          background: plan.highlighted ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.15))' : 'rgba(255,255,255,0.05)',
                          border: `1px solid ${plan.highlighted ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.08)'}`,
                        }}>
                          <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-violet-300' : 'text-white/40'}`} />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-white mb-1">{plan.name}</h3>
                        <p className="text-white/30 text-xs">{plan.description}</p>
                      </div>

                      <div className="w-full h-px mb-5" style={{ background: dividerGradient }} />

                      {/* Price */}
                      <div className="text-center mb-5">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-white/30 text-xs">12x</span>
                          <span className={`text-3xl font-heading font-bold ${plan.highlighted ? 'text-white' : 'text-white/85'}`}>R$ {plan.price.split(',')[0]}</span>
                          <span className="text-lg font-heading font-bold text-white/60">,{plan.price.split(',')[1]}</span>
                        </div>
                        <p className="text-white/20 text-[10px] mt-1">ou R$ {plan.total} à vista</p>
                      </div>

                      <div className="w-full h-px mb-5" style={{ background: dividerGradient }} />

                      {/* Features */}
                      <ul className="space-y-2.5 mb-7 flex-1">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/45 text-sm">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                              background: plan.highlighted ? 'rgba(139,92,246,0.2)' : 'rgba(34,211,238,0.1)',
                            }}>
                              <Check className={`w-2.5 h-2.5 ${plan.highlighted ? 'text-violet-300' : 'text-cyan-400/80'}`} />
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => openModal(`SAFETY - Plano ${plan.name} (12x R$${plan.price})`)}
                        className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
                        style={plan.highlighted ? glass.button : {
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        {plan.cta}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== EMPRESAS ========== */}
        <section id="empresas" className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #16213e 0%, #12122a 100%)'
        }}>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-10 blur-[140px]" style={{ background: '#06b6d4' }} />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
              <div className="flex-1">
                <span className="text-cyan-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Para empresas</span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                  Saúde financeira como{" "}
                  <span className="text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(135deg, #c4b5fd, #22d3ee)',
                  }}>benefício corporativo</span>
                </h2>
                <p className="text-white/40 text-base leading-relaxed mb-8">
                  Ofereça educação financeira gamificada como benefício para seus colaboradores ou clientes. 
                  Empresas que investem no bem-estar financeiro de seus times colhem maior produtividade, 
                  engajamento e retenção de talentos.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Planos customizados para equipes de qualquer tamanho",
                    "Dashboard administrativo com métricas de engajamento",
                    "Conteúdo adaptável à cultura da empresa",
                    "Relatórios de progresso dos colaboradores",
                    "Suporte dedicado e onboarding guiado",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-white/50">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                        background: 'rgba(6,182,212,0.12)',
                      }}>
                        <Check className="w-2.5 h-2.5 text-cyan-400/80" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal("SAFETY - Plano Empresarial")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={glass.button}
                >
                  <Building2 className="w-4 h-4" />
                  Falar com comercial
                </button>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="rounded-[1.5rem] p-7 md:p-8 max-w-sm mx-auto" style={glass.cardLight}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <Building2 className="w-8 h-8 text-cyan-300/80" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">Plano Empresarial</h3>
                    <p className="text-white/30 text-xs mb-6">Preço sob consulta</p>
                    
                    <div className="space-y-2.5 text-left">
                      {["Licenças ilimitadas", "Conteúdo exclusivo", "API de integração", "Suporte premium"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/40 text-sm">
                          <Check className="w-3.5 h-3.5 text-cyan-400/70 flex-shrink-0" />
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
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #12122a 0%, #0a0a1a 100%)'
        }}>
          <div className="absolute top-1/3 left-[15%] w-64 h-64 rounded-full opacity-10 blur-[120px]" style={{ background: '#8b5cf6' }} />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-14">
              <span className="text-violet-400/70 text-xs font-semibold tracking-[0.2em] uppercase mb-5 block">Dúvidas</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                Perguntas frequentes
              </h2>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={glass.card}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-white/80 font-semibold text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                    <p className="px-5 text-white/35 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="relative py-24 overflow-hidden" style={{
          background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1640 100%)'
        }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full opacity-15 blur-[140px]" style={{ background: '#7c3aed' }} />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="rounded-[1.5rem] p-8 md:p-12 text-center" style={glass.cardLight}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 leading-tight">
                Comece sua jornada financeira
              </h2>
              <p className="text-white/35 text-base mb-8 max-w-md mx-auto">
                Junte-se a milhares de pessoas que estão transformando sua relação com o dinheiro através do SAFETY.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => openModal("SAFETY - Plano Anual (12x R$49,90)")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={glass.button}
                >
                  <Zap className="w-4 h-4" />
                  Assinar por R$ 49,90/mês
                </button>
                <button
                  onClick={() => openModal("SAFETY - Plano Empresarial")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white/50 hover:text-white/80 transition-all duration-300 active:scale-[0.97]"
                  style={glass.buttonOutline}
                >
                  <Building2 className="w-4 h-4" />
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

export default Safety;
