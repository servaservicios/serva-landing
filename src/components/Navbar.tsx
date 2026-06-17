import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '../lib/constants'

// ─── Service dropdown data ─────────────────────────────────────────────────────
const SERVICE_DROPDOWN = [
  { id: 'limpieza',           label: 'Limpieza' },
  { id: 'aire-acondicionado', label: 'Aire Acondicionado' },
  { id: 'plomeria',           label: 'Plomería' },
  { id: 'fumigacion',         label: 'Fumigación' },
  { id: 'instalaciones',      label: 'Instalaciones y Mantenimiento' },
  { id: 'otros',              label: 'Otros Servicios' },
]

function openCategory(id: string) {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('serva:open-category', { detail: id }))
  }, 0)
}

const dropdownStyle: React.CSSProperties = {
  background: 'oklch(11% 0.010 152 / 0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid oklch(55% 0.010 152 / 0.22)',
  borderRadius: '12px',
  boxShadow:
    '0 0 0 1px oklch(73.5% 0.186 152 / 0.08), ' +
    'inset 0 1px 0 oklch(100% 0 0 / 0.05), ' +
    '0 20px 40px oklch(8% 0.012 152 / 0.55)',
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false)
  const [mobileOpen, setMobileOpen]           = useState(false)
  const [servicesOpen, setServicesOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)

  // Scroll state for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Reset mobile sub-accordion when mobile menu closes
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false)
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/96 backdrop-blur-xl border-b border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 max-w-[1440px] mx-auto">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center group"
          aria-label="SERVA inicio"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src="/images/Logo%20Verde.png"
            alt="SERVA"
            className="h-20 w-auto"
            width={160}
            height={80}
            fetchPriority="high"
            draggable={false}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => {
            // ── Servicios dropdown ──
            if (link.label === 'Servicios') {
              return (
                <li
                  key={link.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen(v => !v)}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-150 ${
                      servicesOpen ? 'text-ink-100' : 'text-ink-400 hover:text-ink-100'
                    }`}
                  >
                    Servicios
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-52"
                        style={dropdownStyle}
                        role="menu"
                        aria-label="Categorías de servicios"
                      >
                        <ul className="p-1.5" role="list">
                          {SERVICE_DROPDOWN.map(cat => (
                            <li key={cat.id} role="none">
                              <a
                                href="#servicios"
                                role="menuitem"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setServicesOpen(false)
                                  openCategory(cat.id)
                                }}
                                className="flex items-center px-3.5 py-2.5 rounded-lg text-ink-400 text-sm font-semibold hover:text-brand hover:bg-brand/[0.08] transition-all duration-150"
                              >
                                {cat.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            }

            // ── Regular link ──
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-ink-400 hover:text-ink-100 text-sm font-semibold transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-brand/60 text-brand font-bold text-sm px-5 py-2 rounded-lg hover:bg-brand hover:text-ink-950 hover:border-brand transition-all duration-200"
        >
          Cotización gratis
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="md:hidden text-ink-200 p-2 -mr-2 hover:text-ink-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-ink-950/98 backdrop-blur-xl border-b border-ink-800/60 px-6 pt-4 pb-8"
          >
            <ul className="flex flex-col gap-5 mb-8" role="list">
              {NAV_LINKS.map(link => {
                // ── Servicios accordion ──
                if (link.label === 'Servicios') {
                  return (
                    <li key={link.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(v => !v)}
                        className="flex items-center gap-2 text-ink-200 hover:text-ink-50 font-bold text-2xl transition-colors text-left"
                      >
                        Servicios
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="flex flex-col gap-3 mt-4 pl-5 border-l border-ink-800/60 overflow-hidden"
                            role="list"
                          >
                            {SERVICE_DROPDOWN.map(cat => (
                              <li key={cat.id}>
                                <a
                                  href="#servicios"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    openCategory(cat.id)
                                    closeMobile()
                                  }}
                                  className="text-ink-400 hover:text-brand font-semibold text-lg transition-colors"
                                >
                                  {cat.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                }

                // ── Regular link ──
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="text-ink-200 hover:text-ink-50 font-bold text-2xl transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
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
