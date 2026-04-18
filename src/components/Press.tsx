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
      className="bg-onsu-bg py-20 md:py-28"
      style={{ borderTop: '1px solid rgba(242, 237, 228, 0.04)' }}
    >
      <div ref={ref} className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-stretch md:divide-x md:divide-onsu-gold/20">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="reveal flex-1 text-center px-6 md:px-12 py-10 md:py-4 flex flex-col items-center justify-center gap-5"
              style={{
                transitionDelay: `${i * 120}ms`,
                borderBottom: i < quotes.length - 1 ? '1px solid rgba(212, 168, 83, 0.12)' : undefined,
              }}
            >
              <p
                className="font-serif font-light italic text-onsu-cream"
                style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', lineHeight: 1.3 }}
              >
                {q.text}
              </p>
              <span
                className="font-sans font-light text-onsu-gold"
                style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}
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
