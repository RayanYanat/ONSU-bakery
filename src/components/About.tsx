import { useEffect, useRef } from 'react';

const credentials = [
  'The Dorchester',
  'The Fat Duck',
  'Ladurée',
  'Hakkasan',
];

const titles = [
  { label: 'UK Sugar Champion', year: '2019' },
  { label: 'European Cup Champion', year: '2020' },
  { label: 'Pastry Chef of the Year', year: '2022' },
];

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [titleRef, credentialsRef, titlesRef];
    refs.forEach((r, i) => {
      const el = r.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('.reveal').forEach((t, j) => {
              t.style.transitionDelay = `${i * 80 + j * 120}ms`;
              t.classList.add('is-visible');
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section
      id="about"
      style={{ background: '#FAF7F2', borderTop: '1px solid rgba(26, 22, 18, 0.07)' }}
    >
      <div className="px-6 md:px-12 pt-24 md:pt-36 pb-0">
        <div ref={titleRef} className="mb-0">
          <div className="reveal overflow-hidden">
            <p
              className="font-sans font-light mb-8"
              style={{
                fontSize: '10px',
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                color: '#B8965A',
              }}
            >
              Founder — Michael Kwan
            </p>
          </div>
          <div className="reveal overflow-hidden">
            <h2
              className="font-serif font-light italic"
              style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.95,
                color: '#1A1612',
                maxWidth: '820px',
              }}
            >
              Trained in the world's finest kitchens.
            </h2>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(26, 22, 18, 0.08)',
          marginTop: '60px',
        }}
      >
        <div ref={credentialsRef} className="px-6 md:px-12 py-16 md:py-24">
          <p
            className="font-sans font-light mb-10"
            style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(26, 22, 18, 0.32)',
            }}
          >
            Alumni of
          </p>
          <div className="flex flex-col">
            {credentials.map((c, i) => (
              <div
                key={c}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3
                  className="font-serif font-light italic"
                  style={{
                    fontSize: 'clamp(42px, 6.5vw, 88px)',
                    lineHeight: 1.05,
                    color: '#1A1612',
                    borderBottom: i < credentials.length - 1 ? '1px solid rgba(26, 22, 18, 0.08)' : 'none',
                    paddingBottom: '12px',
                    marginBottom: '8px',
                  }}
                >
                  {c}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={titlesRef}
          className="px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row md:items-start gap-0"
          style={{ borderTop: '1px solid rgba(26, 22, 18, 0.07)' }}
        >
          <div
            className="mb-10 md:mb-0 md:w-1/3 flex-shrink-0"
            style={{ paddingRight: '40px' }}
          >
            <p
              className="font-sans font-light"
              style={{
                fontSize: '10px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(26, 22, 18, 0.32)',
              }}
            >
              Recognition
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col">
            {titles.map((t, i) => (
              <div
                key={t.label}
                className="reveal flex items-baseline justify-between py-5"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  borderBottom: '1px solid rgba(26, 22, 18, 0.07)',
                }}
              >
                <span
                  className="font-serif font-light italic"
                  style={{
                    fontSize: 'clamp(20px, 2.5vw, 30px)',
                    color: '#1A1612',
                    lineHeight: 1.1,
                  }}
                >
                  {t.label}
                </span>
                <span
                  className="font-sans font-light flex-shrink-0 ml-6"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.25em',
                    color: 'rgba(26, 22, 18, 0.28)',
                  }}
                >
                  {t.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
