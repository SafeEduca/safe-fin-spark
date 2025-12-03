import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { useState, useEffect } from "react";
import financasImage from "@/assets/financas-em-foco.png";

const FinancasEmFoco = () => {
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
                  Para Adolescentes
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                  Finanças em Foco
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Preparando-se para o Futuro com inteligência financeira desde cedo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                    Quero participar
                  </Button>
                  <Button variant="outlineGold" size="lg" asChild>
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img
                  src={financasImage}
                  alt="Finanças em Foco"
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
                { icon: Users, label: "Idade", value: "15 a 18 anos" },
                { icon: Clock, label: "Duração", value: "16 semanas" },
                { icon: Award, label: "Certificado", value: "Incluído" },
                { icon: Check, label: "Formato", value: "Online/Presencial" },
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
              O que você vai <span className="text-accent">aprender</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 1: Gestão Pessoal</h3>
                <ul className="space-y-4">
                  {[
                    "Gestão de mesada e primeiros ganhos",
                    "Orçamento pessoal e controle de gastos",
                    "Importância da poupança e juros compostos",
                    "Primeiro cartão de crédito e responsabilidade",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 2: Investimentos</h3>
                <ul className="space-y-4">
                  {[
                    "Introdução ao mercado financeiro",
                    "Tipos de investimentos (Renda Fixa e Variável)",
                    "Como começar a investir ainda jovem",
                    "Simuladores e prática de investimentos",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 3: Carreira</h3>
                <ul className="space-y-4">
                  {[
                    "Planejamento financeiro para universidade",
                    "Empreendedorismo juvenil",
                    "Primeiras experiências profissionais",
                    "Como negociar salário e benefícios",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 4: Mentalidade</h3>
                <ul className="space-y-4">
                  {[
                    "Desenvolvimento de mentalidade empreendedora",
                    "Consumo consciente e sustentabilidade",
                    "Objetivos financeiros de curto e longo prazo",
                    "Independência financeira desde cedo",
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

            <div className="text-center">
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                Quero participar do Finanças em Foco
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="Finanças em Foco"
      />
    </div>
  );
};

export default FinancasEmFoco;
