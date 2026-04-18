import { useEffect, useRef } from 'react';

const featuredQuote = {
  text: '"Almost-too-pretty-to-eat — and yet somehow even better than it looks."',
  source: 'The Infatuation',
  date: 'March 2025',
};

const otherQuotes = [
  {
    text: '"Queues down Dean Street since day one. The hype is entirely justified."',
    source: 'Hot Dinners',
    date: 'Jan 2025',
  },
  {
    text: '"A precision kitchen operating at a level Soho has not seen before."',
    source: 'Time Out London',
    date: 'Feb 2025',
  },
  {
    text: '"Each bite contains a reference you\'ll spend weeks trying to trace."',
    source: 'The Sunday Times',
    date: 'Apr 2025',
  },
];

export default function Press() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [ref, gridRef];
    els.forEach((r) => {
      const el = r.current;
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
    });
  }, []);

  return (
    <section
      id="press"
      style={{
        background: '#1A1612',
        borderTop: '1px solid rgba(250, 247, 242, 0.06)',
      }}
    >
      <div ref={ref} className="px-6 md:px-12 pt-24 md:pt-36">
        <div className="reveal mb-4">
          <p
            className="font-sans font-light"
            style={{
              fontSize: '10px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(250, 247, 242, 0.28)',
            }}
          >
            As seen in
          </p>
        </div>
        <div
          className="reveal py-16 md:py-24"
          style={{
            borderTop: '1px solid rgba(250, 247, 242, 0.07)',
            borderBottom: '1px solid rgba(250, 247, 242, 0.07)',
          }}
        >
          <blockquote>
            <p
              className="font-serif font-light italic"
              style={{
                fontSize: 'clamp(24px, 3.8vw, 56px)',
                lineHeight: 1.2,
                color: '#FAF7F2',
                maxWidth: '1000px',
              }}
            >
              {featuredQuote.text}
            </p>
            <footer className="mt-10 flex items-center gap-5">
              <div className="w-8 h-px" style={{ background: '#B8965A' }} />
              <div className="flex items-center gap-3">
                <cite
                  className="font-sans font-light not-italic"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#B8965A',
                  }}
                >
                  {featuredQuote.source}
                </cite>
                <span
                  className="font-sans font-light"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: 'rgba(250, 247, 242, 0.2)',
                  }}
                >
                  {featuredQuote.date}
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ borderBottom: '1px solid rgba(250, 247, 242, 0.06)' }}
      >
        {otherQuotes.map((q, i) => (
          <div
            key={i}
            className="reveal px-6 md:px-10 lg:px-14 py-10 md:py-16 flex flex-col gap-7"
            style={{
              transitionDelay: `${i * 100}ms`,
              borderLeft: i > 0 ? '1px solid rgba(250, 247, 242, 0.06)' : 'none',
              borderTop: '1px solid rgba(250, 247, 242, 0.06)',
            }}
          >
            <p
              className="font-serif font-light italic"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: 1.5,
                color: 'rgba(250, 247, 242, 0.65)',
              }}
            >
              {q.text}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="w-4 h-px flex-shrink-0" style={{ background: '#B8965A' }} />
              <span
                className="font-sans font-light"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#B8965A',
                }}
              >
                {q.source}
              </span>
              <span
                className="font-sans font-light"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'rgba(250, 247, 242, 0.18)',
                }}
              >
                {q.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
