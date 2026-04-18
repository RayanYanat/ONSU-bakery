import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-onsu-black border-t border-onsu-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <p className="font-serif text-3xl font-light tracking-ultra text-onsu-cream mb-2">
              ONSU
            </p>
            <p className="font-sans text-xs text-onsu-muted tracking-wide">
              Asian Bakery & Patisserie
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-12 text-left md:text-right">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-3">Location</p>
              <p className="font-sans text-sm text-onsu-chrome">55A Dean Street</p>
              <p className="font-sans text-sm text-onsu-chrome">Soho, London W1D 6AG</p>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-onsu-muted mb-3">Hours</p>
              <p className="font-sans text-sm text-onsu-chrome">Mon – Fri &nbsp;12:00–21:00</p>
              <p className="font-sans text-sm text-onsu-chrome">Sat – Sun &nbsp;11:00–21:00</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-onsu-border mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-onsu-muted">
            © {currentYear} ONSU Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/onsubakery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-widest uppercase text-onsu-chrome hover:text-onsu-gold transition-colors duration-300 flex items-center gap-2"
            >
              <Instagram size={13} />
              @onsubakery
            </a>
            <span className="text-onsu-border">·</span>
            <a
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-onsu-chrome hover:text-onsu-gold transition-colors duration-300"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
