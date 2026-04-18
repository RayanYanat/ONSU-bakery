import { useEffect, useRef } from 'react';

const items = [
  {
    num: '01',
    name: 'Wagyu Beef Curry Bun',
    description: "A paper-thin shell. Slow-cooked wagyu. Pull one fresh from the oven or don't bother.",
    note: 'Served 12pm – sell out by 2pm',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=2400&q=90',
  },
  {
    num: '02',
    name: 'Salted Egg Yolk Mille-Feuille',
    description: 'Layers of caramelised pastry, salted egg custard, precision. No shortcuts. No apologies.',
    note: 'Weekend special',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=2400&q=90',
  },
  {
    num: '03',
    name: 'Popcorn & Miso Caramel Paris-Brest',
    description: 'Miso caramel runs through every layer. Bold, nostalgic, intentional.',
    note: 'Signature since opening day',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=90',
  },
  {
    num: '04',
    name: 'Oolong & Milk Chocolate Tart',
    description: 'The tart that made people queue in the rain. Again and again.',
    note: 'Most photographed item on the menu',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=2400&q=90',
  },
  {
    num: '05',
    name: 'Seaweed Croissant',
    description: 'Buttery layers with a whisper of the ocean. 96 hours of lamination.',
    note: 'Limited to 30 per day',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=2400&q=90',
  },
  {
    num: '06',
    name: '–86° Dirty Coffee',
    description: 'Hot espresso. Glass frozen at –86°C. The contrast is the point.',
    note: 'Order it',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2400&q=90',
  },
];

function DishSlide({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current?.querySelectorAll<HTMLElement>('.reveal').forEach((t) => t.classList.add('is-visible'));
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const onScroll = () => {
      const rect = img.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - (rect.top + rect.height) / (vh + rect.height);
      const offset = progress * 60;
      img.style.transform = `translateY(${offset}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row"
      style={{
        minHeight: '90vh',
        borderTop: '1px solid rgba(250, 247, 242, 0.06)',
      }}
    >
      <div
        className="relative overflow-hidden w-full md:w-[55%] flex-shrink-0"
        style={{
          minHeight: '50vw',
          order: isEven ? 0 : 1,
        }}
      >
        <div
          ref={imgRef}
          className="absolute inset-0"
          style={{ transform: 'scale(1.08)', willChange: 'transform' }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.82) saturate(0.9)' }}
            loading="lazy"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: isEven
              ? 'linear-gradient(to right, transparent 60%, #1A1612 100%)'
              : 'linear-gradient(to left, transparent 60%, #1A1612 100%)',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '28px',
            left: isEven ? '28px' : 'auto',
            right: isEven ? 'auto' : '28px',
          }}
        >
          <span
            className="font-sans font-light"
            style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(184, 150, 90, 0.7)',
            }}
          >
            {item.note}
          </span>
        </div>
      </div>

      <div
        ref={textRef}
        className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0"
        style={{
          background: '#1A1612',
          order: isEven ? 1 : 0,
        }}
      >
        <div className="reveal" style={{ transitionDelay: '0ms' }}>
          <span
            className="font-sans font-light block mb-6"
            style={{
              fontSize: '10px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#B8965A',
            }}
          >
            {item.num} &nbsp;/&nbsp; 06
          </span>
        </div>

        <div className="reveal" style={{ transitionDelay: '120ms' }}>
          <h3
            className="font-serif font-light italic mb-8"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              lineHeight: 1.05,
              color: '#FAF7F2',
            }}
          >
            {item.name}
          </h3>
        </div>

        <div className="reveal" style={{ transitionDelay: '240ms' }}>
          <div className="w-8 h-px mb-7" style={{ background: 'rgba(184, 150, 90, 0.35)' }} />
          <p
            className="font-sans font-light"
            style={{
              fontSize: '15px',
              lineHeight: 1.85,
              letterSpacing: '0.06em',
              maxWidth: '340px',
              color: 'rgba(250, 247, 242, 0.42)',
            }}
          >
            {item.description}
          </p>
        </div>
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" style={{ background: '#1A1612' }}>
      <div className="relative px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="reveal" ref={titleRef}>
          <h2
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              color: '#FAF7F2',
              letterSpacing: '-0.01em',
            }}
          >
            The Menu
          </h2>
        </div>
        <div
          className="mt-8 flex items-end justify-between"
          style={{ borderTop: '1px solid rgba(250, 247, 242, 0.07)', paddingTop: '20px' }}
        >
          <span
            className="font-sans font-light"
            style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(250, 247, 242, 0.2)' }}
          >
            Six dishes. No compromise.
          </span>
          <span
            className="font-sans font-light"
            style={{ fontSize: '11px', letterSpacing: '0.28em', color: 'rgba(250, 247, 242, 0.18)' }}
          >
            Soho, London
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {items.map((item, i) => (
          <DishSlide key={item.num} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
