import { useState, useEffect } from 'react'

interface NavbarProps {
  onNewsletterClick?: () => void
}

const navItems = [
  { label: 'Start', href: '#hero' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Lukas + Kathi', href: '#ueber-uns' },
  { label: 'Ueber Uns', href: '#ueber-uns' },
  { label: 'Zahlen', href: '#statistiken' },
  { label: 'Presse', href: '#presse' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar({ onNewsletterClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-cyan-500/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-cyan rounded flex items-center justify-center">
            <span className="font-anton text-navy-950 text-sm font-bold italic">H</span>
          </div>
          <span className="hidden sm:inline font-montserrat font-bold text-white text-sm tracking-widest uppercase">
            Die Hetzendorfers
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <button
            onClick={onNewsletterClick}
            className="nav-link text-brand-cyan hover:text-white"
          >
            Newsletter
          </button>
          <a href="#kontakt" className="btn-primary text-xs py-2 px-5">
            Event buchen
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-base py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onNewsletterClick?.() }}
            className="nav-link text-brand-cyan text-left py-2"
          >
            Newsletter
          </button>
          <a href="#kontakt" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
            Event buchen
          </a>
        </div>
      )}
    </nav>
  )
}
