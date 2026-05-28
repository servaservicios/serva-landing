import { SERVICE_CATEGORIES, PHONE_DISPLAY, WHATSAPP_URL } from '../lib/constants'

const year = new Date().getFullYear()

const CAT_LABEL: Record<string, string> = {
  'limpieza':            'Limpieza',
  'aire-acondicionado':  'Aire Acondicionado',
  'plomeria':            'Plomería',
  'fumigacion':          'Fumigación',
  'instalaciones':       'Instalaciones y Mantenimiento',
  'otros':               'Otros Servicios',
}

const catLink = 'text-ink-400 text-sm font-medium hover:text-ink-200 transition-colors'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-800/60" aria-label="Pie de página">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">

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

          {/* Services */}
          <div>
            <p className="text-ink-600 font-extrabold text-xs tracking-widest uppercase mb-5">
              Servicios
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {SERVICE_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <a
                    href={`#cat-${cat.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const id = cat.id
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('serva:open-category', { detail: id }))
                      }, 0)
                    }}
                    className={catLink}
                  >
                    {CAT_LABEL[cat.id]}
                  </a>
                </li>
              ))}
            </ul>
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
                  className={catLink}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={catLink}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/serva.servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={catLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/servaservicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={catLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@servaservicios.com"
                  className={catLink}
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
