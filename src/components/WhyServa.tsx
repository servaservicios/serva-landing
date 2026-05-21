import { motion } from 'framer-motion'
import { ShieldCheck, Clock3, MapPin, Layers } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Garantía sin letra chica',
    body: 'Si el resultado no cumple lo acordado, regresamos sin costo. Sin excusas, sin condiciones.',
  },
  {
    icon: Clock3,
    title: 'Respuesta en horas, no días',
    body: 'Cotización en menos de 2 horas. Agenda confirmada el mismo día. Para urgencias, coordinamos de inmediato.',
  },
  {
    icon: MapPin,
    title: 'Raíces en Monterrey',
    body: 'Conocemos la zona, los edificios y las exigencias del clima regio. Somos locales, no franquicia.',
  },
  {
    icon: Layers,
    title: 'Un proveedor, 12 servicios',
    body: 'Limpieza, mantenimiento, fumigación, plomería y más. Todo bajo un solo punto de contacto.',
  },
]

export default function WhyServa() {
  return (
    <section
      id="contacto"
      className="bg-ink-950 py-24 lg:py-36 relative overflow-hidden"
      aria-label="Por qué elegir SERVA"
    >
      {/* Bottom-right glow */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 100% 100%, oklch(73.5% 0.186 152 / 0.055) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
            04 — Por qué SERVA
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="font-black text-ink-50 leading-tight tracking-tight max-w-md"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Confianza que se gana con resultados.
            </h2>
            <p className="text-ink-500 text-sm max-w-xs leading-relaxed lg:text-right">
              No somos el proveedor más barato. Somos el más confiable.
            </p>
          </div>
        </motion.div>

        {/* Reasons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                className={`flex flex-col gap-6 p-8 lg:p-10 border-b border-ink-800/50 sm:border-r lg:border-b-0 ${
                  i % 2 === 1 ? 'sm:border-r-0 lg:border-r' : ''
                } ${i >= 2 ? 'sm:border-b-0' : ''} ${
                  i === 3 ? 'lg:border-r-0' : ''
                } last:border-0 hover:bg-ink-900/40 transition-colors duration-300`}
              >
                <span className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand" aria-hidden />
                </span>
                <div>
                  <h3 className="font-extrabold text-ink-50 text-lg leading-snug mb-3">
                    {r.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{r.body}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
