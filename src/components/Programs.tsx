import { useState } from "react";
import ProgramCard from "./ProgramCard";
import LeadModal from "./LeadModal";
import safeKidsImage from "@/assets/safe-kids-program.jpg";
import financasEmFocoImage from "@/assets/financas-em-foco.jpg";
import rumoLiberdadeImage from "@/assets/rumo-liberdade.jpg";
import safeCompanyImage from "@/assets/safe-company.jpg";

const Programs = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const programs = [
    {
      id: "safe-kids",
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
      ctaText: "Quero saber mais sobre o SAFE Kids",
    },
    {
      id: "financas-em-foco",
      title: "Finanças em Foco",
      description:
        "Preparando-se para o Futuro: Pare de se preocupar com dinheiro, comece a multiplicá-lo.",
      image: financasEmFocoImage,
      highlights: [
        "Gestão financeira pessoal completa",
        "Estratégias de investimento",
        "Planejamento de aposentadoria",
        "Mentorias individuais",
        "Acompanhamento contínuo",
      ],
      ctaText: "Quero participar do Finanças em Foco",
      variant: "dark" as const,
    },
    {
      id: "rumo-liberdade",
      title: "Rumo à Liberdade",
      description:
        "Alcance sua Independência Financeira: Construa seu caminho para a liberdade total.",
      image: rumoLiberdadeImage,
      highlights: [
        "Planejamento de independência financeira",
        "Estratégias avançadas de investimentos",
        "Gestão de patrimônio",
        "Construção de renda passiva",
        "Mentoria personalizada com especialistas",
      ],
      ctaText: "Quero conquistar minha liberdade financeira",
    },
    {
      id: "safe-company",
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
      ctaText: "Solicite uma Proposta Personalizada",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="scroll-mt-24">
              <ProgramCard
                title={program.title}
                description={program.description}
                image={program.image}
                highlights={program.highlights}
                onCTAClick={() => setActiveModal(program.id)}
                ctaText={program.ctaText}
                variant={program.variant}
              />
            </div>
          ))}
        </div>

        {/* SAFETY Card - In Development */}
        <div id="safety" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-gradient-gold rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-accent-foreground mb-4">
              SAFETY - Software Educacional
            </h3>
            <p className="text-accent-foreground/90 mb-6 leading-relaxed">
              Nossa plataforma digital de educação financeira está em desenvolvimento. Seja o
              primeiro a experimentar uma nova forma de aprender sobre finanças de maneira
              interativa e gamificada.
            </p>
            <button
              onClick={() => setActiveModal("safety")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 hover:scale-105 shadow-md"
            >
              Em Desenvolvimento - Seja o Primeiro a Saber
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <LeadModal
        isOpen={activeModal === "safe-kids"}
        onClose={() => setActiveModal(null)}
        programName="SAFE Kids"
      />
      <LeadModal
        isOpen={activeModal === "financas-em-foco"}
        onClose={() => setActiveModal(null)}
        programName="Finanças em Foco"
      />
      <LeadModal
        isOpen={activeModal === "rumo-liberdade"}
        onClose={() => setActiveModal(null)}
        programName="Rumo à Liberdade"
      />
      <LeadModal
        isOpen={activeModal === "safe-company"}
        onClose={() => setActiveModal(null)}
        programName="SAFE Company"
      />
      <LeadModal
        isOpen={activeModal === "safety"}
        onClose={() => setActiveModal(null)}
        programName="SAFETY - Software Educacional"
      />
    </section>
  );
};

export default Programs;
