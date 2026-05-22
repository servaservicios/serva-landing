export const WHATSAPP_NUMBER = '528119158919'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20de%20los%20servicios%20de%20SERVA.`
export const PHONE_DISPLAY = '+52 81 1915 8919'

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const SERVICE_CATEGORIES = [
  {
    id: 'limpieza',
    name: 'Limpieza',
    services: [
      { id: 'limpieza-general',          name: 'Limpieza General (Personal Fijo)' },
      { id: 'limpieza-ventanas',         name: 'Limpieza de Ventanas y Fachadas' },
      { id: 'limpieza-muebles',          name: 'Limpieza de Muebles y Alfombras' },
      { id: 'limpieza-pisos',            name: 'Limpieza de Pisos' },
      { id: 'limpieza-post-construccion',name: 'Limpieza Post-Construcción' },
      { id: 'limpieza-profunda',         name: 'Limpieza Profunda' },
      { id: 'limpieza-fosas',            name: 'Limpieza de Fosas Sépticas y Cisternas' },
      { id: 'limpieza-trampas',          name: 'Limpieza de Trampas de Grasa' },
    ],
  },
  {
    id: 'aire-acondicionado',
    name: 'Sistema de Aire Acondicionado y Extracción',
    services: [
      { id: 'mantenimiento-ac',          name: 'Mantenimiento de AC Central y Minisplit' },
      { id: 'limpieza-campanas',         name: 'Limpieza de Campanas y Ductos' },
      { id: 'cambio-filtros',            name: 'Cambio de Filtros' },
      { id: 'extractor-hongo',           name: 'Limpieza de Hongo Extractor' },
    ],
  },
  {
    id: 'plomeria',
    name: 'Plomería',
    services: [
      { id: 'diagnosticos',              name: 'Diagnósticos' },
      { id: 'fugas',                     name: 'Corrección de Fugas' },
      { id: 'desazolves',                name: 'Desazolves' },
      { id: 'llaves-valvulas',           name: 'Cambio de Llaves y Válvulas' },
    ],
  },
  {
    id: 'fumigacion',
    name: 'Fumigación y Control de Plagas',
    services: [
      { id: 'insectos-rastreros',        name: 'Insectos Rastreros' },
      { id: 'cucaracha-alemana',         name: 'Cucaracha Alemana' },
      { id: 'termitas',                  name: 'Termitas' },
      { id: 'roedores',                  name: 'Roedores' },
    ],
  },
  {
    id: 'instalaciones',
    name: 'Instalaciones y Mantenimiento',
    services: [
      { id: 'mantenimiento-general',        name: 'Mantenimiento General (Personal Fijo)' },
      { id: 'mantenimiento-refrigeradores', name: 'Mantenimiento de Refrigeradores y Congeladores' },
      { id: 'herrajes',                     name: 'Reparación de Herrajes' },
      { id: 'instalacion-tvs',              name: 'Instalación de TVs, Cuadros y Más' },
      { id: 'armado-muebles',               name: 'Armado de Muebles' },
      { id: 'reparaciones-generales',       name: 'Reparaciones Generales' },
    ],
  },
  {
    id: 'otros',
    name: 'Otros Servicios',
    services: [
      { id: 'mudanzas',                  name: 'Mudanzas' },
    ],
  },
]

export const SERVICES = SERVICE_CATEGORIES.flatMap(cat =>
  cat.services.map(s => ({ ...s, category: cat.id }))
)

export const STATS: Array<
  | { value: number; suffix: string; label: string; display?: never }
  | { value?: never; suffix?: never; label: string; display: string }
> = [
  { value: 2000, suffix: '+', label: 'Servicios completados' },
  { value: 60,   suffix: '+', label: 'Servicios especializados' },
  { display: 'MTY+ZM', label: 'Atención en Monterrey y Área Metropolitana' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Contacto',
    description: 'Escríbenos por WhatsApp. Respondemos en minutos, no días.',
  },
  {
    number: '02',
    title: 'Cotización',
    description: 'Evaluamos tu espacio y te enviamos una propuesta clara y sin sorpresas.',
  },
  {
    number: '03',
    title: 'Servicio',
    description: 'Nuestro equipo trabaja con precisión, puntualidad y los productos adecuados.',
  },
  {
    number: '04',
    title: 'Garantía',
    description: 'Si algo no quedó perfecto, regresamos sin costo adicional. Sin excusas.',
  },
]

export const FAQS = [
  {
    q: '¿En qué zonas de Monterrey trabajan?',
    a: 'Cubrimos toda la Zona Metropolitana de Monterrey: San Pedro, Santa Catarina, Apodaca, Escobedo, Guadalupe, San Nicolás y el municipio de Monterrey.',
  },
  {
    q: '¿Cuánto tiempo tarda una cotización?',
    a: 'Respondemos en menos de 2 horas en días hábiles. Solo escríbenos por WhatsApp con una descripción del espacio y el servicio que necesitas.',
  },
  {
    q: '¿Trabajan en fines de semana?',
    a: 'Sí, estamos disponibles de lunes a sábado. Para proyectos urgentes también coordinamos domingos y días festivos con previo aviso.',
  },
  {
    q: '¿Los productos que usan son seguros?',
    a: 'Usamos productos certificados, biodegradables y seguros para personas, mascotas y superficies delicadas. Para servicios industriales usamos los insumos específicos al tipo de contaminante.',
  },
  {
    q: '¿Qué incluye el servicio de mantenimiento general?',
    a: 'Revisión y atención de plomería, electricidad básica, pintura, carpintería y pequeñas reparaciones. Es el servicio ideal para edificios y propiedades en renta.',
  },
  {
    q: '¿Tienen facturas o comprobantes fiscales?',
    a: 'Sí, emitimos CFDI para personas físicas y morales. Solicítalo al momento de contratar el servicio.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Ricardo Garza',
    role: 'Director de Operaciones',
    avatar: '/images/Ricardo.png',
    body: 'SERVA se encarga de nuestras instalaciones desde hace un año. Puntualidad, calidad y cero complicaciones. Exactamente lo que necesitábamos.',
  },
  {
    name: 'Valeria Mendoza',
    role: 'Propietaria, Residencial en San Pedro',
    avatar: '/images/Valeria.png',
    body: 'Contratamos el servicio de limpieza profunda y quedamos sorprendidos. El equipo llegó a tiempo, trabajó con orden y el resultado superó nuestras expectativas.',
  },
  {
    name: 'Ing. Marco Torres',
    role: 'Gerente de Planta',
    avatar: '/images/Marco.png',
    body: 'Para una planta industrial, necesitas proveedores que entiendan los estándares. SERVA los cumple. Profesionales, seguros y confiables.',
  },
]
