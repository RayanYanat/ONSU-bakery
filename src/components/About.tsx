import { useEffect, useRef, useState } from 'react';

const credentials = [
  { place: 'The Dorchester', role: 'Executive Pastry Chef', location: 'London' },
  { place: 'The Fat Duck', role: 'Pastry Development', location: 'Bray' },
  { place: 'Hakkasan', role: 'Head of Pastry', location: 'London & Global' },
  { place: 'Ladurée', role: 'Atelier Training', location: 'Paris' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-onsu-dark py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div
            className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative overflow-hidden h-[500px] md:h-[700px] lg:h-full min-h-[500px]">
              <img
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Michael Kwan — Founder of ONSU"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-onsu-dark/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-onsu-dark via-transparent to-transparent lg:hidden" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-sans text-xs tracking-widest uppercase text-onsu-gold">
                  Michael Kwan
                </p>
                <p className="font-sans text-xs text-onsu-chrome/70 mt-1">
                  Founder & Executive Pastry Chef
                </p>
              </div>
            </div>
          </div>

          <div
            className={`relative lg:pl-16 xl:pl-24 py-12 lg:py-0 flex flex-col justify-center transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <p className="font-sans text-xs tracking-ultra uppercase text-onsu-gold mb-8">
              The Maker
            </p>

            <h2 className="font-serif font-light text-onsu-cream text-4xl md:text-6xl leading-none mb-8">
              Trained in the world's<br />
              <span className="italic">finest kitchens.</span><br />
              Built for Soho.
            </h2>

            <div className="w-12 h-px bg-onsu-gold mb-8" />

            <p className="font-sans font-light text-onsu-chrome text-base leading-loose mb-6">
              Michael Kwan spent two decades inside kitchens that tolerate nothing less than perfect. At The Dorchester, he led a pastry programme that redefined what a five-star dessert could be. At The Fat Duck, he encountered a different question entirely: what is flavour, really?
            </p>

            <p className="font-sans font-light text-onsu-chrome text-base leading-loose mb-10">
              ONSU is the answer he built for himself — a space where the restraint of Japanese craft and the romance of French patisserie are held in exact tension. Not fusion. Dialogue.
            </p>

            <div className="border-t border-onsu-border pt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-6">
                Career Foundations
              </p>
              <div className="flex flex-col gap-0 divide-y divide-onsu-border">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className={`flex items-start justify-between py-4 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div>
                      <p className="font-serif text-lg text-onsu-cream">{c.place}</p>
                      <p className="font-sans text-xs text-onsu-muted mt-0.5">{c.role}</p>
                    </div>
                    <p className="font-sans text-xs text-onsu-chrome tracking-wide mt-1">{c.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
