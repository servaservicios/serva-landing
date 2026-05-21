import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Wind, Droplets, Bug, Wrench, Truck,
  MessageCircle, ChevronDown,
} from 'lucide-react'
import { SERVICE_CATEGORIES, WHATSAPP_URL } from '../lib/constants'

const categoryIconMap: Record<string, React.ElementType> = {
  'limpieza':           Sparkles,
  'aire-acondicionado': Wind,
  'plomeria':           Droplets,
  'fumigacion':         Bug,
  'instalaciones':      Wrench,
  'otros':              Truck,
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28" aria-label="Servicios">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
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

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="flex flex-col border-t border-ink-100 divide-y divide-ink-100"
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const CatIcon = categoryIconMap[cat.id] ?? Sparkles
            const isOpen = open === cat.id

            return (
              <motion.div
                key={cat.id}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="w-full flex items-center gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200
                      ${isOpen ? 'bg-brand/15' : 'bg-ink-100 group-hover:bg-brand/10'}`}
                  >
                    <CatIcon
                      className={`w-4 h-4 transition-colors duration-200
                        ${isOpen ? 'text-brand-dark' : 'text-ink-500 group-hover:text-brand-dark'}`}
                      aria-hidden
                    />
                  </span>

                  <span
                    className={`flex-1 font-extrabold text-base leading-snug transition-colors duration-200
                      ${isOpen ? 'text-ink-900' : 'text-ink-700 group-hover:text-ink-900'}`}
                  >
                    {cat.name}
                  </span>

                  <span className="shrink-0 text-xs font-bold text-ink-400 tabular-nums hidden sm:block">
                    {cat.services.length} servicios
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease }}
                    className="shrink-0 text-brand"
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 pb-5 pl-[52px]">
                        {cat.services.map(service => (
                          <span
                            key={service.id}
                            className="inline-flex items-center border border-ink-200 rounded-lg px-3 py-1.5 text-sm font-bold text-ink-600 hover:border-brand/40 hover:bg-brand-subtle hover:text-ink-900 transition-all duration-150 cursor-default"
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
