import { useEffect, useRef, useState } from 'react';

const items = [
  {
    index: '01',
    name: 'Wagyu Beef Curry Bun',
    origin: 'Tokyo Bakery — Parisian Form',
    description:
      'A2 Wagyu braised low and slow in a 36-hour Kare roux, encased in a pillow-soft milk bread shell. Panko-crusted and deep-fried to a lacquered bronze. The city\'s most obsessed-over bun.',
    note: 'Served warm. Limited daily.',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '02',
    name: 'Salted Egg Yolk Mille Feuille',
    origin: 'Hong Kong Soul — French Discipline',
    description:
      'Twelve layers of hand-laminated pâte feuilletée, caramelised on both sides. Pastry cream infused with cured salted egg yolk, finished with a mirror glaze that fractures at first touch.',
    note: 'Best consumed within 10 minutes.',
    image: 'https://images.pexels.com/photos/3929292/pexels-photo-3929292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '03',
    name: 'Popcorn Miso Caramel Paris Brest',
    origin: 'Umami Architecture',
    description:
      'Choux baked to a hollow drum, filled with Shiro miso praline crème mousseline, ribboned with burnt caramel made from popped Niigata rice. The umami here is not a note — it is the score.',
    note: 'Gluten-aware option available.',
    image: 'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '04',
    name: 'Minus 86° Coffee',
    origin: 'Cryogenic Precision',
    description:
      'Single-origin Yirgacheffe drawn as an ultra-cold espresso concentrate, then nitrogen-frozen to −86°C. Served as a shattered crystalline shard over heated volcanic milk. It begins solid and ends liquid.',
    note: 'Prepared to order. Three minutes.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function SignatureCard({ item, index }: { item: typeof items[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative border border-onsu-border hover:border-onsu-gold/40 transition-all duration-700 cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms`, transition: 'opacity 0.8s ease, transform 0.8s ease, border-color 0.4s ease' }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onsu-black via-onsu-black/20 to-transparent" />
        <div className={`absolute inset-0 bg-onsu-black/30 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`} />

        <span className="absolute top-5 left-5 font-serif text-5xl font-light text-onsu-cream/20">
          {item.index}
        </span>
      </div>

      <div className="p-6 md:p-8 bg-onsu-panel">
        <p className="font-sans text-xs tracking-widest uppercase text-onsu-gold mb-3">
          {item.origin}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-light text-onsu-cream mb-4 leading-tight">
          {item.name}
        </h3>
        <div className="w-8 h-px bg-onsu-gold/60 mb-4" />
        <p className="font-sans text-sm font-light text-onsu-chrome leading-relaxed mb-5">
          {item.description}
        </p>
        <p className="font-sans text-xs tracking-wide text-onsu-muted italic">
          {item.note}
        </p>
      </div>
    </div>
  );
}

export default function Signature() {
  return (
    <section id="menu" className="bg-onsu-black py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="font-sans text-xs tracking-ultra uppercase text-onsu-gold mb-4">
              The Menu
            </p>
            <h2 className="font-serif font-light text-onsu-cream text-5xl md:text-7xl leading-none">
              Signature<br />
              <span className="italic">Pieces</span>
            </h2>
          </div>
          <p className="font-sans text-sm font-light text-onsu-chrome max-w-xs leading-relaxed md:text-right">
            Each creation exists at the intersection of culinary heritage and technical obsession. Nothing is here by accident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-onsu-border">
          {items.map((item, i) => (
            <div key={item.index} className="bg-onsu-black">
              <SignatureCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
