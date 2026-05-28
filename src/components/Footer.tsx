import { SERVICE_CATEGORIES, PHONE_DISPLAY, WHATSAPP_URL } from '../lib/constants'

const year = new Date().getFullYear()

const CAT_LABEL: Record<string, string> = {
  'limpieza':            'Limpieza',
  'aire-acondicionado':  'Aire Acondicionado',
  'plomeria':            'Plomería',
  'fumigacion':          'Fumigación',
  'instalaciones':       'Instalaciones',
  'otros':               'Otros Servicios',
}

const colA = ['limpieza', 'plomeria']
const colB = ['aire-acondicionado', 'fumigacion', 'instalaciones', 'otros']

const svcLink = 'text-ink-400 text-sm font-medium hover:text-ink-200 transition-colors'

export default function Footer() {
  const groupA = SERVICE_CATEGORIES.filter(c => colA.includes(c.id))
  const groupB = SERVICE_CATEGORIES.filter(c => colB.includes(c.id))

  return (
    <footer className="bg-ink-950 border-t border-ink-800/60" aria-label="Pie de página">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/images/Logo%20Verde.png"
                alt="SERVA"
                className="h-[88px] w-auto"
                draggable={false}
              />
            </div>
            <p className="text-ink-500 text-sm leading-relaxed max-w-[220px] mb-6">
              Limpieza profesional y mantenimiento integral en Monterrey y Área Metropolitana.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:text-brand-muted transition-colors"
            >
              Escríbenos ahora
            </a>
          </div>

          {/* Services — column A: Limpieza + Plomería */}
          <div className="flex flex-col gap-7">
            {groupA.map(cat => (
              <div key={cat.id}>
                <p className="text-ink-600 font-extrabold text-xs tracking-widest uppercase mb-4">
                  {CAT_LABEL[cat.id]}
                </p>
                <ul className="flex flex-col gap-2.5" role="list">
                  {cat.services.map(s => (
                    <li key={s.id}>
                      <a href="#servicios" className={svcLink}>
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Services — column B: AC + Fumigación + Instalaciones + Otros */}
          <div className="flex flex-col gap-7">
            {groupB.map(cat => (
              <div key={cat.id}>
                <p className="text-ink-600 font-extrabold text-xs tracking-widest uppercase mb-4">
                  {CAT_LABEL[cat.id]}
                </p>
                <ul className="flex flex-col gap-2.5" role="list">
                  {cat.services.map(s => (
                    <li key={s.id}>
                      <a href="#servicios" className={svcLink}>
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-ink-600 font-extrabold text-xs tracking-widest uppercase mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
                  className={svcLink}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={svcLink}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/serva.servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={svcLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/servaservicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={svcLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@servaservicios.com"
                  className={svcLink}
                >
                  contacto@servaservicios.com
                </a>
              </li>
              <li>
                <span className="text-ink-500 text-sm">
                  Monterrey y Área Metropolitana
                </span>
              </li>
              <li>
                <span className="text-ink-500 text-sm">
                  Nuevo León, México
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-800/50 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-ink-700 text-xs">
            © {year} SERVA. Todos los derechos reservados.
          </p>
          <p className="text-ink-700 text-xs">
            Monterrey, Nuevo León · México
          </p>
        </div>
      </div>
    </footer>
  )
}
