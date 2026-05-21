import { motion } from 'framer-motion'
import { Home, Building2, Factory, GraduationCap } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const industries = [
  {
    icon: Home,
    name: 'Residencial',
    description: 'Casas, condominios, departamentos y desarrollos habitacionales.',
    services: ['Limpieza profunda', 'Mantenimiento', 'Plomería', 'Fumigación'],
  },
  {
    icon: Building2,
    name: 'Comercial',
    description: 'Oficinas, locales, restaurantes, hoteles y centros comerciales.',
    services: ['Limpieza diaria', 'Fachadas', 'Aire Acondicionado', 'Mantenimiento'],
  },
  {
    icon: Factory,
    name: 'Industrial',
    description: 'Plantas de manufactura, bodegas, centros de distribución.',
    services: ['Limpieza industrial', 'Post-construcción', 'Fumigación', 'Instalaciones'],
  },
  {
    icon: GraduationCap,
    name: 'Institucional',
    description: 'Escuelas, hospitales, clínicas, dependencias gubernamentales.',
    services: ['Limpieza especializada', 'Mantenimiento', 'Fumigación', 'Instalaciones'],
  },
]

export default function Industries() {
  return (
    <section id="industrias" className="bg-ink-50 py-24 lg:py-36" aria-label="Industrias">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="mb-16"
        >
          <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
            05 — Industrias
          </p>
          <h2
            className="font-black text-ink-900 leading-tight tracking-tight max-w-lg"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Adaptados a tu sector.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                className="bg-white border border-ink-100 rounded-2xl p-7 flex flex-col gap-5 hover:border-brand/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-dark" aria-hidden />
                </span>

                <div>
                  <h3 className="font-extrabold text-ink-900 text-xl mb-2">{ind.name}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{ind.description}</p>
                </div>

                <ul className="flex flex-col gap-1.5 mt-auto" role="list">
                  {ind.services.map(s => (
                    <li key={s} className="text-ink-400 text-xs font-semibold flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand shrink-0" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
