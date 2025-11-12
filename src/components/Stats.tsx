import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Vidas Impactadas",
  },
  {
    icon: GraduationCap,
    value: 150,
    suffix: "+",
    label: "Cursos Realizados",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Empresas Atendidas",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Satisfação",
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

    const duration = 2000; // 2 seconds
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full mb-3 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
