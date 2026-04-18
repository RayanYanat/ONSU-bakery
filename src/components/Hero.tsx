const WORDS = ['Where', 'craft', 'defies', 'tradition.'];
const STAGGER = 200;
const BASE_DELAY = 200;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-onsu-bg flex flex-col items-center justify-center overflow-hidden px-6 md:px-12">

      <div className="w-full flex flex-col items-center">
        <p
          className="font-sans font-light text-onsu-gold text-center mb-8"
          style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}
        >
          Asian Bakery &amp; Patisserie &nbsp;·&nbsp; Soho, London
        </p>

        <h1
          className="font-serif font-light italic text-onsu-cream text-center mb-10 w-full"
          style={{ fontSize: 'clamp(72px, 12vw, 140px)', lineHeight: 1.0 }}
        >
          <span className="block">
            {WORDS.slice(0, 2).map((word, i) => (
              <span
                key={word}
                className="hero-word"
                style={{ animationDelay: `${BASE_DELAY + i * STAGGER}ms`, marginRight: '0.28em' }}
              >
                {word}
              </span>
            ))}
          </span>
          <span className="block">
            {WORDS.slice(2).map((word, i) => (
              <span
                key={word}
                className="hero-word"
                style={{ animationDelay: `${BASE_DELAY + (2 + i) * STAGGER}ms`, marginRight: '0.28em' }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="hero-body font-sans font-light text-onsu-cream text-left"
          style={{
            fontSize: '15px',
            maxWidth: '480px',
            lineHeight: 1.8,
            letterSpacing: '0.05em',
            animationDelay: '1.2s',
            width: '100%',
          }}
        >
          Parisian technique. Japanese precision. Ingredients that refuse compromise. Every piece a considered act.
        </p>
      </div>

      <div
        className="absolute left-0 right-0 h-px"
        style={{ top: '80vh', background: 'rgba(212, 168, 83, 0.15)' }}
      />

      <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-2">
        <a
          href="#menu"
          className="font-sans font-light text-onsu-cream/35 hover:text-onsu-cream transition-colors duration-300"
          style={{ fontSize: '11px', letterSpacing: '0.2em' }}
        >
          ↓ The Menu
        </a>
        <span className="blink-underline block w-full h-px bg-onsu-gold/50" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative h-12 w-px overflow-hidden">
          <div className="scroll-indicator-line absolute inset-x-0 h-full bg-onsu-gold" />
        </div>
      </div>
    </section>
  );
}
