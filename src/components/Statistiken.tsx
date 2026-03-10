import { useEffect, useRef } from 'react'
import { BoltIcon } from './Icons'
import { useReveal } from './useReveal'

interface StatProps {
  value: number
  suffix?: string
  label: string
  desc: string
  color: string
}

function AnimatedStat({ value, suffix = '', label, desc, color }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            let start = 0
            const duration = 2000
            const step = value / (duration / 16)
            const timer = setInterval(() => {
              start += step
              if (start >= value) {
                el.textContent = value.toLocaleString('de-AT') + suffix
                clearInterval(timer)
              } else {
                el.textContent = Math.floor(start).toLocaleString('de-AT') + suffix
              }
            }, 16)
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])

  return (
    <div className="relative p-8 reveal"
      style={{
        background: 'linear-gradient(145deg, rgba(15,32,64,0.7) 0%, rgba(61,31,10,0.2) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-12 h-0.5" style={{ background: color }} />

      <div className="mb-3">
        <span ref={numRef} className="headline text-5xl lg:text-6xl" style={{
          background: `linear-gradient(135deg, ${color}, ${color}aa)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          0
        </span>
      </div>
      <div className="text-white font-semibold text-sm mb-1">{label}</div>
      <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
    </div>
  )
}

const stats: StatProps[] = [
  {
    value: 200,
    suffix: '+',
    label: 'Events durchgeführt',
    desc: 'Von kleinen Schulworkshops bis zu stadtweiten Sport-Events',
    color: '#00e5ff',
  },
  {
    value: 15000,
    suffix: '+',
    label: 'Erreichte Jugendliche',
    desc: 'Schüler:innen, Studierende und junge Erwachsene in Wien und Österreich',
    color: '#ff6b2b',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Medien- & Sportpartner',
    desc: 'Kooperationen mit Vereinen, Redaktionen und Bildungsinstitutionen',
    color: '#c8872a',
  },
  {
    value: 5,
    suffix: ' Jahre',
    label: 'Expertise & Erfahrung',
    desc: 'Seit 2019 entwickeln wir innovative Formate für Medienbildung im Sportkontext',
    color: '#00e5ff',
  },
]

export default function Statistiken() {
  const ref = useReveal()

  return (
    <section id="statistiken" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a1628 0%, #050a1a 100%)',
        }}
      />

      {/* Stripe texture */}
      <div className="absolute inset-0 stripe-bg opacity-50" />

      {/* Glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BoltIcon size={16} />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Zahlen & Fakten</span>
          </div>
          <h2 className="headline text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            WIRKUNG, DIE <span className="gradient-text">MESSBAR IST</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Unsere Events hinterlassen Spuren — in Zahlen, in Köpfen, und in der Art,
            wie junge Menschen Medien verstehen.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`delay-${(i + 1) * 100}`}>
              <AnimatedStat {...stat} />
            </div>
          ))}
        </div>

        {/* Quote/highlight block */}
        <div
          className="relative p-8 lg:p-12 reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(255,107,43,0.05) 100%)',
            border: '1px solid rgba(0,229,255,0.15)',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, #00e5ff, #ff6b2b, transparent)' }}
          />
          <div className="absolute -top-3 left-10">
            <BoltIcon size={24} />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl text-white font-light leading-relaxed italic">
              "Medienbildung funktioniert dann, wenn sie dort stattfindet, wo junge Menschen
              eh schon sind — im Sport, auf Social Media, im echten Leben."
            </p>
            <div className="mt-6 text-cyan-400 text-sm font-semibold tracking-wide">
              — Die Hetzendorfers, Wien
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
