import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/96 backdrop-blur-xl border-b border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 max-w-[1440px] mx-auto">
        <a href="/" className="flex items-center group" aria-label="SERVA inicio">
          <img
            src="/images/Logo%20Verde.png"
            alt="SERVA"
            className="h-8 w-auto"
            draggable={false}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-ink-400 hover:text-ink-100 text-sm font-semibold transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-brand/60 text-brand font-bold text-sm px-5 py-2 rounded-lg hover:bg-brand hover:text-ink-950 hover:border-brand transition-all duration-200"
        >
          Cotización gratis
        </a>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-ink-200 p-2 -mr-2 hover:text-ink-50 transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-ink-950/98 backdrop-blur-xl border-b border-ink-800/60 px-6 pt-4 pb-8"
          >
            <ul className="flex flex-col gap-5 mb-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-ink-200 hover:text-ink-50 font-bold text-2xl transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center bg-brand text-ink-950 font-extrabold text-base py-4 rounded-xl"
            >
              Solicitar cotización por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
