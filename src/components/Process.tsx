import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Process() {
  return (
    <section id="proceso" className="bg-ink-900 py-24 lg:py-36 overflow-hidden" aria-label="Cómo trabajamos">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
            06 — Proceso
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="font-black text-ink-50 leading-tight tracking-tight max-w-sm"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Así trabajamos.
            </h2>
            <p className="text-ink-500 text-base leading-relaxed max-w-sm lg:text-right">
              Cuatro pasos. Sin sorpresas, sin burocracia, sin complicaciones.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
              }}
              className={`relative flex flex-col gap-5 p-8 lg:p-10 border-b border-ink-800/50 lg:border-b-0 lg:border-r last:border-0 ${
                i < PROCESS_STEPS.length - 1 ? 'lg:border-ink-800/40' : ''
              }`}
            >
              {/* Large background number */}
              <span
                className="font-black text-ink-800/60 leading-none select-none absolute top-6 right-6 lg:top-8 lg:right-8"
                style={{ fontSize: 'clamp(4rem, 6vw, 7rem)' }}
                aria-hidden
              >
                {step.number}
              </span>

              {/* Foreground number badge */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <span className="font-black text-brand text-sm">{step.number}</span>
              </div>

              <div className="relative z-10">
                <h3 className="font-extrabold text-ink-50 text-xl mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
