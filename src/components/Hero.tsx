export default function Hero() {
  return (
    <section className="relative min-h-screen bg-onsu-bg flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h1 className="font-serif font-light italic text-onsu-cream leading-[1.08] text-[clamp(3.2rem,9vw,8rem)] mb-8 md:mb-10">
          Where Precision<br />Meets Craft
        </h1>

        <div className="w-24 h-px bg-onsu-gold mb-8 md:mb-10" />

        <p className="font-sans font-light tracking-ultra uppercase text-onsu-cream/40 text-[11px] md:text-xs">
          Asian Bakery &amp; Patisserie &nbsp;—&nbsp; Soho, London
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-widest uppercase text-onsu-cream/25">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden">
          <div className="scroll-line absolute inset-x-0 h-full bg-onsu-gold" />
        </div>
      </div>
    </section>
  );
}
