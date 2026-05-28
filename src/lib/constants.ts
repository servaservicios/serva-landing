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
    q: '¿Entregan certificados y manifiestos al finalizar los servicios?',
    a: 'Sí. Los servicios de fumigación concluyen con certificado oficial ante la Secretaría de Salud; los de limpieza y desazolve de trampas de grasa incluyen manifiesto de disposición ante Agua y Drenaje de Monterrey. Toda la documentación se entrega al cierre del servicio, sin gestiones adicionales de tu parte.',
  },
  {
    q: '¿Tienen facturas o comprobantes fiscales?',
    a: 'Sí, emitimos CFDI para personas físicas y morales. Solicítalo al momento de contratar el servicio.',
  },
]

export const TESTIMONIALS: Array<{
  name: string
  role: string
  avatar?: string
  body: string
}> = [
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
  {
    name: 'Sofía Ramírez',
    role: 'Coordinadora de Facilidades',
    body: 'Llevamos 1 año con SERVA para la limpieza diaria de nuestras oficinas. El equipo es puntual, discreto y siempre deja todo impecable. No imagino trabajar con otro proveedor.',
  },
  {
    name: 'Luis Herrera',
    role: 'Arquitecto / Constructor',
    body: 'Contratamos la limpieza post-construcción para un proyecto de 18 departamentos. SERVA llegó con el equipo completo y terminaron antes de lo esperado. Resultado inmaculado.',
  },
  {
    name: 'Patricia Soto',
    role: 'Administradora de Edificio',
    body: 'Administro 4 propiedades y SERVA cubre todas. Tener un solo proveedor confiable para limpieza, plomería y mantenimiento simplifica todo enormemente.',
  },
  {
    name: 'Eduardo Vega',
    role: 'Dueño de Restaurante',
    body: 'El servicio de limpieza de campanas y trampas de grasa es excelente. Certificados, puntuales y con toda la documentación que el municipio requiere.',
  },
  {
    name: 'Dra. Alejandra Núñez',
    role: 'Directora Médica',
    body: 'Para una clínica, la fumigación no es opcional. SERVA usa productos certificados, coordinan fuera de horario para no interrumpir operaciones. Profesionalismo total.',
  },
  {
    name: 'Fernanda Castro',
    role: 'Gerente de Hotel',
    body: 'Tenemos contrato de mantenimiento preventivo desde hace dos años. El aire acondicionado funciona sin fallas y los huéspedes nunca han reportado problemas.',
  },
  {
    name: 'Carlos Morales',
    role: 'Propietario / Inversor',
    body: 'Lo que más valoro es la rapidez de respuesta por WhatsApp. Tuve una fuga en un inmueble rentado y en 2 horas ya tenían a alguien atendiendo. Eso es servicio real.',
  },
]
