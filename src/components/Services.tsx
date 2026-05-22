import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Wind, Droplets, Bug, Wrench, Truck,
  MessageCircle, ChevronDown,
} from 'lucide-react'
import { SERVICE_CATEGORIES, WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Per-category config ────────────────────────────────────────────────────
// To add a real photo: set `image` to the path, e.g. '/images/limpieza.jpg'
// The gradient is shown only when image is null.
interface CatConfig {
  Icon: React.ElementType
  image: string | null
  tagline: string
  /** CSS gradient string — used only when image is null */
  gradient: string
  /** Accent hue for the dot-grid overlay on the image panel */
  dotColor: string
}

const configs: Record<string, CatConfig> = {
  'limpieza': {
    Icon: Sparkles,
    image: null,
    tagline: 'Residencial, comercial e industrial',
    gradient: 'linear-gradient(145deg, oklch(13% 0.014 152) 0%, oklch(23% 0.022 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.10)',
  },
  'aire-acondicionado': {
    Icon: Wind,
    image: null,
    tagline: 'Sistemas HVAC, campanas y ductos',
    gradient: 'linear-gradient(145deg, oklch(13% 0.010 215) 0%, oklch(23% 0.016 215) 100%)',
    dotColor: 'oklch(65% 0.12 215 / 0.10)',
  },
  'plomeria': {
    Icon: Droplets,
    image: null,
    tagline: 'Diagnóstico, corrección y prevención',
    gradient: 'linear-gradient(145deg, oklch(13% 0.008 240) 0%, oklch(23% 0.013 235) 100%)',
    dotColor: 'oklch(65% 0.10 235 / 0.10)',
  },
  'fumigacion': {
    Icon: Bug,
    image: null,
    tagline: 'Control certificado de plagas y vectores',
    gradient: 'linear-gradient(145deg, oklch(13% 0.012 100) 0%, oklch(23% 0.020 95) 100%)',
    dotColor: 'oklch(70% 0.14 100 / 0.10)',
  },
  'instalaciones': {
    Icon: Wrench,
    image: null,
    tagline: 'Reparaciones, instalaciones y soporte técnico',
    gradient: 'linear-gradient(145deg, oklch(13% 0.010 55) 0%, oklch(23% 0.016 50) 100%)',
    dotColor: 'oklch(72% 0.12 55 / 0.10)',
  },
  'otros': {
    Icon: Truck,
    image: null,
    tagline: 'Mudanzas y servicios de apoyo',
    gradient: 'linear-gradient(145deg, oklch(13% 0.010 152) 0%, oklch(20% 0.012 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.07)',
  },
}

// ─── Component ──────────────────────────────────────────────────────────────
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

        {/* Cards */}
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
                    ? 'border-brand/40 shadow-sm shadow-brand/10'
                    : 'border-ink-100 hover:border-ink-200'
                }`}
              >
                {/* ── Card header (clickable) ── */}
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="w-full flex flex-col sm:flex-row text-left group"
                  aria-expanded={isOpen}
                >

                  {/* Visual panel — swap `cfg.image` for a real photo path */}
                  <div
                    className="h-40 sm:h-auto sm:w-60 shrink-0 relative flex items-center justify-center overflow-hidden"
                    style={{ background: cfg.image ? undefined : cfg.gradient }}
                  >
                    {cfg.image ? (
                      <img
                        src={cfg.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <>
                        {/* Dot-grid texture */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, ${cfg.dotColor} 1px, transparent 0)`,
                            backgroundSize: '20px 20px',
                          }}
                          aria-hidden
                        />
                        {/* Large icon */}
                        <Icon
                          className="w-12 h-12 text-brand relative z-10 drop-shadow-sm"
                          aria-hidden
                        />
                      </>
                    )}

                    {/* Right-edge fade into card body on desktop */}
                    <div
                      className="absolute inset-y-0 right-0 w-8 hidden sm:block pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, transparent, oklch(100% 0 0 / 0.04))',
                      }}
                      aria-hidden
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex items-center justify-between gap-6 px-6 py-6 sm:px-8">
                    <div className="min-w-0">
                      <p
                        className={`font-extrabold text-base leading-snug transition-colors duration-200 ${
                          isOpen
                            ? 'text-ink-900'
                            : 'text-ink-800 group-hover:text-ink-900'
                        }`}
                      >
                        {cat.name}
                      </p>
                      <p className="text-ink-400 text-xs font-semibold mt-0.5 leading-snug">
                        {cfg.tagline}
                      </p>
                    </div>

                    {/* Right: count + chevron */}
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

                {/* ── Expanded services panel ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-brand/15 bg-brand-subtle px-6 sm:px-8 py-5 flex flex-wrap gap-2">
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
