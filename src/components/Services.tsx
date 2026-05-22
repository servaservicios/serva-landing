import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Wind, Droplets, Bug, Wrench, Truck,
  MessageCircle, ChevronDown,
} from 'lucide-react'
import { SERVICE_CATEGORIES, WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Per-category visual config ──────────────────────────────────────────────
// Set `image` to a file path to swap the gradient placeholder for a real photo.
// objectPosition controls which part of the photo is visible when cropped.
interface CatConfig {
  Icon: React.ElementType
  tagline: string
  image: string | null
  objectPosition?: string
  /** Used only when image is null */
  gradient: string
  dotColor: string
}

const configs: Record<string, CatConfig> = {
  'limpieza': {
    Icon: Sparkles,
    tagline: 'Residencial, comercial e industrial',
    image: '/images/Residencial.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(13% 0.014 152) 0%, oklch(24% 0.024 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.12)',
  },
  'aire-acondicionado': {
    Icon: Wind,
    tagline: 'Sistemas HVAC, campanas y ductos',
    image: null, // TODO: add /images/aire-acondicionado.jpg
    gradient: 'linear-gradient(145deg, oklch(12% 0.010 215) 0%, oklch(24% 0.018 215) 100%)',
    dotColor: 'oklch(65% 0.13 215 / 0.12)',
  },
  'plomeria': {
    Icon: Droplets,
    tagline: 'Diagnóstico, corrección y prevención',
    image: null, // TODO: add /images/plomeria.jpg
    gradient: 'linear-gradient(145deg, oklch(12% 0.008 235) 0%, oklch(24% 0.014 230) 100%)',
    dotColor: 'oklch(62% 0.11 230 / 0.12)',
  },
  'fumigacion': {
    Icon: Bug,
    tagline: 'Control certificado de plagas y vectores',
    image: '/images/Institucional.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(13% 0.012 100) 0%, oklch(24% 0.022 95) 100%)',
    dotColor: 'oklch(70% 0.14 100 / 0.12)',
  },
  'instalaciones': {
    Icon: Wrench,
    tagline: 'Reparaciones, instalaciones y soporte técnico',
    image: '/images/Industrial.png',
    objectPosition: 'center top',
    gradient: 'linear-gradient(145deg, oklch(13% 0.010 50) 0%, oklch(24% 0.018 48) 100%)',
    dotColor: 'oklch(72% 0.13 50 / 0.12)',
  },
  'otros': {
    Icon: Truck,
    tagline: 'Mudanzas y servicios de apoyo',
    image: '/images/Equipo.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(12% 0.010 152) 0%, oklch(21% 0.014 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.08)',
  },
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28" aria-label="Servicios">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
              02 — Servicios
            </p>
            <h2
              className="font-black text-ink-900 leading-tight tracking-tight max-w-sm"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Todo lo que tu espacio necesita.
            </h2>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 bg-brand text-ink-950 font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" aria-hidden />
            Cotizar por WhatsApp
          </a>
        </motion.div>

        {/* Accordion cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col gap-3"
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const cfg = configs[cat.id] ?? configs['otros']
            const { Icon } = cfg
            const isOpen = open === cat.id

            return (
              <motion.div
                key={cat.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-brand/40 shadow-md shadow-brand/8'
                    : 'border-ink-100 hover:border-ink-200 hover:shadow-sm'
                }`}
              >
                {/* ── Clickable card header ── */}
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="w-full flex flex-col sm:flex-row text-left group"
                  aria-expanded={isOpen}
                >

                  {/* ── Visual panel ── */}
                  {/* Desktop: 320px wide, min 160px tall (self-stretches with content) */}
                  {/* Mobile: full width, 200px tall */}
                  <div
                    className="relative h-[200px] sm:h-auto sm:w-80 sm:min-h-[160px] shrink-0 overflow-hidden"
                    style={{ background: cfg.gradient }}
                  >
                    {cfg.image ? (
                      <>
                        {/* Real photo */}
                        <img
                          src={cfg.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          style={{ objectPosition: cfg.objectPosition ?? 'center center' }}
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Dark scrim — bottom-up, for icon badge readability */}
                        <div
                          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                          style={{
                            background: 'linear-gradient(to top, oklch(11% 0.010 152 / 0.72) 0%, transparent 100%)',
                          }}
                          aria-hidden
                        />
                      </>
                    ) : (
                      <>
                        {/* Placeholder: dot-grid texture */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, ${cfg.dotColor} 1px, transparent 0)`,
                            backgroundSize: '22px 22px',
                          }}
                          aria-hidden
                        />
                        {/* Large centered icon */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <Icon className="w-16 h-16 text-brand/70" aria-hidden />
                          <span className="text-ink-500/60 text-xs font-bold tracking-widest uppercase select-none">
                            {cat.name}
                          </span>
                        </div>
                      </>
                    )}

                    {/* Icon badge — always shown, anchored bottom-left */}
                    <span className="absolute bottom-3.5 left-3.5 z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-ink-950/65 backdrop-blur-sm border border-white/10">
                      <Icon className="w-4 h-4 text-brand" aria-hidden />
                    </span>
                  </div>

                  {/* ── Text content ── */}
                  <div className="flex-1 flex items-center justify-between gap-4 px-7 py-6">
                    <div className="min-w-0">
                      <p
                        className={`font-extrabold text-[1.0625rem] leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-ink-900' : 'text-ink-800 group-hover:text-ink-900'
                        }`}
                      >
                        {cat.name}
                      </p>
                      <p className="text-ink-400 text-xs font-semibold mt-1 leading-snug">
                        {cfg.tagline}
                      </p>
                    </div>

                    <div className="flex items-center gap-5 shrink-0">
                      <span className="text-xs font-bold text-ink-400 tabular-nums hidden md:block">
                        {cat.services.length} servicios
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease }}
                        className="text-brand"
                      >
                        <ChevronDown className="w-5 h-5" aria-hidden />
                      </motion.span>
                    </div>
                  </div>
                </button>

                {/* ── Expanded services ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-brand/15 bg-brand-subtle px-7 py-5 flex flex-wrap gap-2">
                        {cat.services.map(service => (
                          <span
                            key={service.id}
                            className="inline-flex items-center bg-white border border-ink-200 rounded-lg px-3.5 py-2 text-sm font-bold text-ink-700 hover:border-brand/45 hover:bg-brand/5 hover:text-ink-900 transition-all duration-150 cursor-default"
                          >
                            {service.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
