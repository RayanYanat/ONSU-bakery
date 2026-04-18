import { useEffect, useRef } from 'react';

const items = [
  {
    num: '01',
    name: 'Wagyu Beef Curry Bun',
    description: "A paper-thin shell. Slow-cooked wagyu. Pull one fresh from the oven or don't bother.",
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200&q=90',
  },
  {
    num: '02',
    name: 'Salted Egg Yolk Mille-Feuille',
    description: 'Layers of caramelised pastry, salted egg custard, precision.',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=1200&q=90',
  },
  {
    num: '03',
    name: 'Popcorn & Miso Caramel Paris-Brest',
    description: 'Miso caramel runs through every layer. Bold, nostalgic, intentional.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90',
  },
  {
    num: '04',
    name: 'Oolong & Milk Chocolate Tart',
    description: 'The tart that made people queue in the rain.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=90',
  },
  {
    num: '05',
    name: 'Seaweed Croissant',
    description: 'Buttery layers with a whisper of the ocean.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=90',
  },
  {
    num: '06',
    name: '–86° Dirty Coffee',
    description: 'Hot espresso. Glass frozen at –86°C. Order it.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=90',
  },
];

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.reveal').forEach((t) => t.classList.add('is-visible'));
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function MenuItem({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useReveal(0.06);
  const imageLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="menu-row flex flex-col md:flex-row md:h-[540px]"
      style={{
        flexDirection: imageLeft ? undefined : 'row-reverse',
        borderTop: '1px solid rgba(250, 247, 242, 0.07)',
      } as React.CSSProperties}
    >
      <div className="menu-img-wrap w-full md:w-[60%] h-[50vw] md:h-full flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="reveal w-full md:w-[40%] flex flex-col justify-center px-8 md:px-14 py-10 md:py-0"
        style={{ background: '#1A1612' }}
      >
        <span
          className="font-sans font-light block mb-5"
          style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#B8965A' }}
        >
          {item.num}
        </span>
        <div className="menu-title-wrap mb-5">
          <h3
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(26px, 2.5vw, 38px)',
              lineHeight: 1.1,
              color: '#FAF7F2',
            }}
          >
            {item.name}
          </h3>
          <div className="menu-title-line" />
        </div>
        <p
          className="font-sans font-light"
          style={{
            fontSize: '14px',
            maxWidth: '320px',
            lineHeight: 1.8,
            letterSpacing: '0.06em',
            color: 'rgba(250, 247, 242, 0.45)',
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Signature() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" style={{ background: '#1A1612' }} className="pt-24 md:pt-32">
      <div className="px-6 md:px-12 mb-12 md:mb-16 overflow-hidden">
        <div ref={titleRef} className="reveal">
          <h2
            className="font-serif font-light italic whitespace-nowrap"
            style={{
              fontSize: 'clamp(60px, 8vw, 100px)',
              lineHeight: 1,
              color: '#FAF7F2',
            }}
          >
            The Menu
          </h2>
        </div>
      </div>

      <div className="flex flex-col">
        {items.map((item, i) => (
          <MenuItem key={item.num} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
