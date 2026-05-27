import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP_URL, PHONE_DISPLAY } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function FinalCTA() {
  return (
    <section
      className="bg-brand py-24 lg:py-36 relative overflow-hidden"
      aria-label="Solicitar servicio"
    >
      {/* Team photo background */}
      <img
        src="/images/Equipo.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18] pointer-events-none"
        aria-hidden
      />

      {/* Subtle dot grid on green */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, oklch(14% 0.012 152 / 0.09) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />

      {/* Large decorative text in background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-black text-ink-950/[0.04] leading-none select-none whitespace-nowrap"
          style={{ fontSize: 'clamp(8rem, 18vw, 22rem)' }}
        >
          SERVA
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
            className="text-ink-900/60 font-extrabold text-xs tracking-[0.25em] uppercase mb-7"
          >
            08 — Acción
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="font-black text-ink-950 leading-[0.92] tracking-tight mb-6 mx-auto"
            style={{ fontSize: 'var(--text-h1)', maxWidth: '820px' }}
          >
            ¿Listo para un espacio impecable?
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="text-ink-900/70 text-lg max-w-md mx-auto mb-12 leading-relaxed"
          >
            Cotización en menos de 2 horas. Servicio coordinado el mismo día.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-ink-950 text-ink-50 font-extrabold text-base px-8 py-4 rounded-xl hover:bg-ink-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Cotizar por WhatsApp
            </a>

            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 text-ink-900 font-extrabold text-base hover:text-ink-950 transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
