import { useEffect, useRef } from 'react';

const quotes = [
  {
    text: '"Almost-too-pretty-to-eat East Asian treats"',
    source: 'The Infatuation',
  },
  {
    text: '"Queues snaking down Dean Street since day one"',
    source: 'Hot Dinners',
  },
  {
    text: '"A precision kitchen in the heart of Soho"',
    source: 'Time Out London',
  },
];

export default function Press() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.reveal').forEach((child) => {
            child.classList.add('is-visible');
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-onsu-bg py-20 md:py-28 border-t border-onsu-cream/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-stretch divide-y divide-onsu-cream/[0.08] md:divide-y-0"
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`reveal flex-1 text-center px-6 md:px-10 py-10 md:py-0 ${
                i > 0 ? 'md:border-l md:border-onsu-gold/25' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-serif font-light italic text-onsu-cream text-xl md:text-2xl leading-snug mb-5">
                {q.text}
              </p>
              <p className="font-sans font-light tracking-widest uppercase text-onsu-gold text-[10px]">
                {q.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
