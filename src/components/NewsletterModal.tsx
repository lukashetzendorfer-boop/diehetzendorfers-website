import { useState, useEffect } from 'react'
import { BoltIcon, InstagramIcon, LinkedinIcon, MailIcon, ArrowRight } from './Icons'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

const team = [
  {
    name: 'Lukas Hetzendorfer',
    role: 'Co-Founder & Technik / Kreativ',
    bio: 'Verantwortlich für Website, visuelle Identität und digitale Strategie. Verbindet technisches Know-how mit kreativem Gespür für Markenaufbau.',
    initials: 'LH',
    color: '#00e5ff',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/lukas.hetzendorfer/', icon: <InstagramIcon size={16} /> },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lukashetzendorfer/', icon: <LinkedinIcon size={16} /> },
      { label: 'E-Mail', href: 'mailto:lukas@diehetzendorfers.com', icon: <MailIcon size={16} /> },
    ],
  },
  {
    name: 'Kathi Hetzendorfer',
    role: 'Co-Founder & Bildung / Events',
    bio: 'Zuständig für Konzeption und Durchführung der Bildungsprogramme, Schulpartnerschaften und die inhaltliche Qualität aller Workshopformate.',
    initials: 'KH',
    color: '#ff6b2b',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/kathi_schuetzenhoefer/', icon: <InstagramIcon size={16} /> },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kathi-hetzendorfer/', icon: <LinkedinIcon size={16} /> },
      { label: 'E-Mail', href: 'mailto:kathi@diehetzendorfers.com', icon: <MailIcon size={16} /> },
    ],
  },
]

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'newsletter' | 'team'>('newsletter')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: 'rgba(5,10,26,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        {/* Modal */}
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0f2040 60%, #1a1208 100%)',
            border: '1px solid rgba(0,229,255,0.2)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,229,255,0.05)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, #00e5ff, #ff6b2b)' }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors z-10"
            aria-label="Schließen"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="p-8 lg:p-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="bolt-glow">
                <BoltIcon size={20} />
              </div>
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Die Hetzendorfers
              </span>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-0 mb-8 border-b border-white/10">
              {(['newsletter', 'team'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border-b-2 -mb-px ${
                    activeTab === tab
                      ? 'text-cyan-400 border-cyan-400'
                      : 'text-gray-600 border-transparent hover:text-gray-400'
                  }`}
                >
                  {tab === 'newsletter' ? '📬 Newsletter' : '👥 Das Team'}
                </button>
              ))}
            </div>

            {/* NEWSLETTER TAB */}
            {activeTab === 'newsletter' && (
              <div>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bolt-glow inline-block mb-6">
                      <BoltIcon size={48} />
                    </div>
                    <h3 className="headline text-white text-3xl mb-3">Danke!</h3>
                    <p className="text-gray-400 max-w-sm mx-auto">
                      Du bist jetzt dabei. Wir melden uns mit News, Events und Updates aus Wien.
                    </p>
                    <button
                      onClick={onClose}
                      className="btn-primary mt-8"
                    >
                      <span>Schließen</span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="headline text-white mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                      NEWS VON DEN<br />
                      <span className="gradient-text" style={{ fontSize: '1.2em' }}>HETZENDORFERS ERHALTEN</span>
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Bleib informiert über unsere Events, Bildungsprojekte und Neuigkeiten aus der
                      Wiener Medienbildungsszene.
                    </p>

                    {/* Benefits */}
                    <div className="grid sm:grid-cols-3 gap-3 mb-8">
                      {[
                        { icon: '⚡', title: 'Event-News', desc: 'Früher informiert' },
                        { icon: '📚', title: 'Bildungstipps', desc: 'Exklusive Inhalte' },
                        { icon: '🏆', title: 'Behind-the-Scenes', desc: 'Exklusiv für Abonnenten' },
                      ].map((b) => (
                        <div
                          key={b.title}
                          className="p-4 text-center border border-white/5"
                          style={{ background: 'rgba(15,32,64,0.4)' }}
                        >
                          <div className="text-2xl mb-2">{b.icon}</div>
                          <div className="text-white text-xs font-semibold mb-1">{b.title}</div>
                          <div className="text-gray-600 text-xs">{b.desc}</div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Vorname</label>
                          <input
                            className="input-field"
                            placeholder="Dein Vorname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">E-Mail *</label>
                          <input
                            type="email"
                            className="input-field"
                            placeholder="deine@email.at"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center"
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Wird eingetragen...
                          </span>
                        ) : (
                          <>
                            <span>Newsletter abonnieren</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-gray-600 text-xs text-center">
                        Kein Spam. Abmeldung jederzeit möglich.
                      </p>
                    </form>

                    {/* Social follow */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-4 text-center">Oder folg uns direkt</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Lukas · Instagram', href: 'https://www.instagram.com/lukas.hetzendorfer/', icon: <InstagramIcon size={18} /> },
                          { label: 'Lukas · LinkedIn', href: 'https://www.linkedin.com/in/lukashetzendorfer/', icon: <LinkedinIcon size={18} /> },
                          { label: 'Kathi · Instagram', href: 'https://www.instagram.com/kathi_schuetzenhoefer/', icon: <InstagramIcon size={18} /> },
                          { label: 'Kathi · LinkedIn', href: 'https://www.linkedin.com/in/kathi-hetzendorfer/', icon: <LinkedinIcon size={18} /> },
                        ].map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 text-xs"
                            style={{ background: 'rgba(15,32,64,0.3)' }}
                          >
                            {s.icon}
                            <span>{s.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TEAM TAB */}
            {activeTab === 'team' && (
              <div className="space-y-8">
                <div>
                  <h2 className="headline text-white mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                    WER STECKT<br />
                    <span className="gradient-text">DAHINTER</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Zwei Wiener, eine Mission: Medienbildung erlebbar machen.
                  </p>
                </div>

                {team.map((member) => (
                  <div
                    key={member.name}
                    className="relative p-6 overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, rgba(15,32,64,0.6) 0%, rgba(30,16,8,0.3) 100%)',
                      border: `1px solid ${member.color}22`,
                    }}
                  >
                    {/* Accent line */}
                    <div
                      className="absolute top-0 left-0 w-full h-0.5"
                      style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                    />

                    <div className="flex gap-6 items-start">
                      {/* Avatar */}
                      <div
                        className="w-16 h-16 flex items-center justify-center flex-shrink-0 text-xl font-bold"
                        style={{
                          background: `${member.color}18`,
                          border: `1px solid ${member.color}40`,
                          color: member.color,
                          fontFamily: 'Anton, sans-serif',
                        }}
                      >
                        {member.initials}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="headline text-white text-lg mb-0.5">{member.name}</h3>
                        <p style={{ color: member.color }} className="text-xs font-semibold tracking-wide mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                        {/* Social links */}
                        <div className="flex flex-wrap gap-2">
                          {member.social.map((s) => (
                            <a
                              key={s.label}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                              style={{ background: 'rgba(15,32,64,0.4)' }}
                            >
                              {s.icon}
                              <span>{s.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
