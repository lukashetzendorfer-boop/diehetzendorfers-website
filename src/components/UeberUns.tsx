import { useReveal } from './useReveal'
import { BoltIcon, CheckIcon } from './Icons'

const values = [
  { title: 'Medienbildung first', desc: 'Jedes Event ist ein Bildungsevent — Unterhaltung und Lernen sind für uns kein Widerspruch.' },
  { title: 'Sport als Sprache', desc: 'Sport verbindet über alle gesellschaftlichen Grenzen hinweg. Diese Kraft nutzen wir bewusst.' },
  { title: 'Wiener Wurzeln', desc: 'Wir sind tief in der Wiener Bildungs- und Sportlandschaft verwurzelt und kennen die lokalen Strukturen.' },
  { title: 'Evidenzbasiert', desc: 'Unsere Formate werden kontinuierlich evaluiert und weiterentwickelt. Wirkung ist messbar.' },
]

export default function UeberUns() {
  const ref = useReveal()

  return (
    <section id="ueber-uns" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050a1a 0%, #0a1628 100%)' }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 h-full w-1 hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, #00e5ff, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4 reveal">
              <BoltIcon size={16} />
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Wer wir sind</span>
            </div>

            <h2 className="headline text-white mb-6 leading-none reveal delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              MEDIENBILDUNG<br />
              <span className="gradient-text">NEU GEDACHT</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed reveal delay-200">
              <p>
                Die Hetzendorfers ist ein Wiener Event-Unternehmen, das Social-Media-Literacy mit
                professionellem Sport verbindet. Wir glauben, dass Medienbildung dann am stärksten wirkt,
                wenn sie im richtigen Kontext stattfindet — und Sport schafft diesen Kontext wie kaum
                etwas anderes.
              </p>
              <p>
                Unser Ansatz: keine trockenen Workshops, keine Frontalvorträge — stattdessen erlebbare,
                emotionale Formate, die im Gedächtnis bleiben. Von der Schule bis zum Stadion.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10 reveal delay-300">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-4 border border-white/5 hover:border-cyan-500/20 transition-colors"
                  style={{ background: 'rgba(15,32,64,0.3)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon size={14} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-white text-sm font-semibold">{v.title}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="reveal delay-200">
            {/* Big feature card */}
            <div
              className="relative p-10 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(10,22,40,0.95) 0%, rgba(61,31,10,0.4) 100%)',
                border: '1px solid rgba(0,229,255,0.15)',
              }}
            >
              {/* Decorative corner bolt */}
              <div className="absolute top-6 right-6 opacity-20">
                <svg width="60" height="80" viewBox="0 0 24 24" fill="none">
                  <polygon points="13,1 4,14 12,14 11,23 20,10 12,10" fill="#00e5ff" />
                </svg>
              </div>

              <div className="mb-8">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6"
                  style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}
                >
                  <span className="headline gradient-text text-xl">DH</span>
                </div>
                <h3 className="headline text-white text-2xl mb-2">Die Hetzendorfers</h3>
                <p className="text-cyan-400 text-sm tracking-wide">Wien, seit 2019</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Gegründet mit der Vision, Medienbildung aus dem Klassenzimmer heraus
                in die Lebenswelt junger Menschen zu bringen — dort, wo Sport,
                Social Media und Alltag aufeinandertreffen.
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-8"
                style={{ background: 'linear-gradient(90deg, #00e5ff30, transparent)' }}
              />

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Gegründet', value: '2019' },
                  { label: 'Standort', value: 'Wien, AT' },
                  { label: 'Fokus', value: 'Medienbildung' },
                  { label: 'Zielgruppe', value: 'Jugend & Schulen' },
                ].map((fact) => (
                  <div key={fact.label}>
                    <div className="text-gray-600 text-xs uppercase tracking-wider mb-1">{fact.label}</div>
                    <div className="text-white font-semibold text-sm">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent strip below */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, #00e5ff, #ff6b2b)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
