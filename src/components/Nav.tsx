import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const darkSectionIds = ['menu', 'press'];

    function update() {
      const y = window.scrollY;
      setScrolled(y > 60);

      let dark = false;
      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 56 && rect.bottom > 56) {
          dark = true;
          break;
        }
      }
      setOnDark(dark);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Visit', href: '#visit' },
  ];

  const textColor = onDark ? 'rgba(250, 247, 242, 0.5)' : 'rgba(26, 22, 18, 0.45)';
  const textHoverColor = onDark ? '#FAF7F2' : '#1A1612';
  const logoColor = '#B8965A';
  const borderColor = scrolled
    ? onDark ? 'rgba(250, 247, 242, 0.06)' : 'rgba(26, 22, 18, 0.08)'
    : 'transparent';
  const bgColor = scrolled
    ? onDark ? 'rgba(26, 22, 18, 0.92)' : 'rgba(250, 247, 242, 0.92)'
    : 'transparent';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.6s ease, border-color 0.6s ease',
        background: bgColor,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontWeight: 300,
            fontSize: '11px',
            letterSpacing: '0.4em',
            color: logoColor,
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          ONSU
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontWeight: 300,
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: textColor,
                transition: 'color 0.35s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = textHoverColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = textColor;
              }}
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
            className={`block w-5 h-px transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
            style={{ background: onDark ? '#FAF7F2' : '#1A1612' }}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            style={{ background: onDark ? '#FAF7F2' : '#1A1612' }}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
            style={{ background: onDark ? '#FAF7F2' : '#1A1612' }}
          />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pt-6 pb-8 flex flex-col gap-5"
          style={{
            background: onDark ? 'rgba(26, 22, 18, 0.97)' : 'rgba(250, 247, 242, 0.97)',
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontWeight: 300,
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: onDark ? 'rgba(250, 247, 242, 0.55)' : 'rgba(26, 22, 18, 0.5)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
