import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const heroStats = [
  { value: '+2,000', label: 'Servicios completados', delay: 0.7 },
  { value: '+60',    label: 'Servicios especializados', delay: 0.85 },
]

const tickerServices = [
  'Limpieza',
  'Aire Acondicionado',
  'Plomería',
  'Fumigación',
  'Instalaciones',
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-svh bg-ink-950 relative overflow-hidden flex flex-col"
      aria-label="Inicio"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 hero-dot-grid pointer-events-none" aria-hidden />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand" aria-hidden />

      {/* Top-left glow */}
      <div
        className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, oklch(73.5% 0.186 152 / 0.07) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      {/* Hero background photo */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ zIndex: 5 }}
        aria-hidden
      >
        <img
          src="/images/Personal.png"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Dark overlay — preserves text legibility and brand aesthetic */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, oklch(8% 0.012 152 / 0.84) 0%, oklch(8% 0.012 152 / 0.70) 100%)',
          }}
          aria-hidden
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="px-8 md:px-16 lg:px-24 pt-28 pb-8 lg:pt-0 lg:pb-0 max-w-[1440px] mx-auto w-full">
          <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-16 xl:gap-24 lg:items-center">

            {/* Left: headline + CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                }}
                className="text-brand font-extrabold text-xs tracking-[0.22em] uppercase mb-7 whitespace-nowrap"
              >
                Monterrey y Área Metropolitana
              </motion.p>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                }}
                className="font-black text-ink-50 leading-[0.9] tracking-tight mb-8"
                style={{ fontSize: 'var(--text-display)' }}
              >
                Tu espacio,
                <br />
                <span className="text-brand">impecable.</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                className="text-ink-400 text-lg md:text-xl max-w-[500px] leading-relaxed mb-12"
              >
                Limpieza profesional y mantenimiento integral para{' '}
                <span className="text-brand font-extrabold">hogares y empresas</span>.{' '}
                Rápidos, confiables, al alcance de un mensaje.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                }}
                className="flex flex-wrap gap-4 items-center"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand text-ink-950 font-extrabold text-base px-7 py-3.5 rounded-xl hover:bg-brand-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden />
                  Cotizar por WhatsApp
                </a>

                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 text-ink-300 font-semibold text-sm hover:text-ink-50 transition-colors duration-150"
                >
                  Ver servicios
                  <ChevronDown className="w-4 h-4" aria-hidden />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: stat cards + scope stamp (desktop only) */}
            <div className="hidden lg:flex flex-col gap-3">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: stat.delay, duration: 0.65, ease }}
                  className={`rounded-2xl px-7 py-5 border ${
                    i === 0
                      ? 'bg-brand/10 border-brand/20'
                      : 'bg-ink-800/50 border-ink-700/50'
                  }`}
                >
                  <p
                    className={`font-black leading-none mb-1.5 ${
                      i === 0 ? 'text-brand' : 'text-ink-100'
                    }`}
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-ink-500 text-sm font-semibold">{stat.label}</p>
                </motion.div>
              ))}

              {/* Operational status card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.65, ease }}
                className="rounded-2xl px-7 py-5 border bg-ink-900/60 border-ink-800/40"
              >
                {/* Live status badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="text-brand text-[10px] font-extrabold tracking-[0.22em] uppercase">
                    Operación activa
                  </span>
                </div>

                {/* Hairline separator */}
                <div className="border-t border-ink-700/40 mb-4" />

                {/* Body text */}
                <p
                  className="font-extrabold text-ink-100 leading-snug"
                  style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)' }}
                >
                  Atención rápida y coordinación profesional
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom service ticker — simplified */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-ink-800/40 px-8 md:px-16 lg:px-24 py-5"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
            <span className="text-ink-700 text-xs font-extrabold tracking-widest uppercase shrink-0">
              Servicios
            </span>
            {tickerServices.map((name, i) => (
              <span
                key={name}
                className="text-ink-500 text-sm font-medium flex items-center gap-8"
              >
                {name}
                {i < tickerServices.length - 1 && (
                  <span className="text-ink-700 select-none" aria-hidden>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
