import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgramCard from "./ProgramCard";
import LeadModal from "./LeadModal";
import safeKidsImage from "@/assets/safe-kids-program.jpg";
import financasEmFocoImage from "@/assets/financas-em-foco.jpg";
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
      description:
        "O Começo de Tudo: Dê ao seu filho a inteligência financeira que a escola não ensina.",
      image: safeKidsImage,
      highlights: [
        "Idade: 7 a 14 anos",
        "Aulas dinâmicas e lúdicas",
        "Desenvolvimento de habilidades financeiras desde cedo",
        "Certificado de conclusão",
      ],
      ctaText: "Ver programa completo",
    },
    {
      id: "financas-em-foco",
      path: "/financas-em-foco",
      title: "Finanças em Foco",
      description:
        "Para Adolescentes: Preparando-se para o Futuro com inteligência financeira desde cedo.",
      image: financasEmFocoImage,
      highlights: [
        "Idade: 15 a 18 anos",
        "Gestão de mesada e primeiros ganhos",
        "Introdução ao mundo dos investimentos",
        "Planejamento para universidade e carreira",
        "Desenvolvimento de mentalidade empreendedora",
      ],
      ctaText: "Ver programa completo",
      variant: "dark" as const,
    },
    {
      id: "rumo-liberdade",
      path: "/rumo-liberdade",
      title: "Rumo à Liberdade",
      description:
        "Para Adultos: Conquiste sua Independência Financeira e construa o futuro dos seus sonhos.",
      image: rumoLiberdadeImage,
      highlights: [
        "Público: Adultos (18+ anos)",
        "Planejamento de independência financeira completo",
        "Estratégias avançadas de investimentos e patrimônio",
        "Construção de múltiplas fontes de renda passiva",
        "Planejamento de aposentadoria antecipada",
        "Mentoria personalizada com especialistas",
      ],
      ctaText: "Ver programa completo",
    },
    {
      id: "safe-company",
      path: "#",
      title: "SAFE Company",
      description:
        "Bem-Estar e Produtividade: Transforme a saúde financeira de seus colaboradores.",
      image: safeCompanyImage,
      highlights: [
        "Redução do estresse financeiro",
        "Aumento do engajamento",
        "Melhoria da produtividade",
        "Programas personalizados para empresas",
        "ROI comprovado",
      ],
      ctaText: "Solicitar Proposta",
      variant: "dark" as const,
    },
  ];

  return (
    <section id="programas" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Nossos <span className="text-accent">Programas</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções educacionais para todas as idades e necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="scroll-mt-24">
              <ProgramCard
                title={program.title}
                description={program.description}
                image={program.image}
                highlights={program.highlights}
                onCTAClick={() => {
                  if (program.path === "#") {
                    setActiveModal(program.id);
                  } else {
                    navigate(program.path);
                  }
                }}
                ctaText={program.ctaText}
                variant={program.variant}
              />
            </div>
          ))}
        </div>

        {/* SAFETY Card - In Development */}
        <div id="safety" className="mt-12 md:mt-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-gradient-gold rounded-2xl p-6 md:p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full mb-4">
              <span className="text-2xl md:text-3xl">🚀</span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-accent-foreground mb-4">
              SAFETY - Software Educacional
            </h3>
            <p className="text-sm md:text-base text-accent-foreground/90 mb-6 leading-relaxed">
              Nossa plataforma digital de educação financeira está em desenvolvimento. Seja o
              primeiro a experimentar uma nova forma de aprender sobre finanças de maneira
              interativa e gamificada.
            </p>
            <button
              onClick={() => navigate("/safety")}
              className="bg-primary text-primary-foreground px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 hover:scale-105 shadow-md text-sm md:text-base"
            >
              Ver mais sobre o SAFETY
            </button>
          </div>
        </div>
      </div>

      {/* Modal for SAFE Company only */}
      <LeadModal
        isOpen={activeModal === "safe-company"}
        onClose={() => setActiveModal(null)}
        programName="SAFE Company"
      />
    </section>
  );
};

export default Programs;
