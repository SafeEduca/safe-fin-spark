import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              SAFE<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Safe Educação Financeira
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Facilitando o acesso à educação financeira e transformando vidas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/safe-stories"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  SAFE Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Programas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/safe-kids" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  SAFE Kids
                </Link>
              </li>
              <li>
                <Link to="/financas-em-foco" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Finanças em Foco
                </Link>
              </li>
              <li>
                <Link to="/rumo-liberdade" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Rumo à Liberdade
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  SAFETY
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/5546933005265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (46) 93300-5265
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@safeeduca.com.br"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm md:text-base break-all"
                >
                  contato@safeeduca.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua Lidio Oltramari 1628, Sala 19<br />
                  Parque Tecnológico de Pato Branco
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {currentYear} SAFE Educação Financeira. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/safeeducafinanceira/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/safeeducafinanceira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/safeeducafinanceira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
