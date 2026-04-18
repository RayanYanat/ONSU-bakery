import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [queueMin] = useState(47);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.38}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', background: '#0D0B09' }}
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{
          transform: 'scale(1.08)',
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=2400&q=90"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.38) saturate(0.7)' }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,11,9,0.0) 0%, rgba(13,11,9,0.55) 60%, rgba(13,11,9,0.95) 100%)',
        }}
      />

      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-14 md:pb-20">
        <div className="mb-8">
          <p
            className="hero-body font-sans font-light mb-6"
            style={{
              fontSize: '10px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#B8965A',
              animationDelay: '0.2s',
            }}
          >
            Asian Bakery &amp; Patisserie &nbsp;·&nbsp; Soho, London
          </p>

          <h1
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(52px, 9vw, 120px)',
              lineHeight: 0.95,
              color: '#FAF7F2',
              maxWidth: '900px',
            }}
          >
            <span
              className="hero-word block"
              style={{ animationDelay: '0.4s' }}
            >
              Where craft
            </span>
            <span
              className="hero-word block"
              style={{ animationDelay: '0.65s', color: '#B8965A' }}
            >
              defies
            </span>
            <span
              className="hero-word block"
              style={{ animationDelay: '0.9s' }}
            >
              tradition.
            </span>
          </h1>
        </div>

        <div
          className="hero-body flex flex-col md:flex-row md:items-end gap-6 md:gap-0 md:justify-between"
          style={{ animationDelay: '1.4s' }}
        >
          <p
            className="font-sans font-light"
            style={{
              fontSize: '14px',
              lineHeight: 1.8,
              letterSpacing: '0.07em',
              maxWidth: '380px',
              color: 'rgba(250, 247, 242, 0.45)',
            }}
          >
            Parisian technique. Japanese precision.<br />
            Ingredients that refuse compromise.
          </p>

          <div className="flex items-center gap-5">
            <div
              className="text-right"
              style={{ borderLeft: '1px solid rgba(184, 150, 90, 0.3)', paddingLeft: '20px' }}
            >
              <div
                className="font-sans font-light"
                style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#B8965A', textTransform: 'uppercase', marginBottom: '4px' }}
              >
                Today's wait
              </div>
              <div
                className="font-serif italic"
                style={{ fontSize: '28px', color: '#FAF7F2', lineHeight: 1 }}
              >
                {queueMin} min
              </div>
            </div>

            <a
              href="#menu"
              className="font-sans font-light"
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FAF7F2',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '1px solid rgba(184, 150, 90, 0.4)',
                paddingBottom: '3px',
                transition: 'color 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = '#B8965A';
                a.style.borderBottomColor = '#B8965A';
              }}
              onMouseLeave={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = '#FAF7F2';
                a.style.borderBottomColor = 'rgba(184, 150, 90, 0.4)';
              }}
            >
              View the menu
              <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-6">
        <div className="relative h-14 w-px overflow-hidden">
          <div
            className="scroll-indicator-line absolute inset-x-0 h-full"
            style={{ background: 'rgba(184, 150, 90, 0.5)' }}
          />
        </div>
      </div>
    </section>
  );
}
