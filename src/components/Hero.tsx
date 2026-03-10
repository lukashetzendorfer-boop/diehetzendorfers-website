import { useEffect, useRef } from 'react'
import { BoltIcon, ArrowRight, PlayIcon } from './Icons'

const tagWords = [
  'MEDIENBILDUNG', 'SPORT', 'WIEN', 'SOCIAL MEDIA', 'WORKSHOPS',
  'LITERACY', 'EVENTS', 'JUGEND', 'BILDUNG', 'COMMUNITY',
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect()
      const x = ((e.clientX - left) / width - 0.5) * 2
      const y = ((e.clientY - top) / height - 0.5) * 2
      hero.style.setProperty('--mx', String(x))
      hero.style.setProperty('--my', String(y))
    }
    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{
        background: 'linear-gradient(135deg, #050a1a 0%, #0a1628 40%, #0d1f10 70%, #3d1f0a 100%)',
      }}
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Orange glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #00e5ff, transparent)',
          left: '65%',
          transform: 'rotate(12deg) scaleY(1.5)',
          transformOrigin: 'top',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(0,229,255,0.05)' }}
            >
              <BoltIcon size={14} />
              <span>Medienbildungs-Events Wien</span>
            </div>

            {/* Main headline */}
            <h1 className="headline text-white mb-6 leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              <span className="block">WO SPORT</span>
              <span className="block">AUF MEDIA</span>
              <span className="block gradient-text">LITERACY</span>
              <span className="block">TRIFFT.</span>
            </h1>

            {/* Sub */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg font-light">
              Die Hetzendorfers verbinden professionellen Sport mit Social-Media-Bildung —
              und schaffen Events, die Jugendliche, Medien und Athleten zusammenbringen.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <span>Event anfragen</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#leistungen"
                className="btn-secondary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <PlayIcon size={16} />
                <span>Leistungen</span>
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-white/10">
              {[
                { num: '200+', label: 'Events durchgeführt' },
                { num: '15K+', label: 'Teilnehmer:innen' },
                { num: '30+', label: 'Medienpartner' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-number text-3xl leading-none mb-1">{s.num}</div>
                  <div className="text-gray-500 text-xs font-medium tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Big bolt */}
              <div
                className="relative z-10"
                style={{
                  animation: 'boltFlash 2.5s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 40px rgba(0,229,255,0.4))',
                }}
              >
                <svg
                  width="280"
                  height="380"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <polygon
                    points="13,1 4,14 12,14 11,23 20,10 12,10"
                    fill="url(#boltGrad)"
                    stroke="rgba(255,107,43,0.6)"
                    strokeWidth="0.3"
                  />
                  <defs>
                    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00e5ff" />
                      <stop offset="100%" stopColor="#ff6b2b" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Ring decorations */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-500/15"
                style={{ transform: 'scale(1.4)', top: '-20%', left: '-20%', width: '140%', height: '140%' }}
              />
              <div
                className="absolute rounded-full border border-orange-500/10"
                style={{ top: '-40%', left: '-40%', width: '180%', height: '180%' }}
              />

              {/* Tag pills floating */}
              {[
                { label: 'Social Media Literacy', top: '5%', right: '-20%' },
                { label: 'Sport & Bildung', top: '30%', left: '-25%' },
                { label: 'Wien 2024', bottom: '20%', right: '-15%' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="absolute px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border"
                  style={{
                    top: tag.top,
                    bottom: tag.bottom,
                    left: tag.left,
                    right: tag.right,
                    background: 'rgba(10,22,40,0.8)',
                    borderColor: 'rgba(0,229,255,0.3)',
                    color: '#00e5ff',
                    backdropFilter: 'blur(10px)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative z-10 border-t border-b border-cyan-500/10 py-3 overflow-hidden mt-auto"
        style={{ background: 'rgba(0,229,255,0.03)' }}
      >
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...tagWords, ...tagWords].map((word, i) => (
            <span key={i} className="flex items-center gap-6 px-6">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{word}</span>
              <BoltIcon size={10} className="text-cyan-500 opacity-40" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-gray-500 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  )
}
