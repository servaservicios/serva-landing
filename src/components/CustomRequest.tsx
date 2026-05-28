import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function CustomRequest() {
  return (
    <section
      className="bg-ink-950 py-20 lg:py-24 relative overflow-hidden"
      aria-label="Servicios a la medida"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, oklch(73.5% 0.186 152 / 0.05) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />

      {/* Brand glow — top right */}
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, oklch(73.5% 0.186 152 / 0.08) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-20">

          {/* ── Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease }}
            className="max-w-[580px]"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden />
              <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase">
                Servicios a la medida
              </p>
            </div>

            <h2
              className="font-black text-ink-50 leading-[0.92] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              ¿Algo fuera de{' '}
              <span className="text-brand">lo ordinario?</span>
            </h2>

            <p className="text-ink-400 text-base md:text-lg leading-relaxed">
              Nuestro catálogo es el punto de partida, no el límite.
              Cuéntanos tu requerimiento — el equipo de SERVA evalúa cada
              proyecto de forma individual y responde en menos de 2 horas.
            </p>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="flex flex-col gap-4 shrink-0"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand text-ink-950 font-extrabold text-base px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Cuéntanos por WhatsApp
            </a>
            <p className="text-ink-700 text-xs text-center font-medium tracking-wide">
              Respuesta en menos de 2 horas · Sin compromisos
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
