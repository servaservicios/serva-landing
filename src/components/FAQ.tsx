import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-ink-950 py-24 lg:py-36" aria-label="Preguntas frecuentes">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20 lg:items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease }}
            className="mb-12 lg:mb-0 lg:sticky lg:top-28"
          >
            <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
              07 — FAQ
            </p>
            <h2
              className="font-black text-ink-50 leading-tight tracking-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Preguntas frecuentes.
            </h2>
            <p className="text-ink-500 mt-5 text-sm leading-relaxed max-w-xs">
              ¿No encuentras tu respuesta? Escríbenos directamente por WhatsApp.
            </p>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="flex flex-col divide-y divide-ink-800/60"
          >
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-bold text-ink-100 text-base leading-snug group-hover:text-ink-50 transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 mt-0.5 text-brand">
                    {open === i
                      ? <Minus className="w-5 h-5" aria-hidden />
                      : <Plus className="w-5 h-5" aria-hidden />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="text-ink-400 text-sm leading-relaxed pb-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
