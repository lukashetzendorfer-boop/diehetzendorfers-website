import { useReveal } from './useReveal'
import { BoltIcon, StarIcon } from './Icons'

// SVG placeholder press logos (text-based, as if real logos)
const pressLogos = [
  { name: 'Der Standard', abbr: 'DS' },
  { name: 'Kurier', abbr: 'KUR' },
  { name: 'Kleine Zeitung', abbr: 'KZ' },
  { name: 'Vienna.at', abbr: 'VIE' },
  { name: 'ORF', abbr: 'ORF' },
  { name: 'Presse', abbr: 'DiP' },
  { name: 'Falter', abbr: 'FAL' },
  { name: 'APA', abbr: 'APA' },
]

const quotes = [
  {
    quote: 'Ein innovativer Ansatz, der Medienbildung und Sport auf einzigartige Weise verbindet.',
    source: 'Der Standard',
    date: 'März 2024',
  },
  {
    quote: 'Die Hetzendorfers zeigen, wie zeitgemäße Bildungsarbeit mit jungen Menschen funktioniert.',
    source: 'Kurier',
    date: 'November 2023',
  },
  {
    quote: 'Sport als Vehikel für Medienkompetenz — ein Modell mit Vorbildcharakter für ganz Österreich.',
    source: 'Kleine Zeitung',
    date: 'Jänner 2024',
  },
]

function PressLogoBlock({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex items-center justify-center px-8 py-5 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group cursor-default"
      style={{ background: 'rgba(15,32,64,0.3)' }}
      title={name}
    >
      <span className="headline text-2xl text-gray-600 group-hover:text-gray-300 transition-colors tracking-widest">
        {abbr}
      </span>
    </div>
  )
}

export default function Presse() {
  const ref = useReveal()

  return (
    <section id="presse" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050a1a 0%, #070d1e 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BoltIcon size={16} />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">In den Medien</span>
          </div>
          <h2 className="headline text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            WIE ÜBER UNS <span className="gradient-text">BERICHTET WIRD</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Unsere Arbeit wird von österreichischen Medien wahrgenommen und begleitet.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mb-16 reveal delay-100">
          {pressLogos.map((logo) => (
            <PressLogoBlock key={logo.name} {...logo} />
          ))}
        </div>

        {/* Press quotes */}
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={q.source}
              className={`card p-6 reveal delay-${(i + 1) * 100}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} size={14} className="text-brand-gold" style={{ color: '#c8872a' }} />
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="headline text-6xl leading-none mb-2"
                style={{ color: 'rgba(0,229,255,0.2)' }}
              >
                "
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                {q.quote}
              </p>

              {/* Source */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="headline text-white text-sm tracking-wide">{q.source}</span>
                <span className="text-gray-600 text-xs">{q.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Press contact */}
        <div
          className="mt-12 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal delay-400"
          style={{
            background: 'rgba(0,229,255,0.04)',
            border: '1px solid rgba(0,229,255,0.12)',
          }}
        >
          <div>
            <div className="text-white font-semibold mb-1">Presseanfragen</div>
            <div className="text-gray-400 text-sm">
              Für Interviewanfragen, Pressematerial und Kooperationen steht unser Team zur Verfügung.
            </div>
          </div>
          <a
            href="#kontakt"
            className="btn-primary whitespace-nowrap"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            <span>Presse-Kontakt</span>
          </a>
        </div>
      </div>
    </section>
  )
}
