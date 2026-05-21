import { motion } from 'framer-motion'
import {
  Sparkles, HardHat, Home, Building2, Factory, Layers,
  Wrench, Bug, Wind, Droplets, Zap, Star,
} from 'lucide-react'
import { SERVICES, WHATSAPP_URL } from '../lib/constants'
import { MessageCircle } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'limpieza-profunda':   Sparkles,
  'post-construccion':   HardHat,
  'residencial':         Home,
  'comercial':           Building2,
  'industrial':          Factory,
  'fachadas':            Layers,
  'mantenimiento':       Wrench,
  'fumigacion':          Bug,
  'aire-acondicionado':  Wind,
  'plomeria':            Droplets,
  'instalaciones':       Zap,
  'home-business':       Star,
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24 lg:py-36" aria-label="Servicios">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
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
            Cotizar servicio
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5"
        >
          {SERVICES.map(service => {
            const Icon = iconMap[service.id] ?? Sparkles
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                className="group flex items-center gap-3.5 border border-ink-100 rounded-2xl px-4 py-3.5 hover:border-brand/35 hover:bg-brand-subtle cursor-default transition-all duration-200"
              >
                <span className="shrink-0 w-8 h-8 rounded-lg bg-ink-100 group-hover:bg-brand/15 flex items-center justify-center transition-colors duration-200">
                  <Icon
                    className="w-3.5 h-3.5 text-ink-500 group-hover:text-brand-dark transition-colors duration-200"
                    aria-hidden
                  />
                </span>
                <span className="font-bold text-sm text-ink-700 group-hover:text-ink-900 leading-tight transition-colors duration-200">
                  {service.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
