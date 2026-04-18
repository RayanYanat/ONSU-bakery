import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-onsu-black/95 backdrop-blur-md border-b border-onsu-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-2xl md:text-3xl font-light tracking-ultra text-onsu-cream"
        >
          ONSU
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-onsu-chrome hover:text-onsu-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="ml-4 border border-onsu-gold text-onsu-gold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-onsu-gold hover:text-onsu-black transition-all duration-300 font-sans"
          >
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-onsu-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-onsu-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-onsu-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-onsu-black border-t border-onsu-border px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm tracking-widest uppercase text-onsu-chrome hover:text-onsu-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setMenuOpen(false)}
            className="self-start border border-onsu-gold text-onsu-gold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-onsu-gold hover:text-onsu-black transition-all duration-300 font-sans"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
