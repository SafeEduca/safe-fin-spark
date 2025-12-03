import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Target, TrendingUp, Briefcase, Brain } from "lucide-react";
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
        {/* Hero Section - Cinza e Dourado para Adolescentes */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 overflow-hidden">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(212, 175, 55, 0.3) 45%, rgba(212, 175, 55, 0.3) 55%, transparent 55%)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-slate-300 hover:text-amber-400 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
                  <Target className="w-4 h-4" />
                  Para Adolescentes
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Finanças em <span className="text-amber-400">Foco</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  Preparando-se para o Futuro com inteligência financeira desde cedo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg"
                  >
                    Quero participar
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-amber-400/50 text-amber-400 hover:bg-amber-400/10 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-slate-500/20 rounded-3xl blur-xl"></div>
                <img
                  src={financasImage}
                  alt="Finanças em Foco"
                  className="relative rounded-3xl shadow-2xl w-full border-2 border-amber-400/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Idade", value: "15 a 18 anos", color: "text-slate-700" },
                { icon: Clock, label: "Duração", value: "16 semanas", color: "text-amber-600" },
                { icon: Award, label: "Certificado", value: "Incluído", color: "text-slate-700" },
                { icon: Check, label: "Formato", value: "Online/Presencial", color: "text-amber-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-slate-200 hover:border-amber-400/50 transition-colors">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-slate-800 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-slate-800">
              O que você vai <span className="text-amber-500">aprender</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">Gestão Pessoal</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Gestão de mesada e primeiros ganhos",
                    "Orçamento pessoal e controle de gastos",
                    "Importância da poupança e juros compostos",
                    "Primeiro cartão de crédito e responsabilidade",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">Investimentos</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Introdução ao mercado financeiro",
                    "Tipos de investimentos (Renda Fixa e Variável)",
                    "Como começar a investir ainda jovem",
                    "Simuladores e prática de investimentos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">Carreira</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Planejamento financeiro para universidade",
                    "Empreendedorismo juvenil",
                    "Primeiras experiências profissionais",
                    "Como negociar salário e benefícios",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-slate-900" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">Mentalidade</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Desenvolvimento de mentalidade empreendedora",
                    "Consumo consciente e sustentabilidade",
                    "Objetivos financeiros de curto e longo prazo",
                    "Independência financeira desde cedo",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-amber-400 font-bold text-lg px-8 py-6 shadow-lg border border-amber-400/30"
              >
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