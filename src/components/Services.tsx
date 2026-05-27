import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Wind, Droplets, Bug, Wrench, Truck,
  MessageCircle, ChevronDown,
} from 'lucide-react'
import { SERVICE_CATEGORIES, WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/constants'

function serviceWhatsAppUrl(serviceName: string) {
  const msg = `Hola, me interesa cotizar el servicio de ${serviceName}.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Category-level config ───────────────────────────────────────────────────
interface CatConfig {
  Icon: React.ElementType
  tagline: string
  /** Parent card visual */
  image: string | null
  objectPosition?: string
  gradient: string
  dotColor: string
  /** Child service card placeholder palette */
  childGradient: string
  childIconColor: string
}

const configs: Record<string, CatConfig> = {
  'limpieza': {
    Icon: Sparkles,
    tagline: 'Residencial, comercial e industrial',
    image: '/images/Residencial.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(13% 0.014 152) 0%, oklch(24% 0.024 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.12)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.014 152) 0%, oklch(91% 0.030 152) 100%)',
    childIconColor: 'oklch(45% 0.18 152)',
  },
  'aire-acondicionado': {
    Icon: Wind,
    tagline: 'Sistemas HVAC, campanas y ductos',
    image: null,
    gradient: 'linear-gradient(145deg, oklch(12% 0.010 215) 0%, oklch(24% 0.018 215) 100%)',
    dotColor: 'oklch(65% 0.13 215 / 0.12)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.010 215) 0%, oklch(91% 0.022 210) 100%)',
    childIconColor: 'oklch(38% 0.14 215)',
  },
  'plomeria': {
    Icon: Droplets,
    tagline: 'Diagnóstico, corrección y prevención',
    image: null,
    gradient: 'linear-gradient(145deg, oklch(12% 0.008 235) 0%, oklch(24% 0.014 230) 100%)',
    dotColor: 'oklch(62% 0.11 230 / 0.12)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.008 235) 0%, oklch(91% 0.018 228) 100%)',
    childIconColor: 'oklch(36% 0.12 230)',
  },
  'fumigacion': {
    Icon: Bug,
    tagline: 'Control certificado de plagas y vectores',
    image: '/images/Institucional.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(13% 0.012 100) 0%, oklch(24% 0.022 95) 100%)',
    dotColor: 'oklch(70% 0.14 100 / 0.12)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.012 100) 0%, oklch(91% 0.026 94) 100%)',
    childIconColor: 'oklch(40% 0.17 95)',
  },
  'instalaciones': {
    Icon: Wrench,
    tagline: 'Reparaciones, instalaciones y soporte técnico',
    image: '/images/Industrial.png',
    objectPosition: 'center top',
    gradient: 'linear-gradient(145deg, oklch(13% 0.010 50) 0%, oklch(24% 0.018 48) 100%)',
    dotColor: 'oklch(72% 0.13 50 / 0.12)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.010 52) 0%, oklch(91% 0.022 48) 100%)',
    childIconColor: 'oklch(40% 0.15 50)',
  },
  'otros': {
    Icon: Truck,
    tagline: 'Mudanzas y servicios de apoyo',
    image: '/images/Equipo.png',
    objectPosition: 'center center',
    gradient: 'linear-gradient(145deg, oklch(12% 0.010 152) 0%, oklch(21% 0.014 152) 100%)',
    dotColor: 'oklch(73.5% 0.186 152 / 0.08)',
    childGradient: 'linear-gradient(145deg, oklch(97% 0.008 152) 0%, oklch(93% 0.016 152) 100%)',
    childIconColor: 'oklch(35% 0.12 152)',
  },
}

// ─── Service-level config ────────────────────────────────────────────────────
// Set `image` + `objectPosition` to use a real photo for any individual service.
interface ServiceConfig {
  subtitle: string
  image?: string
  objectPosition?: string
}

const serviceConfigs: Record<string, ServiceConfig> = {
  // Limpieza
  'limpieza-general':           { subtitle: 'Equipo dedicado en tus instalaciones' },
  'limpieza-ventanas':          { subtitle: 'Interior, exterior y en altura', image: '/images/Comercial.png', objectPosition: 'center center' },
  'limpieza-muebles':           { subtitle: 'Tratamiento por tipo de material' },
  'limpieza-pisos':             { subtitle: 'Pulido, abrillantado y restauración' },
  'limpieza-post-construccion': { subtitle: 'Obra terminada, lista para usar' },
  'limpieza-profunda':          { subtitle: 'Cada rincón, sin excepción' },
  'limpieza-fosas':             { subtitle: 'Extracción y saneamiento' },
  'limpieza-trampas':           { subtitle: 'Mantenimiento preventivo certificado' },
  // Aire acondicionado
  'mantenimiento-ac':           { subtitle: 'Eficiencia y vida útil prolongada' },
  'limpieza-campanas':          { subtitle: 'Ambiente libre de grasas' },
  'cambio-filtros':             { subtitle: 'Calidad del aire garantizada' },
  'extractor-hongo':            { subtitle: 'Extracción limpia y segura' },
  // Plomería
  'diagnosticos':               { subtitle: 'Detección temprana de fallas' },
  'fugas':                      { subtitle: 'Reparación permanente' },
  'desazolves':                 { subtitle: 'Tuberías despejadas y funcionales' },
  'llaves-valvulas':            { subtitle: 'Instalación y reemplazo' },
  // Fumigación
  'insectos-rastreros':         { subtitle: 'Control efectivo de largo plazo' },
  'cucaracha-alemana':          { subtitle: 'Protocolo especializado' },
  'termitas':                   { subtitle: 'Protección estructural completa' },
  'roedores':                   { subtitle: 'Barreras y trampas certificadas' },
  // Instalaciones
  'mantenimiento-general':      { subtitle: 'Soporte técnico en sitio' },
  'mantenimiento-refrigeradores': { subtitle: 'Temperatura y rendimiento óptimos' },
  'herrajes':                   { subtitle: 'Puertas, ventanas y cerraduras' },
  'instalacion-tvs':            { subtitle: 'Montaje seguro y preciso' },
  'armado-muebles':             { subtitle: 'Ensamble profesional en sitio' },
  'reparaciones-generales':     { subtitle: 'Un técnico para todo' },
  // Otros
  'mudanzas':                   { subtitle: 'Traslado seguro de tus pertenencias' },
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
                {/* ── Clickable category card header ── */}
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="w-full flex flex-col sm:flex-row text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Visual panel */}
                  <div
                    className="relative h-[200px] sm:h-auto sm:w-80 sm:min-h-[160px] shrink-0 overflow-hidden"
                    style={{ background: cfg.gradient }}
                  >
                    {cfg.image ? (
                      <>
                        <img
                          src={cfg.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          style={{ objectPosition: cfg.objectPosition ?? 'center center' }}
                          loading="lazy"
                          decoding="async"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                          style={{ background: 'linear-gradient(to top, oklch(11% 0.010 152 / 0.72) 0%, transparent 100%)' }}
                          aria-hidden
                        />
                      </>
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, ${cfg.dotColor} 1px, transparent 0)`,
                            backgroundSize: '22px 22px',
                          }}
                          aria-hidden
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <Icon className="w-16 h-16 text-brand/70" aria-hidden />
                          <span className="text-ink-500/60 text-xs font-bold tracking-widest uppercase select-none">
                            {cat.name}
                          </span>
                        </div>
                      </>
                    )}
                    <span className="absolute bottom-3.5 left-3.5 z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-ink-950/65 backdrop-blur-sm border border-white/10">
                      <Icon className="w-4 h-4 text-brand" aria-hidden />
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex items-center justify-between gap-4 px-7 py-6">
                    <div className="min-w-0">
                      <p className={`font-extrabold text-[1.0625rem] leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-ink-900' : 'text-ink-800 group-hover:text-ink-900'
                      }`}>
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

                {/* ── Expanded: visual service cards ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-brand/15 bg-brand-subtle px-5 sm:px-6 pt-5 pb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {cat.services.map((service) => {
                            const svc = serviceConfigs[service.id] ?? { subtitle: '' }
                            const hasImage = Boolean(svc.image)

                            return (
                              <a
                                key={service.id}
                                href={serviceWhatsAppUrl(service.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Cotizar ${service.name} por WhatsApp`}
                                className="group/card bg-white rounded-xl border border-ink-100 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/8 hover:border-brand/30 transition-all duration-200"
                              >
                                {/* Service image / placeholder */}
                                <div
                                  className="aspect-[4/3] relative overflow-hidden shrink-0"
                                  style={{ background: hasImage ? undefined : cfg.childGradient }}
                                >
                                  {hasImage ? (
                                    <>
                                      <img
                                        src={svc.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-[1.05] transition-transform duration-400 ease-out"
                                        style={{ objectPosition: svc.objectPosition ?? 'center center' }}
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <div
                                        className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                                        style={{ background: 'linear-gradient(to top, oklch(11% 0.010 152 / 0.45) 0%, transparent 100%)' }}
                                        aria-hidden
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {/* Subtle dot texture on placeholder */}
                                      <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                          backgroundImage: `radial-gradient(circle at 1px 1px, ${cfg.dotColor} 1px, transparent 0)`,
                                          backgroundSize: '18px 18px',
                                        }}
                                        aria-hidden
                                      />
                                      {/* Centered icon */}
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <Icon
                                          className="w-9 h-9 transition-transform duration-200 group-hover/card:scale-110"
                                          style={{ color: cfg.childIconColor }}
                                          aria-hidden
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>

                                {/* Service name + subtitle */}
                                <div className="px-3.5 py-3 flex-1">
                                  <p className="font-bold text-sm text-ink-900 leading-snug group-hover/card:text-ink-950 transition-colors duration-150">
                                    {service.name}
                                  </p>
                                  {svc.subtitle && (
                                    <p className="text-[11px] font-semibold text-ink-400 mt-1 leading-snug">
                                      {svc.subtitle}
                                    </p>
                                  )}
                                </div>
                              </a>
                            )
                          })}
                        </div>
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
