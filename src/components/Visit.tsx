import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const hours = [
  { days: 'Monday – Friday', time: '12:00 — 21:00' },
  { days: 'Saturday – Sunday', time: '11:00 — 21:00' },
];

export default function Visit() {
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
    <section id="visit" className="bg-onsu-black py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-xs tracking-ultra uppercase text-onsu-gold mb-4">
            Come In
          </p>
          <h2 className="font-serif font-light text-onsu-cream text-5xl md:text-7xl leading-none">
            Find Us in<br />
            <span className="italic">Soho</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-px bg-onsu-border transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-onsu-black p-8 md:p-12 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-onsu-gold mt-1 shrink-0" size={18} />
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-3">
                  Address
                </p>
                <p className="font-serif text-2xl font-light text-onsu-cream leading-snug">
                  55A Dean Street<br />
                  Soho<br />
                  London W1D 6AG
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=55A+Dean+Street+London+W1D+6AG"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-2 font-sans text-xs tracking-widest uppercase text-onsu-chrome hover:text-onsu-gold transition-colors duration-300"
            >
              <Navigation size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Get Directions
            </a>
          </div>

          <div className="bg-onsu-dark p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Clock className="text-onsu-gold mt-1 shrink-0" size={18} />
              <div className="flex-1">
                <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-6">
                  Opening Hours
                </p>
                <div className="flex flex-col gap-0 divide-y divide-onsu-border">
                  {hours.map((h, i) => (
                    <div key={i} className="py-4 flex items-center justify-between gap-4">
                      <p className="font-sans text-sm text-onsu-chrome">{h.days}</p>
                      <p className="font-serif text-lg text-onsu-cream whitespace-nowrap">{h.time}</p>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-xs text-onsu-muted mt-6 leading-relaxed">
                  Walk-ins welcome. For parties of five or more, please reach out via Instagram.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-onsu-panel p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-6">
                Getting Here
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-sans text-xs text-onsu-gold tracking-wider uppercase mb-1">Underground</p>
                  <p className="font-serif text-xl text-onsu-cream">Tottenham Court Road</p>
                  <p className="font-sans text-xs text-onsu-chrome mt-0.5">Central & Elizabeth Lines — 4 min walk</p>
                </div>
                <div className="w-full h-px bg-onsu-border" />
                <div>
                  <p className="font-sans text-xs text-onsu-gold tracking-wider uppercase mb-1">Also Nearby</p>
                  <p className="font-serif text-xl text-onsu-cream">Leicester Square</p>
                  <p className="font-sans text-xs text-onsu-chrome mt-0.5">Northern & Piccadilly Lines — 6 min walk</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-onsu-border">
              <p className="font-sans text-xs text-onsu-muted leading-relaxed">
                We are a compact space on Dean Street, between two of Soho's most celebrated dining streets. The black facade with brushed steel lettering is unmistakable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
