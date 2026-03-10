import { useEffect, useRef, useState } from 'react'

const services = [
  {
    tag: 'Digital',
    title: 'Social Media Literacy Workshops',
    desc: 'Interaktive Workshops zur kritischen Medienkompetenz — von Fake News erkennen bis hin zu verantwortungsvollem Content-Erstellen.',
    features: ['Faktencheck-Training', 'Content-Strategie', 'Plattform-Know-how'],
    color: 'cyan',
  },
  {
    tag: 'Sport',
    title: 'Athleten & Vereine im Netz',
    desc: 'Sportler und Vereine lernen, ihre Marke digital aufzubauen und Sponsoren, Fans und Medien professionell anzusprechen.',
    features: ['Personal Branding', 'Sponsoring-Content', 'Community-Aufbau'],
    color: 'orange',
  },
  {
    tag: 'Schule',
    title: 'Medienbildungs-Events',
    desc: 'Ganztägige Veranstaltungen und Keynotes fuer Schulen, Universitaeten und Bildungseinrichtungen in ganz Oesterreich.',
    features: ['Keynotes & Vortraege', 'Interaktive Sessions', 'Q&A mit Lukas & Kathi'],
    color: 'gold',
  },
  {
    tag: 'Business',
    title: 'Corporate Social Media',
    desc: 'Unternehmen und Teams erhalten praxisnahes Training fuer professionelle Unternehmenskommunikation auf Social Media.',
    features: ['LinkedIn-Strategie', 'Content-Planung', 'Employer Branding'],
    color: 'cyan',
  },
  {
    tag: 'Coaching',
    title: '1:1 Personal Coaching',
    desc: 'Individuelle Beratung fuer Einzelpersonen und Fuehrungskraefte, die ihre digitale Praesenz auf das naechste Level bringen wollen.',
    features: ['Persoenliche Strategie', 'Account-Audit', 'Umsetzungsbegleitung'],
    color: 'orange',
  },
  {
    tag: 'Award',
    title: 'Ausgezeichnete Expertise',
    desc: 'Mit mehrfach preisgekroenter Arbeit und nationaler Medienpraesenez bringen wir glaubwuerdige, inspirierende Inhalte zu Ihrem Event.',
    features: ['Preisgetraege Projekte', 'Nationale TV/Radio-Praesenez', 'Peer-Netzwerk'],
    color: 'gold',
  },
]

export default function Leistungen() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="leistungen" ref={sectionRef} className="py-24 bg-navy-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-4">— Was wir tun —</p>
          <h2 className="section-heading text-white">
            UNSERE{' '}
            <span className="text-brand-cyan">LEISTUNGEN</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`tag-pill ${service.color === 'orange' ? 'border-brand-orange/30 text-brand-orange bg-brand-orange/5' : service.color === 'gold' ? 'border-brand-gold/30 text-brand-gold bg-brand-gold/5' : ''}`}>
                  {service.tag}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
              <ul className="space-y-1">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#kontakt" className="btn-primary">
            Event anfragen
          </a>
        </div>
      </div>
    </section>
  )
}
