export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1612',
        borderTop: '1px solid rgba(250, 247, 242, 0.07)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        textAlign: 'center',
      }}
    >
      <p
        className="font-sans font-light"
        style={{
          fontSize: '11px',
          letterSpacing: '0.18em',
          color: 'rgba(250, 247, 242, 0.22)',
        }}
      >
        © ONSU 2026 &nbsp;—&nbsp; 55A Dean Street, Soho, London W1D 6AG
      </p>
    </footer>
  );
}
