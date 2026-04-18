import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-onsu-bg/96 backdrop-blur-sm border-b border-onsu-cream/[0.05]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg tracking-ultra font-light text-onsu-cream hover:text-onsu-gold transition-colors duration-300"
        >
          ONSU
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-[11px] tracking-widest uppercase text-onsu-cream/40 hover:text-onsu-cream transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-onsu-cream transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-onsu-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-onsu-cream transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-onsu-bg border-t border-onsu-cream/[0.05] px-6 pt-6 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-xs tracking-widest uppercase text-onsu-cream/50 hover:text-onsu-cream transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
