import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-xl text-primary tracking-wider">CHAPA QUENTE 🔥🔥</p>

        <div className="flex items-center gap-6">
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={22} />
          </a>
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={22} />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={22} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © 2026 Chapa Quente. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
