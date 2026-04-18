import { useEffect, useRef } from 'react';

export default function Visit() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

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
      img.style.transform = `translateY(${progress * 50}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="visit"
      className="relative"
      style={{
        background: '#FAF7F2',
        borderTop: '1px solid rgba(26, 22, 18, 0.07)',
      }}
    >
      <div className="flex flex-col md:flex-row" style={{ minHeight: '85vh' }}>
        <div
          className="relative overflow-hidden w-full md:w-1/2 flex-shrink-0"
          style={{ minHeight: '60vw', maxHeight: '85vh' }}
        >
          <div
            ref={imgRef}
            className="absolute inset-0"
            style={{ transform: 'scale(1.08)', willChange: 'transform' }}
          >
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=90"
              alt="ONSU bakery interior"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.88) saturate(0.8)' }}
              loading="lazy"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent 65%, #FAF7F2 100%)',
            }}
          />
        </div>

        <div
          ref={ref}
          className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0"
          style={{ background: '#FAF7F2' }}
        >
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <p
              className="font-sans font-light mb-8"
              style={{
                fontSize: '10px',
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: '#B8965A',
              }}
            >
              Dean Street, Soho
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <h2
              className="font-serif font-light italic mb-12"
              style={{
                fontSize: 'clamp(44px, 6vw, 78px)',
                lineHeight: 0.95,
                color: '#1A1612',
              }}
            >
              Find us<br />in the queue.
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '240ms' }}>
            <div className="w-6 h-px mb-10" style={{ background: 'rgba(184, 150, 90, 0.4)' }} />

            <div className="flex flex-col gap-2 mb-10">
              <p
                className="font-sans font-light"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  color: 'rgba(26, 22, 18, 0.65)',
                  lineHeight: 1.7,
                }}
              >
                55A Dean Street
              </p>
              <p
                className="font-sans font-light"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  color: 'rgba(26, 22, 18, 0.65)',
                  lineHeight: 1.7,
                }}
              >
                Soho, London W1D 6AG
              </p>
            </div>

            <div
              className="flex flex-col gap-3 mb-12"
              style={{ borderTop: '1px solid rgba(26, 22, 18, 0.07)', paddingTop: '20px' }}
            >
              <div className="flex justify-between">
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(26, 22, 18, 0.45)' }}
                >
                  Mon – Fri
                </span>
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(26, 22, 18, 0.55)' }}
                >
                  12pm – 9pm
                </span>
              </div>
              <div className="flex justify-between">
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(26, 22, 18, 0.45)' }}
                >
                  Sat – Sun
                </span>
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'rgba(26, 22, 18, 0.55)' }}
                >
                  11am – 9pm
                </span>
              </div>
            </div>

            <a
              href="https://instagram.com/onsubakery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light inline-flex items-center gap-3"
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#1A1612',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(26, 22, 18, 0.2)',
                paddingBottom: '4px',
                transition: 'color 0.35s ease, border-color 0.35s ease',
              }}
              onMouseEnter={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = '#B8965A';
                a.style.borderBottomColor = '#B8965A';
              }}
              onMouseLeave={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = '#1A1612';
                a.style.borderBottomColor = 'rgba(26, 22, 18, 0.2)';
              }}
            >
              @onsubakery
              <span style={{ fontSize: '14px' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
