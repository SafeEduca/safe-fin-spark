import { Target, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Sobre a <span className="text-accent">SAFE</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A SAFE - Soluções em Administração e Finanças Educacional é uma empresa que nasceu
            com o propósito de facilitar o acesso à educação financeira. Acreditamos que o
            conhecimento financeiro é fundamental para o desenvolvimento pessoal e profissional,
            e trabalhamos para torná-lo acessível a todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Democratizar a educação financeira, oferecendo soluções inovadoras e acessíveis para
              todos os públicos.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground">
              Compromisso com a excelência, ética e transparência em todas as nossas ações e
              programas educacionais.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser referência em educação financeira, transformando vidas através do conhecimento e
              da capacitação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
