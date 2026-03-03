import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal da Chapa Quente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in-up">
            Hamburgueria Artesanal
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            O SABOR QUE CHEGA{" "}
            <span className="text-gradient">QUENTE</span>{" "}
            ATÉ VOCÊ!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Hambúrgueres artesanais feitos com ingredientes selecionados e muito amor na chapa.
          </p>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-glow animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            🔥 Peça pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
