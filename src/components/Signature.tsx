import { useEffect, useRef } from 'react';

const items = [
  {
    name: 'Wagyu Beef Curry Bun',
    description: 'A paper-thin shell. Slow-cooked wagyu. Pull one fresh from the oven or don\'t bother.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800',
  },
  {
    name: 'Salted Egg Yolk Mille-Feuille',
    description: 'Layers of caramelised pastry, salted egg custard, and precision.',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=800',
  },
  {
    name: 'Popcorn & Miso Caramel Paris-Brest',
    description: 'Miso caramel runs through every layer. Bold, nostalgic, intentional.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  },
  {
    name: 'Oolong & Milk Chocolate Tart',
    description: 'Floral, bitter, perfectly balanced. The tart that made people queue in the rain.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
  },
  {
    name: 'Seaweed Croissant',
    description: 'Umami-forward. Buttery layers with a whisper of the ocean.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
  },
  {
    name: '–86° Dirty Coffee',
    description: 'Hot espresso poured into a glass frozen at –86°C. Shanghai\'s viral trend, now on Dean Street.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
  },
];

function MenuItem({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="overflow-hidden aspect-[4/3] mb-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
      <h3 className="font-serif font-light text-onsu-cream text-2xl md:text-3xl mb-2 leading-snug">
        {item.name}
      </h3>
      <p className="font-sans font-light text-onsu-cream/50 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function Signature() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="bg-onsu-bg py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headRef} className="reveal mb-16 md:mb-20">
          <h2 className="font-serif font-light italic text-onsu-cream text-5xl md:text-7xl leading-none">
            The Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
          {items.map((item, i) => (
            <MenuItem key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
