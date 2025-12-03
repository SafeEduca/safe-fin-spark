import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { useState, useEffect } from "react";
import rumoImage from "@/assets/rumo-liberdade.jpg";

const RumoLiberdade = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Award className="w-4 h-4" />
                  Para Adultos
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                  Rumo à Liberdade
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Conquiste sua Independência Financeira e construa o futuro dos seus sonhos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                    Quero conquistar minha liberdade
                  </Button>
                  <Button variant="outlineGold" size="lg" asChild>
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img
                  src={rumoImage}
                  alt="Rumo à Liberdade"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Público", value: "Adultos 18+" },
                { icon: Clock, label: "Duração", value: "24 semanas" },
                { icon: Award, label: "Mentoria", value: "Personalizada" },
                { icon: Check, label: "Formato", value: "Online/Híbrido" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-foreground">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Sua jornada rumo à <span className="text-accent">liberdade financeira</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Fase 1: Fundação</h3>
                <ul className="space-y-4">
                  {[
                    "Diagnóstico financeiro completo",
                    "Eliminação de dívidas e reorganização",
                    "Fundo de emergência estruturado",
                    "Orçamento inteligente e automatizado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Fase 2: Crescimento</h3>
                <ul className="space-y-4">
                  {[
                    "Estratégias avançadas de investimentos",
                    "Diversificação de portfólio",
                    "Investimentos em renda variável",
                    "Análise de riscos e retornos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Fase 3: Renda Passiva</h3>
                <ul className="space-y-4">
                  {[
                    "Criação de múltiplas fontes de renda",
                    "Investimentos imobiliários",
                    "Dividendos e FIIs",
                    "Negócios escaláveis e automação",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Fase 4: Liberdade</h3>
                <ul className="space-y-4">
                  {[
                    "Planejamento de independência financeira",
                    "Aposentadoria antecipada (FIRE)",
                    "Gestão de patrimônio consolidado",
                    "Legado e sucessão patrimonial",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Diferenciais Exclusivos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Mentoria individual personalizada",
                  "Comunidade exclusiva de alunos",
                  "Ferramentas e planilhas profissionais",
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                Quero iniciar minha jornada rumo à liberdade
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="Rumo à Liberdade"
      />
    </div>
  );
};

export default RumoLiberdade;
