import { useState } from 'react'
import { useReveal } from './useReveal'
import { BoltIcon, MailIcon, ArrowRight, InstagramIcon, LinkedinIcon } from './Icons'

export default function Kontakt() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', betreff: '', nachricht: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #050a1a 0%, #0a1628 60%, #050a1a 100%)' }}
      />

      {/* Bottom bolt decoration */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <svg width="500" height="600" viewBox="0 0 24 24" fill="none">
          <polygon points="13,1 4,14 12,14 11,23 20,10 12,10" fill="#ff6b2b" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BoltIcon size={16} />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Kontakt & Anfragen</span>
          </div>
          <h2 className="headline text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            LASS UNS <span className="gradient-text">REDEN</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Du hast ein Projekt, eine Idee, oder willst einfach mehr wissen?
            Schreib uns — wir freuen uns auf den Austausch.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2 reveal">
            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:office@diehetzendorfers.com"
                className="flex items-center gap-4 p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
                style={{ background: 'rgba(15,32,64,0.4)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}
                >
                  <MailIcon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">E-Mail</div>
                  <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                    office@diehetzendorfers.com
                  </div>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 border border-white/5"
                style={{ background: 'rgba(15,32,64,0.4)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,43,0.1)', border: '1px solid rgba(255,107,43,0.2)' }}
                >
                  <span className="text-orange-400 text-lg font-bold">📍</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Standort</div>
                  <div className="text-white text-sm font-medium">Wien, Österreich</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-4">Social Media</div>
              <div className="flex gap-3">
                {[
                  { icon: <InstagramIcon size={20} />, label: 'Instagram', href: 'https://instagram.com/diehetzendorfers' },
                  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', href: 'https://linkedin.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                    style={{ background: 'rgba(15,32,64,0.3)' }}
                  >
                    {s.icon}
                    <span className="text-xs tracking-wide">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Website */}
            <div className="mt-8 p-5 border border-cyan-500/15" style={{ background: 'rgba(0,229,255,0.04)' }}>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Website</div>
              <a
                href="https://diehetzendorfers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm hover:text-white transition-colors font-medium"
              >
                diehetzendorfers.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal delay-200">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center p-16 text-center"
                style={{
                  background: 'rgba(0,229,255,0.04)',
                  border: '1px solid rgba(0,229,255,0.2)',
                }}
              >
                <div className="bolt-glow mb-6">
                  <BoltIcon size={48} />
                </div>
                <h3 className="headline text-white text-3xl mb-3">Danke!</h3>
                <p className="text-gray-400">
                  Deine Nachricht ist bei uns angekommen. Wir melden uns so bald wie möglich.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Name *</label>
                    <input
                      className="input-field"
                      placeholder="Dein Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">E-Mail *</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="deine@email.at"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Betreff</label>
                  <select
                    className="input-field appearance-none cursor-pointer"
                    value={form.betreff}
                    onChange={(e) => setForm({ ...form, betreff: e.target.value })}
                  >
                    <option value="" disabled>Worum geht es?</option>
                    <option>Eventanfrage – Schule / Bildung</option>
                    <option>Eventanfrage – Corporate</option>
                    <option>Medienworkshop</option>
                    <option>Presseanfrage</option>
                    <option>Partnerschaft / Kooperation</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Nachricht *</label>
                  <textarea
                    className="input-field resize-none"
                    rows={6}
                    placeholder="Erzähl uns von deinem Projekt, deiner Schule, deiner Idee..."
                    value={form.nachricht}
                    onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-secondary w-full justify-center text-sm"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <>
                      <span>Nachricht senden</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs leading-relaxed">
                  Mit dem Absenden stimmst du zu, dass wir deine Daten zur Bearbeitung deiner Anfrage verwenden.
                  Datenschutzerklärung unter{' '}
                  <a href="#" className="text-cyan-600 hover:text-cyan-400 transition-colors">
                    diehetzendorfers.com/datenschutz
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
