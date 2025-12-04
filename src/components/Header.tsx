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
    { name: "SAFE Kids", path: "/safe-kids", color: "bg-orange-500" },
    { name: "Finanças em Foco", path: "/financas-em-foco", color: "bg-amber-500" },
    { name: "Rumo à Liberdade", path: "/rumo-liberdade", color: "bg-yellow-500" },
    { name: "SAFE Company", path: "/safe-company", color: "bg-emerald-500" },
    { name: "SAFETY", path: "/safety", color: "bg-violet-500" },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={safeLogo} 
              alt="SAFE Educação Financeira" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12 md:h-14'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:bg-primary/10 hover:text-primary' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Início
            </Link>
            
            <button
              onClick={() => scrollToSection("sobre")}
              className={`px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:bg-primary/10 hover:text-primary' 
                  : 'text-white hover:bg-white/10'
              }`}
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
                className={`px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-foreground hover:bg-primary/10 hover:text-primary' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Programas
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden z-[100] animate-scale-in border border-border/50">
                  <div className="p-2">
                    {programs.map((program) => (
                      <Link
                        key={program.path}
                        to={program.path}
                        onClick={() => {
                          setIsProgramsOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-all duration-200 group"
                      >
                        <div className={`w-2.5 h-2.5 rounded-full ${program.color}`}></div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {program.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/safe-stories")}
              className={`px-4 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:bg-primary/10 hover:text-primary' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              SAFE Stories
            </button>
            
            <Link
              to="/contato"
              className={`ml-2 px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg' 
                  : 'bg-white text-primary hover:bg-white/90 shadow-lg'
              }`}
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-scale-in shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors font-semibold text-lg"
            >
              Início
            </Link>
            
            <button
              onClick={() => scrollToSection("sobre")}
              className="px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors font-semibold text-lg text-left"
            >
              Sobre
            </button>
            
            {/* Mobile Programs Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors font-semibold text-lg flex items-center justify-between"
              >
                Programas
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileProgramsOpen && (
                <div className="mt-2 ml-4 space-y-1 animate-scale-in">
                  {programs.map((program) => (
                    <Link
                      key={program.path}
                      to={program.path}
                      onClick={() => {
                        setIsMobileProgramsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors font-medium"
                    >
                      <div className={`w-2 h-2 rounded-full ${program.color}`}></div>
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
              className="px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors font-semibold text-lg text-left"
            >
              SAFE Stories
            </button>
            
            <Link
              to="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 rounded-xl bg-accent text-white font-bold text-lg text-center shadow-md"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
