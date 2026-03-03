import chapaSmash from "@/assets/chapa-smash.jpg";
import duploBacon from "@/assets/duplo-bacon.jpg";
import cheddarExplosion from "@/assets/cheddar-explosion.jpg";
import espetinhoCarne from "@/assets/espetinho-carne.jpg";
import espetinhoFrango from "@/assets/espetinho-frango.jpg";
import espetinhoQueijo from "@/assets/espetinho-queijo.jpg";
import pastelCarne from "@/assets/pastel-carne.jpg";
import pastelQueijo from "@/assets/pastel-queijo.jpg";
import pastelPizza from "@/assets/pastel-pizza.jpg";
import refrigerante from "@/assets/refrigerante.jpg";
import sucoNatural from "@/assets/suco-natural.jpg";
import agua from "@/assets/agua.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Hambúrgueres",
    emoji: "🍔",
    items: [
      { name: "Chapa Smash", description: "Blend bovino 120g, queijo, alface, tomate e molho especial", price: "R$ 22,90", image: chapaSmash },
      { name: "Duplo Bacon", description: "Dois blends 120g, bacon crocante, cheddar e cebola caramelizada", price: "R$ 32,90", image: duploBacon },
      { name: "Cheddar Explosion", description: "Blend 180g coberto com cheddar cremoso derretido e picles", price: "R$ 28,90", image: cheddarExplosion },
    ],
  },
  {
    title: "Espetinhos",
    emoji: "🔥",
    items: [
      { name: "Carne", description: "Cubos de carne bovina temperados na brasa", price: "R$ 12,90", image: espetinhoCarne },
      { name: "Frango", description: "Espetinho de frango suculento grelhado", price: "R$ 10,90", image: espetinhoFrango },
      { name: "Queijo Coalho", description: "Queijo coalho grelhado com mel e orégano", price: "R$ 9,90", image: espetinhoQueijo },
    ],
  },
  {
    title: "Pastéis",
    emoji: "🥟",
    items: [
      { name: "Carne", description: "Pastel crocante recheado com carne moída temperada", price: "R$ 8,90", image: pastelCarne },
      { name: "Queijo", description: "Pastel com queijo muçarela derretido", price: "R$ 7,90", image: pastelQueijo },
      { name: "Pizza", description: "Pastel com muçarela, tomate e orégano", price: "R$ 8,90", image: pastelPizza },
    ],
  },
  {
    title: "Bebidas",
    emoji: "🥤",
    items: [
      { name: "Refrigerante", description: "Lata 350ml — diversos sabores", price: "R$ 6,00", image: refrigerante },
      { name: "Suco Natural", description: "Suco de laranja natural 400ml", price: "R$ 8,00", image: sucoNatural },
      { name: "Água", description: "Água mineral 500ml com ou sem gás", price: "R$ 4,00", image: agua },
    ],
  },
];

const MenuCard = ({ item }: { item: MenuItem }) => (
  <div className="group bg-card rounded-xl overflow-hidden hover-lift border border-border">
    <div className="aspect-square overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-display text-xl text-foreground">{item.name}</h4>
        <span className="text-primary font-bold text-lg">{item.price}</span>
      </div>
      <p className="text-muted-foreground text-sm">{item.description}</p>
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <section id="cardapio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-2">Nosso</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">CARDÁPIO</h2>
        </div>

        {menuData.map((category) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <h3 className="font-display text-3xl text-foreground mb-8 flex items-center gap-3">
              <span>{category.emoji}</span>
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
