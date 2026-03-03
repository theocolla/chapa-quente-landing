const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-2">Conheça</p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">SOBRE NÓS</h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
          A <span className="text-primary font-semibold">Chapa Quente</span> nasceu da paixão por hambúrgueres artesanais feitos com ingredientes frescos e selecionados. Nossa missão é entregar sabor de qualidade com rapidez, direto da chapa para a sua mesa.
        </p>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Cada receita é desenvolvida com carinho, usando blends exclusivos e pães artesanais. Venha sentir o calor da nossa chapa! 🔥
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
