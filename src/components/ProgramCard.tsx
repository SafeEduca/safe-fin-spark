import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  onCTAClick: () => void;
  ctaText?: string;
  variant?: "default" | "dark";
}

const ProgramCard = ({
  title,
  description,
  image,
  highlights,
  onCTAClick,
  ctaText = "Saiba Mais",
  variant = "default",
}: ProgramCardProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
        isDark ? "bg-primary text-primary-foreground" : "bg-card"
      }`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h3
          className={`text-2xl font-heading font-bold mb-4 ${
            isDark ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-6 leading-relaxed ${
            isDark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              <span
                className={`${isDark ? "text-primary-foreground/90" : "text-foreground"}`}
              >
                {highlight}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant={isDark ? "hero" : "default"}
          size="lg"
          onClick={onCTAClick}
          className="w-full"
        >
          {ctaText}
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
