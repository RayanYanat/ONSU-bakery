const LINE_ONE = 'Precision.';
const LINE_TWO = 'Craft.';
const LINE_THREE = 'Soho.';

const CHAR_STAGGER = 45;
const LINE_ONE_BASE = 300;
const LINE_TWO_BASE = 900;
const LINE_THREE_BASE = 1350;

function HeroLine({ text, baseDelay, className = '' }: { text: string; baseDelay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden leading-[0.95] ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="hero-char"
          style={{ animationDelay: `${baseDelay + i * CHAR_STAGGER}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-onsu-bg flex flex-col overflow-hidden">
      <div className="absolute top-7 left-6 md:left-12 z-10">
        <span
          className="font-sans font-light text-onsu-gold"
          style={{ fontSize: '11px', letterSpacing: '0.4em' }}
        >
          ONSU
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 md:px-12">
        <h1
          className="font-serif font-light italic text-onsu-cream w-full text-center"
          style={{ fontSize: 'clamp(72px, 12vw, 160px)' }}
        >
          <HeroLine text={LINE_ONE} baseDelay={LINE_ONE_BASE} />
          <HeroLine text={LINE_TWO} baseDelay={LINE_TWO_BASE} />
          <HeroLine text={LINE_THREE} baseDelay={LINE_THREE_BASE} />
        </h1>
      </div>

      <div
        className="absolute left-0 right-0 h-px"
        style={{ top: '80vh', background: 'rgba(212, 168, 83, 0.18)' }}
      />

      <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-2">
        <a
          href="#menu"
          className="font-sans font-light text-onsu-cream/40 hover:text-onsu-cream transition-colors duration-300"
          style={{ fontSize: '11px', letterSpacing: '0.2em' }}
        >
          ↓ The Menu
        </a>
        <span className="blink-underline block w-full h-px bg-onsu-gold/60" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="relative h-12 w-px overflow-hidden">
          <div className="scroll-indicator-line absolute inset-x-0 h-full bg-onsu-gold" />
        </div>
      </div>
    </section>
  );
}
