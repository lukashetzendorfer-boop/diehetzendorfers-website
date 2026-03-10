import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Leistungen from './components/Leistungen'
import UeberUns from './components/UeberUns'
import Statistiken from './components/Statistiken'
import Presse from './components/Presse'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import NewsletterModal from './components/NewsletterModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onNewsletterClick={() => setModalOpen(true)} />
      <main>
        <Hero />
        <Leistungen />
        <UeberUns />
        <Statistiken />
        <Presse />
        <Kontakt />
      </main>
      <Footer onNewsletterClick={() => setModalOpen(true)} />
      <NewsletterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
