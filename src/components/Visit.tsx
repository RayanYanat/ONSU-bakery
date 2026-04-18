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
      className="noise-texture bg-onsu-bg min-h-screen flex items-center justify-center"
      style={{ borderTop: '1px solid rgba(242, 237, 228, 0.04)' }}
    >
      <div ref={ref} className="text-center px-6 max-w-xl">
        <div className="reveal">
          <h2
            className="font-serif font-light italic text-onsu-cream mb-12"
            style={{ fontSize: 'clamp(64px, 9vw, 96px)', lineHeight: 0.95 }}
          >
            Find us.
          </h2>
        </div>

        <div className="reveal" style={{ transitionDelay: '150ms' }}>
          <div
            className="w-6 h-px mx-auto mb-12"
            style={{ background: 'rgba(212, 168, 83, 0.35)' }}
          />
          <div
            className="font-sans font-light text-onsu-cream/50 mb-1"
            style={{ fontSize: '13px', letterSpacing: '0.15em' }}
          >
            55A Dean Street, Soho, London W1D 6AG
          </div>
          <div
            className="font-sans font-light text-onsu-cream/30 mb-1"
            style={{ fontSize: '13px', letterSpacing: '0.15em' }}
          >
            Monday – Friday &nbsp;·&nbsp; 12pm – 9pm
          </div>
          <div
            className="font-sans font-light text-onsu-cream/30 mb-14"
            style={{ fontSize: '13px', letterSpacing: '0.15em' }}
          >
            Saturday – Sunday &nbsp;·&nbsp; 11am – 9pm
          </div>
          <a
            href="https://instagram.com/onsubakery"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-light text-onsu-gold hover:text-onsu-cream transition-colors duration-400"
            style={{
              fontSize: '13px',
              letterSpacing: '0.15em',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(212, 168, 83, 0.35)',
              textUnderlineOffset: '5px',
              transition: 'color 0.4s ease, text-decoration-color 0.4s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'rgba(242, 237, 228, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = 'rgba(212, 168, 83, 0.35)';
            }}
          >
            → @onsubakery
          </a>
        </div>
      </div>
    </section>
  );
}
