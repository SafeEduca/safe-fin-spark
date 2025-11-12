import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { useState } from "react";
import safeKidsImage from "@/assets/safe-kids-program.jpg";

const SafeKids = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  Educação Financeira para Crianças
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                  SAFE Kids
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  O Começo de Tudo: Dê ao seu filho a inteligência financeira que a escola não ensina.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                    Inscrever meu filho
                  </Button>
                  <Button variant="outlineGold" size="lg" asChild>
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img
                  src={safeKidsImage}
                  alt="SAFE Kids"
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
                { icon: Users, label: "Idade", value: "7 a 14 anos" },
                { icon: Clock, label: "Duração", value: "12 semanas" },
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
              O que seu filho vai <span className="text-accent">aprender</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 1: Fundamentos</h3>
                <ul className="space-y-4">
                  {[
                    "O que é dinheiro e sua importância",
                    "Diferença entre necessidade e desejo",
                    "Valor do trabalho e remuneração",
                    "Conceito de poupança",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 2: Gestão Prática</h3>
                <ul className="space-y-4">
                  {[
                    "Como administrar mesada",
                    "Estabelecimento de metas financeiras",
                    "Introdução ao empreendedorismo infantil",
                    "Jogos educativos sobre finanças",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Módulo 3: Valores</h3>
                <ul className="space-y-4">
                  {[
                    "Generosidade e doação",
                    "Consumo consciente",
                    "Responsabilidade financeira",
                    "Planejamento para o futuro",
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
                <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Diferenciais</h3>
                <ul className="space-y-4">
                  {[
                    "Metodologia lúdica e interativa",
                    "Acompanhamento para os pais",
                    "Material didático exclusivo",
                    "Certificado de conclusão",
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
                Quero inscrever meu filho no SAFE Kids
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="SAFE Kids"
      />
    </div>
  );
};

export default SafeKids;
