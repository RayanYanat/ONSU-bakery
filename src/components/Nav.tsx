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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.5s ease, border-color 0.5s ease',
        background: scrolled ? 'rgba(8, 8, 6, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(242, 237, 228, 0.04)' : '1px solid transparent',
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-sans font-light text-onsu-gold"
          style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase' }}
        >
          ONSU
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans font-light text-onsu-cream/40 hover:text-onsu-cream transition-colors duration-300"
              style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' }}
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
          <span className={`block w-5 h-px bg-onsu-cream transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-onsu-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-onsu-cream transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pt-6 pb-8 flex flex-col gap-5"
          style={{ background: 'rgba(8, 8, 6, 0.97)', borderTop: '1px solid rgba(242, 237, 228, 0.05)' }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans font-light text-onsu-cream/50 hover:text-onsu-cream transition-colors duration-300"
              style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
