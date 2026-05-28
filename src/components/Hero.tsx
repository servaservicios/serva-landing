import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Sparkles, Wind, Droplet, Bug, Wrench, Layers, UserCheck, Gauge, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const heroStats = [
  { value: '+2,000', label: 'Servicios completados', delay: 0.7 },
  { value: '+60',    label: 'Servicios especializados', delay: 0.85 },
]

const trustBadges: Array<{ label: string; Icon: LucideIcon }> = [
  { label: 'Personal capacitado',               Icon: UserCheck   },
  { label: 'Productos y equipos profesionales', Icon: Gauge       },
  { label: 'Seguridad y confianza',             Icon: ShieldCheck },
]

const tickerCategories: Array<{ id: string; label: string; Icon: LucideIcon }> = [
  { id: 'limpieza',           label: 'Limpieza',           Icon: Sparkles },
  { id: 'aire-acondicionado', label: 'Aire Acondicionado', Icon: Wind     },
  { id: 'plomeria',           label: 'Plomería',           Icon: Droplet  },
  { id: 'fumigacion',         label: 'Fumigación',         Icon: Bug      },
  { id: 'instalaciones',      label: 'Instalaciones',      Icon: Wrench   },
  { id: 'otros',              label: 'Otros Servicios',    Icon: Layers   },
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
                className="text-ink-400 text-lg md:text-xl max-w-[500px] leading-relaxed mb-7"
              >
                Limpieza profesional y mantenimiento para{' '}
                <span className="text-brand font-extrabold">hogares y empresas</span>.{' '}
                <span className="text-ink-200 font-semibold">Un solo punto de contacto</span>{' '}
                para todos tus servicios.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10"
              >
                {trustBadges.map((badge, i) => (
                  <Fragment key={badge.label}>
                    <div className="flex items-center gap-1.5">
                      <badge.Icon className="w-3.5 h-3.5 text-brand shrink-0" aria-hidden />
                      <span className="text-ink-400 text-[13px] font-medium">{badge.label}</span>
                    </div>
                    {i < trustBadges.length - 1 && (
                      <span className="text-ink-700 text-xs select-none leading-none" aria-hidden>·</span>
                    )}
                  </Fragment>
                ))}
              </motion.div>

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
                  className="group inline-flex items-center gap-2 border border-ink-700/60 text-ink-300 font-bold text-sm px-5 py-2.5 rounded-xl hover:border-brand/70 hover:text-brand transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  Ver servicios
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden />
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

      {/* Bottom: service selector bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease }}
        className="relative z-10 border-t border-ink-800/30 py-4"
      >
        {/* Horizontal scroll on mobile, centered on desktop */}
        <div className="overflow-x-auto hide-scrollbar">
          <nav
            aria-label="Categorías de servicios"
            className="flex items-stretch mx-auto w-fit"
            style={{
              background: 'oklch(11% 0.010 152 / 0.68)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid oklch(55% 0.010 152 / 0.20)',
              borderRadius: '14px',
              boxShadow:
                '0 0 0 1px oklch(73.5% 0.186 152 / 0.07), ' +
                'inset 0 1px 0 oklch(100% 0 0 / 0.05), ' +
                '0 8px 24px oklch(8% 0.012 152 / 0.40)',
            }}
          >
            {tickerCategories.map((cat, i) => (
              <Fragment key={cat.id}>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                      window.dispatchEvent(
                        new CustomEvent('serva:open-category', { detail: cat.id })
                      )
                    }, 0)
                  }}
                  className="group relative flex items-center gap-2 px-5 py-3.5 text-ink-500 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:text-brand"
                  style={{ borderRadius: i === 0 ? '13px 0 0 13px' : i === tickerCategories.length - 1 ? '0 13px 13px 0' : undefined }}
                >
                  {/* Hover tint layer */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{
                      background: 'oklch(73.5% 0.186 152 / 0.07)',
                      borderRadius: 'inherit',
                    }}
                    aria-hidden
                  />
                  <cat.Icon
                    className="w-[15px] h-[15px] shrink-0 relative z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden
                  />
                  <span className="relative z-10">{cat.label}</span>
                </a>
                {i < tickerCategories.length - 1 && (
                  <div
                    className="w-px self-stretch my-2.5 shrink-0"
                    style={{ background: 'oklch(55% 0.010 152 / 0.22)' }}
                    aria-hidden
                  />
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </motion.div>
    </section>
  )
}
