import { BoltIcon, InstagramIcon, LinkedinIcon, MailIcon } from './Icons'

interface FooterProps {
  onNewsletterClick?: () => void
}

export default function Footer({ onNewsletterClick }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050a1a 0%, #030810 100%)',
        borderTop: '1px solid rgba(0,229,255,0.08)',
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #00e5ff40, #ff6b2b40, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bolt-glow">
                <BoltIcon size={24} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="headline text-white text-lg tracking-wider">Die</span>
                <span className="headline gradient-text text-lg tracking-wider -mt-1">Hetzendorfers</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Medienbildungs-Events aus Wien, die Social-Media-Literacy mit professionellem Sport verbinden.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/diehetzendorfers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:office@diehetzendorfers.com"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
              >
                <MailIcon size={20} />
              </a>
            </div>
            {onNewsletterClick && (
              <button
                onClick={onNewsletterClick}
                className="btn-primary mt-6 text-xs"
              >
                <span>Newsletter</span>
              </button>
            )}
          </div>

          {/* Links */}
          <div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2">
              {[
                { label: 'Leistungen', href: '#leistungen' },
                { label: 'Über uns', href: '#ueber-uns' },
                { label: 'Statistiken', href: '#statistiken' },
                { label: 'Presse', href: '#presse' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-cyan-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-4">Rechtliches</div>
            <ul className="space-y-2">
              {['Impressum', 'Datenschutz', 'AGB', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-2">Adresse</div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Wien, Österreich<br />
                <a href="https://diehetzendorfers.com" className="text-cyan-600 hover:text-cyan-400 transition-colors">
                  diehetzendorfers.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-600 text-xs">
            © {year} Die Hetzendorfers. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-700 text-xs">
            Made with ⚡ in Wien
          </p>
        </div>
      </div>
    </footer>
  )
}
