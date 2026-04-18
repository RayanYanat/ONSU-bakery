import { useEffect, useRef } from 'react';

const quotes = [
  { text: '"Almost-too-pretty-to-eat"', source: 'The Infatuation' },
  { text: '"Queues down Dean Street since day one"', source: 'Hot Dinners' },
  { text: '"A precision kitchen in Soho"', source: 'Time Out' },
];

export default function Press() {
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
      id="press"
      style={{
        background: '#1A1612',
        borderTop: '1px solid rgba(250, 247, 242, 0.06)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div ref={ref} className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div
          className="flex flex-col md:flex-row"
          style={{ borderTop: '1px solid rgba(250, 247, 242, 0.07)' }}
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              className="reveal flex-1 text-center px-6 md:px-12 py-12 md:py-8 flex flex-col items-center justify-center gap-6"
              style={{
                transitionDelay: `${i * 140}ms`,
                borderRight: i < quotes.length - 1 ? '1px solid rgba(250, 247, 242, 0.07)' : undefined,
                borderBottom: i < quotes.length - 1 ? '1px solid rgba(250, 247, 242, 0.07)' : undefined,
              }}
            >
              <p
                className="font-serif font-light italic"
                style={{
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  lineHeight: 1.35,
                  color: '#FAF7F2',
                }}
              >
                {q.text}
              </p>
              <span
                className="font-sans font-light"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: '#B8965A',
                }}
              >
                {q.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
