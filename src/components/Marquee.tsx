const accolades = [
  'UK Sugar Champion',
  'European Cup Champion',
  'Pastry Chef of the Year',
  'The Dorchester',
  'The Fat Duck',
  'Ladurée Paris',
  'Hakkasan',
  'Queues since day one',
  'UK Sugar Champion',
  'European Cup Champion',
  'Pastry Chef of the Year',
  'The Dorchester',
  'The Fat Duck',
  'Ladurée Paris',
  'Hakkasan',
  'Queues since day one',
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: '#B8965A',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderTop: '1px solid rgba(26, 22, 18, 0.12)',
        borderBottom: '1px solid rgba(26, 22, 18, 0.12)',
      }}
    >
      <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
        {accolades.map((a, i) => (
          <span key={i} className="flex items-center font-sans font-light" style={{ flexShrink: 0 }}>
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: '#1A1612',
              }}
            >
              {a}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                background: 'rgba(26, 22, 18, 0.35)',
                margin: '0 32px',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
