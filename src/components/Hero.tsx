import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award, Sparkles, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-safe-education.jpg";

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
    { icon: BookOpen, label: "Educação Prática" },
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
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse hidden xl:block" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up space-y-6 md:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-accent/20">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Educação Financeira que Transforma
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              Domine suas{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">finanças</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-accent/30 -rotate-1"></span>
              </span>
              {" "}e construa seu futuro
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl lg:text-2xl text-primary-foreground/80 font-light leading-relaxed max-w-xl">
              Educação financeira prática e acessível para todas as idades.{" "}
              <span className="text-accent font-semibold">Do primeiro cofrinho à independência financeira.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToPrograms}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-gold group"
              >
                Transforme sua vida financeira
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outlineGold" 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById("sobre");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              >
                Conheça nossa história
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
              {/* Main Image with Enhanced Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="SAFE Educação Financeira - Transformando vidas"
                  className="w-full h-[500px] xl:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
                
                {/* Overlay Text on Image */}
                <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
                  <p className="text-lg font-semibold mb-2">Educação Financeira SAFE</p>
                  <p className="text-sm opacity-90">Facilitando o acesso ao conhecimento financeiro</p>
                </div>
              </div>

              {/* Floating Card - Enhanced */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 md:p-6 rounded-2xl shadow-2xl border-2 border-accent/30 animate-scale-in backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-heading font-bold text-foreground">95%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Satisfação dos alunos</div>
                  </div>
                </div>
              </div>

              {/* Decorative Border with Glow */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/40 rounded-3xl -z-10 shadow-lg shadow-accent/20"></div>
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
