import { MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-2">Fale conosco</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">CONTATO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display text-xl text-foreground mb-2">ENDEREÇO</h4>
            <p className="text-muted-foreground text-sm">Rua das Chapas, 123<br />Centro — São Paulo, SP</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display text-xl text-foreground mb-2">HORÁRIO</h4>
            <p className="text-muted-foreground text-sm">Ter a Dom: 18h às 23h<br />Segunda: Fechado</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display text-xl text-foreground mb-2">TELEFONE</h4>
            <p className="text-muted-foreground text-sm">(55) 99999-9999</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-glow"
          >
            📱 Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
