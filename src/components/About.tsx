import { useEffect, useRef, useState } from 'react';

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.reveal').forEach((t) => t.classList.add('is-visible'));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-onsu-bg">
      <div className={`flex flex-col ${showImage ? 'md:flex-row' : ''} min-h-screen md:h-screen`}>
        {showImage && (
          <div className="w-full md:w-1/2 h-[60vw] md:h-full flex-shrink-0 overflow-hidden">
            <img
              src="https://cms.factlondon.com/wp-content/uploads/2026/01/ONSU-1.jpg"
              alt="Michael Kwan, Founder of ONSU"
              className="w-full h-full object-cover object-center"
              onError={() => setShowImage(false)}
            />
          </div>
        )}

        <div
          ref={textRef}
          className={`${showImage ? 'md:w-1/2' : 'w-full max-w-2xl mx-auto'} flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0`}
        >
          <div className="reveal" style={{ transitionDelay: '0ms' }}>
            <span
              className="font-sans font-light text-onsu-gold block mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}
            >
              Founder — Michael Kwan
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <h2
              className="font-serif font-light italic text-onsu-cream mb-10"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.2 }}
            >
              Trained in the world's finest kitchens.
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: '280ms' }}>
            <div
              className="w-10 h-px mb-10"
              style={{ background: 'rgba(212, 168, 83, 0.4)' }}
            />
            <p
              className="font-sans font-light text-onsu-cream/55"
              style={{ fontSize: '15px', lineHeight: 1.85, letterSpacing: '0.06em', maxWidth: '480px' }}
            >
              The Dorchester. The Fat Duck. Ladurée. Hakkasan. UK Sugar Champion. European Cup Champion. Pastry Chef of the Year. ONSU is his first solo venture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
