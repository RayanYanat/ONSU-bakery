export default function Hero() {
  return (
    <section className="relative min-h-screen bg-onsu-black flex flex-col justify-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onsu-black/60 via-onsu-black/40 to-onsu-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-onsu-black/50 via-transparent to-onsu-black/20" />

      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-onsu-border to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-4xl">
          <p className="animate-fade-in-up opacity-0 font-sans text-xs tracking-ultra uppercase text-onsu-gold mb-8 md:mb-10">
            Asian Bakery & Patisserie &nbsp;·&nbsp; Soho, London
          </p>

          <h1 className="font-serif font-light text-onsu-cream leading-none mb-6 md:mb-8">
            <span className="animate-fade-in-up opacity-0 delay-100 block text-[clamp(4rem,12vw,10rem)]">
              Where craft
            </span>
            <span className="animate-fade-in-up opacity-0 delay-200 block text-[clamp(4rem,12vw,10rem)] italic text-onsu-gold">
              defies
            </span>
            <span className="animate-fade-in-up opacity-0 delay-300 block text-[clamp(4rem,12vw,10rem)]">
              tradition.
            </span>
          </h1>

          <div className="animate-fade-in-up opacity-0 delay-400 w-16 h-px bg-onsu-gold mb-8 md:mb-10" />

          <p className="animate-fade-in-up opacity-0 delay-500 font-sans font-light text-onsu-chrome text-base md:text-lg max-w-md leading-relaxed mb-10 md:mb-14">
            Parisian technique. Japanese precision. Ingredients that refuse compromise. Every piece a considered act.
          </p>

          <div className="animate-fade-in-up opacity-0 delay-600 flex flex-col sm:flex-row gap-4">
            <a
              href="#visit"
              className="inline-block bg-onsu-gold text-onsu-black font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-onsu-gold-light transition-colors duration-300 text-center"
            >
              Find Us in Soho
            </a>
            <a
              href="#menu"
              className="inline-block border border-onsu-chrome/40 text-onsu-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-onsu-cream transition-colors duration-300 text-center"
            >
              View Signature Items
            </a>
          </div>
        </div>

        <div className="animate-fade-in opacity-0 delay-700 absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-3 hidden md:flex">
          <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted [writing-mode:vertical-rl]">
            Scroll
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-onsu-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}
