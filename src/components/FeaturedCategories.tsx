import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const categories = [
  {
    id: 'residencial',
    label: 'Residencial',
    headline: 'Tu hogar, siempre en su mejor estado.',
    description:
      'Limpieza profunda, mantenimiento preventivo y servicios de hogar para casas, condominios y departamentos.',
    services: ['Limpieza Profunda', 'Limpieza Residencial', 'Mantenimiento General', 'Plomería', 'Instalaciones'],
    bg: 'bg-ink-900',
    accent: 'bg-brand',
    textAccent: 'text-brand',
    textBody: 'text-ink-400',
    textService: 'text-ink-500',
    border: 'border-ink-800',
  },
  {
    id: 'comercial',
    label: 'Comercial',
    headline: 'Espacios limpios, equipos productivos.',
    description:
      'Soluciones de limpieza y mantenimiento para oficinas, locales, restaurantes, hoteles y centros comerciales.',
    services: ['Limpieza Comercial', 'Limpieza de Fachadas', 'Fumigación', 'Aire Acondicionado', 'Mantenimiento'],
    bg: 'bg-brand',
    accent: 'bg-ink-950',
    textAccent: 'text-ink-950',
    textBody: 'text-ink-900',
    textService: 'text-ink-800',
    border: 'border-brand-dark',
  },
  {
    id: 'industrial',
    label: 'Industrial',
    headline: 'Precisión para entornos exigentes.',
    description:
      'Limpieza industrial especializada, fumigación de gran escala y mantenimiento de instalaciones críticas.',
    services: ['Limpieza Industrial', 'Post-Construcción', 'Fumigación Industrial', 'Mantenimiento General', 'Instalaciones'],
    bg: 'bg-ink-950',
    accent: 'bg-brand',
    textAccent: 'text-brand',
    textBody: 'text-ink-400',
    textService: 'text-ink-600',
    border: 'border-ink-800',
  },
]

export default function FeaturedCategories() {
  return (
    <section className="bg-ink-50 pb-24 lg:pb-36" aria-label="Categorías principales">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-10"
        >
          <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
            03 — Categorías
          </p>
          <h2
            className="font-black text-ink-900 leading-tight tracking-tight max-w-lg"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            El servicio exacto para cada contexto.
          </h2>
        </motion.div>

        {/* Category cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {categories.map(cat => (
            <motion.div
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
              className={`${cat.bg} border ${cat.border} rounded-3xl p-8 lg:p-10 flex flex-col min-h-[440px]`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className={`inline-block ${cat.accent} ${cat.id === 'comercial' ? 'text-ink-50' : 'text-ink-950'} font-extrabold text-xs px-3.5 py-1.5 rounded-full tracking-wide`}>
                  {cat.label}
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cat.textAccent} hover:opacity-70 transition-opacity`}
                  aria-label={`Cotizar ${cat.label}`}
                >
                  <ArrowUpRight className="w-5 h-5" aria-hidden />
                </a>
              </div>

              {/* Headline */}
              <h3
                className={`font-black leading-tight tracking-tight mb-4 ${cat.id === 'comercial' ? 'text-ink-950' : 'text-ink-50'}`}
                style={{ fontSize: 'var(--text-h3)' }}
              >
                {cat.headline}
              </h3>

              {/* Description */}
              <p className={`${cat.textBody} text-sm leading-relaxed mb-auto`}>
                {cat.description}
              </p>

              {/* Services list */}
              <ul className="mt-8 flex flex-col gap-2" role="list">
                {cat.services.map(s => (
                  <li
                    key={s}
                    className={`${cat.textService} text-sm font-semibold flex items-center gap-2`}
                  >
                    <span className={`w-1 h-1 rounded-full ${cat.id === 'comercial' ? 'bg-ink-800' : 'bg-ink-700'} shrink-0`} aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
