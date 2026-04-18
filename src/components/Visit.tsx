import { useEffect, useRef } from 'react';

export default function Visit() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="visit"
      className="noise-texture min-h-screen flex items-center justify-center"
      style={{
        background: '#FAF7F2',
        borderTop: '1px solid rgba(26, 22, 18, 0.08)',
      }}
    >
      <div ref={ref} className="text-center px-6 max-w-xl">
        <div className="reveal">
          <h2
            className="font-serif font-light italic mb-14"
            style={{
              fontSize: 'clamp(64px, 9vw, 96px)',
              lineHeight: 0.95,
              color: '#1A1612',
            }}
          >
            Find us.
          </h2>
        </div>

        <div className="reveal" style={{ transitionDelay: '180ms' }}>
          <div
            className="w-6 h-px mx-auto mb-12"
            style={{ background: 'rgba(184, 150, 90, 0.4)' }}
          />
          <div
            className="font-sans font-light mb-2"
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: 'rgba(26, 22, 18, 0.6)',
            }}
          >
            55A Dean Street, Soho, London W1D 6AG
          </div>
          <div
            className="font-sans font-light mb-1"
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: 'rgba(26, 22, 18, 0.38)',
            }}
          >
            Monday – Friday &nbsp;·&nbsp; 12pm – 9pm
          </div>
          <div
            className="font-sans font-light mb-14"
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: 'rgba(26, 22, 18, 0.38)',
            }}
          >
            Saturday – Sunday &nbsp;·&nbsp; 11am – 9pm
          </div>
          <a
            href="https://instagram.com/onsubakery"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-light"
            style={{
              fontSize: '13px',
              letterSpacing: '0.18em',
              color: '#B8965A',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(184, 150, 90, 0.35)',
              textUnderlineOffset: '5px',
              transition: 'color 0.4s ease, text-decoration-color 0.4s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = '#1A1612';
              el.style.textDecorationColor = 'rgba(26, 22, 18, 0.3)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = '#B8965A';
              el.style.textDecorationColor = 'rgba(184, 150, 90, 0.35)';
            }}
          >
            → @onsubakery
          </a>
        </div>
      </div>
    </section>
  );
}
