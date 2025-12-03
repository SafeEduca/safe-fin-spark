import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Crown, Gem, TrendingUp, Building } from "lucide-react";
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
        {/* Hero Section - Dourado Premium para Adultos */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 overflow-hidden">
          {/* Luxury pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,215,0,0.2) 0%, transparent 50%)`,
            }}></div>
          </div>
          {/* Gold shimmer effect */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-amber-200 hover:text-yellow-300 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-yellow-400/30">
                  <Crown className="w-4 h-4" />
                  Para Adultos
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Rumo à <span className="text-yellow-300">Liberdade</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
                  Conquiste sua Independência Financeira e construa o futuro dos seus sonhos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-amber-900 font-bold shadow-lg"
                  >
                    Quero conquistar minha liberdade
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-amber-600/30 rounded-3xl blur-xl"></div>
                <img
                  src={rumoImage}
                  alt="Rumo à Liberdade"
                  className="relative rounded-3xl shadow-2xl w-full border-2 border-yellow-400/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Público", value: "Adultos 18+", color: "text-amber-700" },
                { icon: Clock, label: "Duração", value: "24 semanas", color: "text-yellow-600" },
                { icon: Award, label: "Mentoria", value: "Personalizada", color: "text-amber-700" },
                { icon: Check, label: "Formato", value: "Online/Híbrido", color: "text-yellow-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-amber-200 hover:border-yellow-400 transition-colors">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-amber-600 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-amber-900 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-amber-900">
              Sua jornada rumo à <span className="text-yellow-600">liberdade financeira</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-amber-900">Fase 1: Fundação</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Diagnóstico financeiro completo",
                    "Eliminação de dívidas e reorganização",
                    "Fundo de emergência estruturado",
                    "Orçamento inteligente e automatizado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-yellow-200" />
                      </div>
                      <span className="text-amber-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-yellow-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-amber-900">Fase 2: Crescimento</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Estratégias avançadas de investimentos",
                    "Diversificação de portfólio",
                    "Investimentos em renda variável",
                    "Análise de riscos e retornos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-amber-900" />
                      </div>
                      <span className="text-amber-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
                    <Gem className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-amber-900">Fase 3: Renda Passiva</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Criação de múltiplas fontes de renda",
                    "Investimentos imobiliários",
                    "Dividendos e FIIs",
                    "Negócios escaláveis e automação",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-yellow-200" />
                      </div>
                      <span className="text-amber-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 shadow-lg border border-yellow-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-amber-900">Fase 4: Liberdade</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Planejamento de independência financeira",
                    "Aposentadoria antecipada (FIRE)",
                    "Gestão de patrimônio consolidado",
                    "Legado e sucessão patrimonial",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-amber-900" />
                      </div>
                      <span className="text-amber-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 rounded-2xl p-8 mb-12 border border-yellow-300">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center text-amber-900">Diferenciais Exclusivos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Mentoria individual personalizada",
                  "Comunidade exclusiva de alunos",
                  "Ferramentas e planilhas profissionais",
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Check className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-medium text-amber-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold text-lg px-8 py-6 shadow-xl"
              >
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