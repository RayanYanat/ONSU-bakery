export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1612',
        borderTop: '1px solid rgba(250, 247, 242, 0.06)',
      }}
    >
      <div
        className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        style={{ borderBottom: '1px solid rgba(250, 247, 242, 0.05)' }}
      >
        <div>
          <span
            className="font-sans font-light block mb-4"
            style={{
              fontSize: '10px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: '#B8965A',
            }}
          >
            ONSU
          </span>
          <p
            className="font-sans font-light"
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              color: 'rgba(250, 247, 242, 0.25)',
              lineHeight: 1.7,
            }}
          >
            Asian Bakery &amp; Patisserie<br />
            55A Dean Street, Soho, London W1D 6AG
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            href="https://instagram.com/onsubakery"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-light"
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'rgba(250, 247, 242, 0.28)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#B8965A'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250, 247, 242, 0.28)'; }}
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="px-6 md:px-12 py-5">
        <p
          className="font-sans font-light"
          style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(250, 247, 242, 0.14)',
          }}
        >
          © ONSU 2026
        </p>
      </div>
    </footer>
  );
}
