import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import safeLogo from "@/assets/safe-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const navigate = useNavigate();

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
      setIsProgramsOpen(false);
      setIsMobileProgramsOpen(false);
    }
  };

  const programs = [
    { name: "SAFE Kids", path: "/safe-kids" },
    { name: "Finanças em Foco", path: "/financas-em-foco" },
    { name: "Rumo à Liberdade", path: "/rumo-liberdade" },
    { name: "SAFE Company", path: "/safe-company" },
    { name: "SAFETY", path: "/safety" },
  ];

  // Timeout for dropdown to prevent it from closing too fast
  let dropdownTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsProgramsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsProgramsOpen(false);
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={safeLogo} 
            alt="SAFE Educação Financeira" 
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Sobre
          </button>
          
          {/* Programs Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1"
            >
              Programas
              <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProgramsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-[100] animate-scale-in">
                {programs.map((program) => (
                  <Link
                    key={program.path}
                    to={program.path}
                    onClick={() => {
                      setIsProgramsOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 bg-card hover:bg-accent/10 hover:text-accent transition-colors font-medium border-b border-border last:border-b-0"
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/safe-stories")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            SAFE Stories
          </button>
          <Button variant="hero" asChild>
            <Link to="/contato">Contato</Link>
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
            
            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="text-foreground hover:text-accent transition-colors font-medium text-left py-2 flex items-center justify-between w-full"
              >
                Programas
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProgramsOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-scale-in">
                  {programs.map((program) => (
                    <Link
                      key={program.path}
                      to={program.path}
                      onClick={() => {
                        setIsMobileProgramsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-muted-foreground hover:text-accent transition-colors font-medium text-left py-2 w-full"
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                navigate("/safe-stories");
                setIsMobileMenuOpen(false);
              }}
              className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
            >
              SAFE Stories
            </button>
            <Button variant="hero" asChild className="w-full">
              <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
