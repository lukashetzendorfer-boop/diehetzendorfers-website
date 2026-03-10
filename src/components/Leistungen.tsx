import { useReveal } from './useReveal'
import { BoltIcon, MediaIcon, SportIcon, WorkshopIcon, TrophyIcon, ArrowRight } from './Icons'

const services = [
  {
    icon: <MediaIcon size={36} />,
    tag: 'Digital',
    title: 'Social Media Literacy Workshops',
    desc: 'Interaktive Workshops zur kritischen Medienkompetenz — von Fake News erkennen bis hin zu verantwortungsvollem Content-Erstellen. Maßgeschneidert für Schulen und Jugendorganisationen.',
    features: ['Faktencheck-Training', 'Content Creation Basics', 'Algorithmus-Verständnis', 'Online-Sicherheit'],
    color: '#00e5ff',
  },
  {
    icon: <SportIcon size={36} />,
    tag: 'Sport & Media',
    title: 'Sport-Media-Events',
    desc: 'Wir bringen Profisportler:innen und Jugendliche zusammen — für Events, die nicht nur begeistern, sondern auch bilden. Sport als Plattform für Medienbildung.',
    features: ['Profi-Athlete Sessions', 'Live-Berichterstattung lernen', 'Behind-the-Scenes Content', 'Fan-Engagement'],
    color: '#ff6b2b',
  },
  {
    icon: <WorkshopIcon size={36} />,
    tag: 'Schule & Bildung',
    title: 'Schulprogramme & Curricula',
    desc: 'Langfristige Bildungsprogramme, die nahtlos in den Schulalltag integriert werden. Lehrplankonform und evidenzbasiert — für nachhaltige Medienkompetenz.',
    features: ['Lehrplanintegration', 'Lehrer:innen-Training', 'Evaluation & Reporting', 'Zertifizierungen'],
    color: '#c8872a',
  },
  {
    icon: <TrophyIcon size={36} />,
    tag: 'Corporate',
    title: 'Corporate Events & Teambuilding',
    desc: 'Events für Unternehmen, die Teambuilding mit einem echten gesellschaftlichen Mehrwert verbinden. Gemeinsam Medienbildung erleben und fördern.',
    features: ['Maßgeschneiderte Events', 'CSR-Reporting', 'Teambuilding-Elemente', 'Nachhaltige Partnerschaften'],
    color: '#00e5ff',
  },
]

export default function Leistungen() {
  const ref = useReveal()

  return (
    <section id="leistungen" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050a1a 0%, #07100f 50%, #050a1a 100%)' }}
      />

      {/* Decorative bolt */}
      <div className="absolute top-20 right-8 opacity-5 pointer-events-none hidden lg:block">
        <svg width="400" height="500" viewBox="0 0 24 24" fill="none">
          <polygon points="13,1 4,14 12,14 11,23 20,10 12,10" fill="#00e5ff" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <BoltIcon size={16} />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Was wir tun</span>
          </div>
          <h2 className="headline text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Unsere <span className="gradient-text">Leistungen</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
            Von Schulworkshops bis zu großen Sport-Events — wir entwickeln Formate,
            die Medienbildung erlebbar machen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card p-8 reveal delay-${(i + 1) * 100}`}
              style={{ '--accent': service.color } as React.CSSProperties}
            >
              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase mb-6"
                style={{
                  background: `${service.color}10`,
                  border: `1px solid ${service.color}30`,
                  color: service.color,
                }}
              >
                {service.tag}
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div style={{ color: service.color }}>{service.icon}</div>
                <h3 className="headline text-white text-xl leading-tight mt-1">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: service.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 group"
                style={{ color: service.color }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <span>Mehr erfahren</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
