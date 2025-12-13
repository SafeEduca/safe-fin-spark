import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Target, Rocket } from "lucide-react";
import LeadModal from "./LeadModal";
import safeKidsImage from "@/assets/safe-kids-program.jpg";
import financasEmFocoImage from "@/assets/financas-em-foco.png";
import rumoLiberdadeImage from "@/assets/rumo-liberdade.jpg";
import safeCompanyImage from "@/assets/safe-company.jpg";

const Programs = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const navigate = useNavigate();

  const programs = [
    {
      id: "safe-kids",
      path: "/safe-kids",
      title: "SAFE Kids",
      subtitle: "Para Crianças",
      description: "Dê ao seu filho a inteligência financeira que a escola não ensina.",
      image: safeKidsImage,
      highlights: ["7 a 14 anos", "Aulas lúdicas", "Certificado incluso"],
      ctaText: "Inscrever meu filho",
      color: "kids",
      icon: Star,
    },
    {
      id: "financas-em-foco",
      path: "/financas-em-foco",
      title: "Finanças em Foco",
      subtitle: "Para Adolescentes",
      description: "Preparando jovens para o futuro com inteligência financeira.",
      image: financasEmFocoImage,
      highlights: ["15 a 18 anos", "Investimentos", "Carreira"],
      ctaText: "Quero participar",
      color: "teens",
      icon: Target,
    },
    {
      id: "rumo-liberdade",
      path: "/rumo-liberdade",
      title: "Imersão Rumo à Liberdade",
      subtitle: "Para Adultos",
      description: "Uma imersão transformadora para conquistar sua independência financeira.",
      image: rumoLiberdadeImage,
      highlights: ["Adultos 18+", "Mentoria", "Renda passiva"],
      ctaText: "Começar jornada",
      color: "adults",
      icon: Rocket,
    },
    {
      id: "safe-company",
      path: "#",
      title: "SAFE Company",
      subtitle: "Para Empresas",
      description: "Transforme a saúde financeira dos seus colaboradores.",
      image: safeCompanyImage,
      highlights: ["Empresas", "ROI comprovado", "Personalizado"],
      ctaText: "Solicitar proposta",
      color: "company",
      icon: Users,
    },
  ];

  const colorClasses = {
    kids: {
      bg: "bg-gradient-to-br from-pink-500 to-rose-500",
      hover: "hover:from-pink-600 hover:to-rose-600",
      badge: "bg-pink-100 text-pink-700",
      border: "border-pink-400",
    },
    teens: {
      bg: "bg-gradient-to-br from-slate-600 to-slate-700",
      hover: "hover:from-slate-700 hover:to-slate-800",
      badge: "bg-slate-100 text-slate-700",
      border: "border-slate-400",
    },
    adults: {
      bg: "bg-gradient-to-br from-amber-500 to-yellow-600",
      hover: "hover:from-amber-600 hover:to-yellow-700",
      badge: "bg-amber-100 text-amber-700",
      border: "border-amber-400",
    },
    company: {
      bg: "bg-gradient-to-br from-emerald-600 to-teal-500",
      hover: "hover:from-emerald-700 hover:to-teal-600",
      badge: "bg-emerald-100 text-emerald-700",
      border: "border-emerald-400",
    },
  };

  return (
    <section id="programas" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nossos <span className="text-accent">Programas</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Educação financeira para todas as idades e necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {programs.map((program) => {
            const colors = colorClasses[program.color as keyof typeof colorClasses];
            const IconComponent = program.icon;
            
            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24 flex"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col w-full">
                  {/* Image with overlay */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${colors.bg} opacity-20`}></div>
                    <div className="absolute top-3 left-3">
                      <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {program.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {program.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full ${colors.bg} ${colors.hover} text-white border-none transition-all duration-300`}
                      onClick={() => {
                        if (program.path === "#") {
                          setActiveModal(program.id);
                        } else {
                          navigate(program.path);
                        }
                      }}
                    >
                      {program.ctaText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SAFETY Card - Software */}
        <div id="safety" className="mt-12 md:mt-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl p-6 md:p-8 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(226,162,57,0.15),transparent_50%)]"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-full mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-3">
                SAFETY - Software Educacional
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Nossa plataforma digital de educação financeira gamificada. Seja o primeiro a experimentar!
              </p>
              <Button
                onClick={() => navigate("/safety")}
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8"
              >
                Conhecer o SAFETY
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={activeModal === "safe-company"}
        onClose={() => setActiveModal(null)}
        programName="SAFE Company"
      />
    </section>
  );
};

export default Programs;
