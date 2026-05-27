import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Client list ──────────────────────────────────────────────────────────────
// Drop new files into /public/Clientes/ and add an entry here to scale the wall.
// Use encodeURIComponent for filenames with spaces.

const CLIENTS = [
  { id: 'bbva',         name: 'BBVA',         src: '/Clientes/bbva.png' },
  { id: 'lacoste',      name: 'Lacoste',      src: '/Clientes/lacoste-logo-png_seeklogo-218359.png' },
  { id: 'oakberry',     name: 'Oakberry',     src: '/Clientes/OAKBERRY.png' },
  { id: 'mac',          name: 'MAC',           src: '/Clientes/MAC.png' },
  { id: 'ellaz',        name: 'Ellaz',        src: '/Clientes/ELLAZ.png' },
  { id: 'enerey',       name: 'Enerey',       src: '/Clientes/Enerey.png' },
  { id: 'grupo-senda',  name: 'Grupo Senda',  src: '/Clientes/GRUPO%20SENDA.png' },
  { id: 'bmc',          name: 'BMC',           src: '/Clientes/BMC%20%20NO%20%20%20PNG.png' },
  { id: 'one-call',     name: 'One Call',     src: '/Clientes/ONE%20CALL.png' },
  { id: 'kali',         name: 'Kali',         src: '/Clientes/KALI%20NO%20PNG.jpeg' },
  { id: 'maxiprint',    name: 'Maxiprint',    src: '/Clientes/MAXIPRINT%20NO%20PNG.png' },
  { id: 'ibp',          name: 'IBP',           src: '/Clientes/IBP%20NO%20PNG.jpeg' },
  { id: 'rana-girasol', name: 'Rana Girasol', src: '/Clientes/RANA%20GIRASOL%20NO%20PNG.png' },
  { id: 'sana-paleto',  name: 'Sana Paleto',  src: '/Clientes/SANA%20PALETO%20NO%20PNG.jpg' },
  { id: 'sra-tanaka',   name: 'Sra. Tanaka',  src: '/Clientes/SRA.%20TANAKA%20NO%20PNG.png' },
  { id: 'yaurty',       name: 'Yaurty',       src: '/Clientes/YAURTY%20NO%20PNG.jpeg' },
  { id: 'sunny-land',   name: 'Sunny Land',   src: '/Clientes/sunny%20land.jpeg' },
] as const

type Client = typeof CLIENTS[number]

// ─── Individual logo card ─────────────────────────────────────────────────────
// White pill with uniform dimensions — mix-blend-mode:multiply dissolves any
// white backgrounds into the section so all logos look native to the surface.
function LogoCard({ client }: { client: Client }) {
  return (
    <div
      className="
        logo-card group shrink-0
        flex items-center justify-center
        w-[148px] h-[60px] px-4
        rounded-2xl
        bg-white
        border border-ink-100/70
        shadow-sm
        hover:border-brand/25 hover:shadow-brand/5 hover:shadow-md
        transition-all duration-300 ease-out
        cursor-default
      "
    >
      <img
        src={client.src}
        alt={client.name}
        className="
          max-h-[36px] max-w-[108px] w-auto h-auto
          object-contain
          grayscale opacity-55
          group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.07]
          transition-all duration-300 ease-out
        "
        style={{ mixBlendMode: 'multiply' }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ClientLogos() {
  // Duplicate the list so translateX(-50%) loops seamlessly
  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section
      className="relative bg-brand-subtle border-y border-brand-muted/30 py-12 overflow-hidden"
      aria-label="Empresas que confían en SERVA"
    >
      {/* Ambient glow — very subtle brand tint behind the logos */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 120%, oklch(73.5% 0.186 152) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease }}
        className="
          relative z-10
          text-center text-ink-400 font-bold
          text-[10px] tracking-[0.24em] uppercase
          mb-9 px-8
        "
      >
        Confían en SERVA
      </motion.p>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="relative"
      >
        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, oklch(96% 0.025 152) 0%, transparent 100%)' }}
          aria-hidden
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, oklch(96% 0.025 152) 0%, transparent 100%)' }}
          aria-hidden
        />

        {/* Animated track — duplicated 3× for seamless loop */}
        <div
          className="logo-marquee flex items-center gap-4"
          aria-hidden
        >
          {track.map((client, i) => (
            <LogoCard key={`${client.id}-${i}`} client={client} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
