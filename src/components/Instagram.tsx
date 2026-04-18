import { Instagram } from 'lucide-react';

const previewImages = [
  'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3929292/pexels-photo-3929292.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function InstagramCTA() {
  return (
    <section className="bg-onsu-dark py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-xs tracking-ultra uppercase text-onsu-gold mb-6">
            Follow The Process
          </p>
          <h2 className="font-serif font-light text-onsu-cream text-5xl md:text-7xl leading-none mb-8">
            The work,<br />
            <span className="italic">daily.</span>
          </h2>
          <p className="font-sans font-light text-onsu-chrome text-base max-w-sm mx-auto leading-relaxed mb-10">
            Behind-the-scenes lamination, seasonal specials, and the occasional mistake we learn from. All of it, unfiltered.
          </p>
          <a
            href="https://instagram.com/onsubakery"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-onsu-gold text-onsu-gold font-sans text-sm tracking-widest uppercase px-8 py-4 hover:bg-onsu-gold hover:text-onsu-black transition-all duration-300"
          >
            <Instagram size={16} className="transition-transform duration-300 group-hover:scale-110" />
            @onsubakery
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
          {previewImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/onsubakery"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={src}
                alt={`ONSU — @onsubakery post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-onsu-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-onsu-cream" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
