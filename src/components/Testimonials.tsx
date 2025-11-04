import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe de aluno SAFE Kids",
    content:
      "Meu filho aprendeu a poupar e entender o valor do dinheiro de uma forma incrível. O programa é lúdico e educativo!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Participante Finanças em Foco",
    content:
      "Consegui organizar minhas finanças e começar a investir. O curso mudou completamente minha relação com o dinheiro.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "RH Manager - Empresa Parceira",
    content:
      "O programa SAFE Company trouxe uma melhoria significativa no bem-estar financeiro dos nossos colaboradores.",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Empreendedor",
    content:
      "As ferramentas e conhecimentos que adquiri foram essenciais para o crescimento do meu negócio.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            O que dizem sobre <span className="text-accent">nós</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-accent/20" />
            
            <div className="relative z-10 animate-fade-in-up" key={currentIndex}>
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">★</span>
                ))}
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Depoimento anterior"
              >
                <ChevronLeft />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-accent w-8" : "bg-muted"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Próximo depoimento"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
