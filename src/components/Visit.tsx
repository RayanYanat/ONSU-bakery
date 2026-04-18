import { useEffect, useRef } from 'react';

export default function Visit() {
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
    <section id="visit" className="bg-onsu-bg py-24 md:py-36 border-t border-onsu-cream/[0.05]">
      <div className="max-w-xl mx-auto px-6 md:px-12 text-center">
        <div ref={ref}>
          <div className="reveal">
            <h2 className="font-serif font-light italic text-onsu-cream text-5xl md:text-7xl leading-none mb-10 md:mb-14">
              Come find us.
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '80ms' }}>
            <div className="w-8 h-px bg-onsu-gold mx-auto mb-10" />

            <p className="font-sans font-light text-onsu-cream/60 text-sm leading-loose mb-1">
              55A Dean Street, Soho, London W1D 6AG
            </p>
            <p className="font-sans font-light text-onsu-cream/40 text-sm leading-loose mb-1">
              Monday – Friday: 12pm – 9pm
            </p>
            <p className="font-sans font-light text-onsu-cream/40 text-sm leading-loose mb-12">
              Saturday – Sunday: 11am – 9pm
            </p>

            <a
              href="https://instagram.com/onsubakery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light text-onsu-gold text-sm underline underline-offset-4 hover:text-onsu-cream transition-colors duration-300 decoration-onsu-gold/40 hover:decoration-onsu-cream/40"
            >
              → @onsubakery on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
