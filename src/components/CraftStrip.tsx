export default function CraftStrip() {
  const phrases = [
    'Laminated by hand',
    '·',
    'No shortcuts',
    '·',
    'Tokyo × Paris',
    '·',
    'Michael Kwan',
    '·',
    'Soho, London',
    '·',
    'Since 2024',
    '·',
    'Precision first',
    '·',
    'Laminated by hand',
    '·',
    'No shortcuts',
    '·',
    'Tokyo × Paris',
    '·',
    'Michael Kwan',
    '·',
    'Soho, London',
    '·',
    'Since 2024',
    '·',
    'Precision first',
    '·',
  ];

  return (
    <div className="bg-onsu-gold py-3.5 overflow-hidden relative">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
        }}
      >
        {phrases.map((phrase, i) => (
          <span key={i} className="font-sans text-xs tracking-widest uppercase text-onsu-black shrink-0">
            {phrase}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
