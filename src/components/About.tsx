import { Target, Heart, Users, Lightbulb, Calendar, Award } from "lucide-react";

const About = () => {
  const values = [
    "Ética", "Transparência", "Inovação", "Responsabilidade", 
    "Diversão", "Respeito", "Empreendedorismo", "Educação"
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Desde 2023</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-6">
            Sobre a <span className="text-accent">SAFE</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">SAFE Educação Financeira</strong> é uma escola de educação financeira 
            que nasceu em 2023 com a missão de facilitar o acesso ao conhecimento sobre finanças, 
            impactando pessoas e transformando vidas.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Utilizamos uma abordagem prática e didática para ajudar as pessoas a desenvolverem 
            habilidades essenciais, promovendo uma relação saudável com o dinheiro. Nosso compromisso 
            é democratizar a educação financeira, criando um legado que possibilite decisões mais 
            conscientes e um futuro financeiro sustentável.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-accent">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full mb-4 md:mb-6">
              <Target className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4">Nossa Missão</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Proporcionar qualidade de vida e transformação através do ensino da educação financeira.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-accent">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full mb-4 md:mb-6">
              <Award className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4">Nossa Visão</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Ser referência nacional em educação financeira, com qualidade reconhecida, alcançando o Brasil e o mundo.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-accent">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full mb-4 md:mb-6">
              <Heart className="w-7 h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4">Nossos Valores</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {values.map((value, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">Por que a SAFE?</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">Ensino leve e prático, focado no dia a dia</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">Programas para todas as idades</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">Metodologia didática e envolvente</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-muted-foreground">Compromisso com a transformação de vidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
