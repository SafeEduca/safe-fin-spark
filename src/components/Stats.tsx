import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1500,
    suffix: "+",
    label: "Vidas Impactadas",
    description: "Pessoas transformadas financeiramente",
  },
  {
    icon: GraduationCap,
    value: 50,
    suffix: "+",
    label: "Cursos e Workshops",
    description: "Experiências de aprendizado únicas",
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = stat.value;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(currentCount);
            return newCounters;
          });
        }
      }, interval);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Decorative icons floating */}
      <div className="absolute top-1/4 left-[10%] animate-pulse opacity-20">
        <Sparkles className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] animate-pulse opacity-20" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-10 h-10 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Nosso <span className="text-accent">Impacto</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Números que refletem nossa missão de transformar vidas através da educação financeira
          </p>
        </div>

        {/* Stats cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 text-center transition-all duration-500 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500"></div>
                  
                  {/* Icon container */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent" />
                  </div>
                  
                  {/* Counter */}
                  <div className="relative text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-3 tracking-tight">
                    {counters[index]}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="relative text-xl md:text-2xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <p className="relative text-sm md:text-base text-white/60">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative bottom line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
