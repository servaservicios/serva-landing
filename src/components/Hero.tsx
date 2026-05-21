import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL, SERVICES } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const allServiceNames = SERVICES.map(s => s.name)

const heroStats = [
  { value: '500+', label: 'Proyectos completados', delay: 0.7 },
  { value: '12', label: 'Servicios especializados', delay: 0.85 },
  { value: '100%', label: 'Satisfacción garantizada', delay: 1.0 },
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

      {/* Main content */}
      <div className="flex-1 flex items-center">
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
                Limpieza profesional y mantenimiento integral para hogares y empresas.
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
                  Solicitar cotización
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

            {/* Right: stat cards (desktop only) */}
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
                      : i === 1
                      ? 'bg-ink-800/50 border-ink-700/50'
                      : 'bg-ink-900/60 border-ink-800/40'
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

              {/* Zone tag */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.15, duration: 0.65, ease }}
                className="flex items-center gap-3 border border-ink-800/40 rounded-2xl px-7 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-brand shrink-0" aria-hidden />
                <span className="text-ink-400 text-sm font-semibold">
                  Monterrey y Área Metropolitana
                </span>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom service ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="border-t border-ink-800/40 px-8 md:px-16 lg:px-24 py-5"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
            <span className="text-ink-700 text-xs font-extrabold tracking-widest uppercase shrink-0">
              Servicios
            </span>
            {allServiceNames.map((name, i) => (
              <span
                key={name}
                className="text-ink-600 text-sm font-medium flex items-center gap-5"
              >
                {name}
                {i < allServiceNames.length - 1 && (
                  <span className="text-ink-800 select-none" aria-hidden>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
