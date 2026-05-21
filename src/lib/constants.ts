export const WHATSAPP_NUMBER = '528119158919'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20de%20los%20servicios%20de%20SERVA.`
export const PHONE_DISPLAY = '+52 81 1915 8919'

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const SERVICES = [
  { id: 'limpieza-profunda',       name: 'Limpieza Profunda',         category: 'cleaning' },
  { id: 'post-construccion',       name: 'Post-Construcción',         category: 'cleaning' },
  { id: 'residencial',             name: 'Limpieza Residencial',      category: 'cleaning' },
  { id: 'comercial',               name: 'Limpieza Comercial',        category: 'cleaning' },
  { id: 'industrial',              name: 'Limpieza Industrial',       category: 'cleaning' },
  { id: 'fachadas',                name: 'Limpieza de Fachadas',      category: 'cleaning' },
  { id: 'mantenimiento',           name: 'Mantenimiento General',     category: 'maintenance' },
  { id: 'fumigacion',              name: 'Fumigación',                category: 'maintenance' },
  { id: 'aire-acondicionado',      name: 'Aire Acondicionado',        category: 'maintenance' },
  { id: 'plomeria',                name: 'Plomería',                  category: 'maintenance' },
  { id: 'instalaciones',           name: 'Instalaciones',             category: 'maintenance' },
  { id: 'home-business',           name: 'Home & Business Services',  category: 'integral' },
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Proyectos completados' },
  { value: 12,  suffix: '',  label: 'Servicios especializados' },
  { value: 5,   suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Satisfacción garantizada' },
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
    role: 'Director de Operaciones, Grupo Garza Ponce',
    body: 'SERVA se encarga de nuestras instalaciones desde hace tres años. Puntualidad, calidad y cero complicaciones. Exactamente lo que una empresa necesita.',
  },
  {
    name: 'Valeria Mendoza',
    role: 'Propietaria, Residencial en San Pedro',
    body: 'Contratamos el servicio de limpieza profunda y quedamos sorprendidos. El equipo llegó a tiempo, trabajó con orden y el resultado superó nuestras expectativas.',
  },
  {
    name: 'Ing. Marco Torres',
    role: 'Gerente de Planta, Industria NL',
    body: 'Para una planta industrial, necesitas proveedores que entiendan los estándares. SERVA los cumple. Profesionales, seguros y confiables.',
  },
]
