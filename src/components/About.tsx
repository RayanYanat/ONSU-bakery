import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(true);

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-onsu-bg py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={`grid gap-16 md:gap-20 ${imageVisible ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl'}`}>
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="reveal" style={{ transitionDelay: '0ms' }}>
              <h2 className="font-serif font-light text-onsu-cream text-5xl md:text-6xl leading-none mb-4">
                Michael Kwan
              </h2>
              <p className="font-sans font-light tracking-ultra uppercase text-onsu-gold text-[10px] md:text-xs mb-10">
                Founder &amp; Head Pastry Chef
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-px bg-onsu-gold mb-10" />
              <p className="font-sans font-light text-onsu-cream/60 text-base leading-loose">
                Born in Hong Kong. Trained at The Fat Duck, Ladurée, Hakkasan, and The Dorchester — where he served as Executive Pastry Chef. UK Sugar Champion 2019. European Cup Champion 2022. Pastry Chef of the Year 2024. ONSU is his first solo venture — a precision kitchen in Soho where Asian flavour meets classical European technique.
              </p>
            </div>
          </div>

          {imageVisible && (
            <div className="reveal order-1 md:order-2" style={{ transitionDelay: '80ms' }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://cms.factlondon.com/wp-content/uploads/2026/01/ONSU-1.jpg"
                  alt="Michael Kwan, Founder of ONSU"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageVisible(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
