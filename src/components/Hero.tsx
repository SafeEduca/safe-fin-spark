import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-financial-education.jpg";

const Hero = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById("programas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Shield, label: "Metodologia Comprovada" },
    { icon: Users, label: "+5000 Vidas Transformadas" },
    { icon: Award, label: "Certificação Reconhecida" },
    { icon: TrendingUp, label: "Resultados Reais" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up space-y-6 md:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
              Educação Financeira de Excelência
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              Transforme sua{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">relação</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-accent/30 -rotate-1"></span>
              </span>{" "}
              com o dinheiro
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl lg:text-2xl text-primary-foreground/80 font-light leading-relaxed max-w-xl">
              Programas práticos e comprovados de educação financeira para todas as idades. 
              <strong className="text-accent font-semibold"> Do básico ao avançado.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToPrograms}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-gold"
              >
                Conheça nossos programas
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button 
                variant="outlineGold" 
                size="lg" 
                onClick={scrollToPrograms}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              >
                Ver depoimentos
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 md:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center gap-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <span className="text-xs text-primary-foreground/70 font-medium leading-tight">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Educação Financeira SAFE"
                  className="w-full h-[500px] xl:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 md:p-6 rounded-2xl shadow-xl border-2 border-accent/20 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-heading font-bold text-foreground">95%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Taxa de Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
