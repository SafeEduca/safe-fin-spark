import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import safeLogo from "@/assets/safe-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Top Section with Logo */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src={safeLogo} 
            alt="SAFE Educação Financeira" 
            className="h-20 md:h-24 mb-4 drop-shadow-lg"
          />
          <p className="text-white/70 text-center max-w-lg text-lg italic">
            "Transformar financeiramente é investir no futuro de todas as gerações!"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/safe-stories"
                  className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  SAFE Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Programas</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/safe-kids" className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  SAFE Kids
                </Link>
              </li>
              <li>
                <Link to="/financas-em-foco" className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  Finanças em Foco
                </Link>
              </li>
              <li>
                <Link to="/rumo-liberdade" className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                  Rumo à Liberdade
                </Link>
              </li>
              <li>
                <Link to="/safe-company" className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  SAFE Company
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  SAFETY
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="https://wa.me/5546933005265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors duration-300 pt-2"
                >
                  (46) 93300-5265
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <a
                  href="mailto:contato@safeeduca.com.br"
                  className="text-white/70 hover:text-accent transition-colors duration-300 text-sm pt-2 break-all"
                >
                  contato@safeeduca.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/70 text-sm pt-2">
                  Rua Lidio Oltramari 1628, Sala 19<br />
                  Parque Tecnológico de Pato Branco
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-accent">Redes Sociais</h4>
            <p className="text-white/70 text-sm mb-6">
              Siga-nos nas redes sociais e fique por dentro das novidades!
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/safeeduca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://br.linkedin.com/company/safe-educa%C3%A7%C3%A3o-financeira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/safeeduca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} SAFE Educação Financeira. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>Feito com</span>
              <span className="text-red-500 animate-pulse">❤</span>
              <span>em Pato Branco - PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
