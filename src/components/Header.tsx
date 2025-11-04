import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">
            SAFE<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("programas")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Programas
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Contato
          </button>
          <Button variant="hero" onClick={() => scrollToSection("programas")}>
            Quero Saber Mais
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-scale-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("programas")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
            >
              Contato
            </button>
            <Button variant="hero" onClick={() => scrollToSection("programas")} className="w-full">
              Quero Saber Mais
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
