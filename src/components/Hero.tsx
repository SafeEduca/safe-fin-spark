import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-safe-education.jpg";

const Hero = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById("programas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "+5000", label: "Vidas Transformadas" },
    { value: "98%", label: "Satisfação" },
    { value: "+50", label: "Empresas Parceiras" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SAFE Educação Financeira"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up space-y-6 sm:space-y-8">
            {/* Impact Phrase */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-[1.15]">
                <span className="block">Transformar</span>
                <span className="block">financeiramente é</span>
                <span className="block text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                  investir no futuro
                </span>
                <span className="block">de todas as gerações!</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Educação financeira prática e acessível para todas as idades.{" "}
              <span className="text-accent font-semibold">Do primeiro cofrinho à independência financeira.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPrograms}
                className="bg-accent hover:bg-accent/90 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Conheça nossos programas
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full backdrop-blur-sm"
              >
                <Link to="/safe-stories">
                  <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                  Ver depoimentos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-6 sm:pt-8 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-accent">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-[2rem] blur-xl"></div>
              
              {/* Feature Cards */}
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Metodologia", desc: "Comprovada" },
                  { icon: Users, title: "Comunidade", desc: "Engajada" },
                  { icon: TrendingUp, title: "Resultados", desc: "Reais" },
                  { icon: Award, title: "Certificação", desc: "Reconhecida" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Recomendam</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
