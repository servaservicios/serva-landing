import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Client list ──────────────────────────────────────────────────────────────
// To add a real logo: drop the file into /public/images/client-logos/
// then set the `logo` field to its path, e.g. '/images/client-logos/client-1.png'
// Width (px) controls the rendered size — adjust per logo aspect ratio.

const CLIENTS: Array<{ id: string; name: string; logo?: string; width: number }> = [
  { id: 'client-1',  name: 'Cliente 1',  width: 112 },
  { id: 'client-2',  name: 'Cliente 2',  width: 88  },
  { id: 'client-3',  name: 'Cliente 3',  width: 128 },
  { id: 'client-4',  name: 'Cliente 4',  width: 96  },
  { id: 'client-5',  name: 'Cliente 5',  width: 108 },
  { id: 'client-6',  name: 'Cliente 6',  width: 84  },
  { id: 'client-7',  name: 'Cliente 7',  width: 120 },
  { id: 'client-8',  name: 'Cliente 8',  width: 100 },
  { id: 'client-9',  name: 'Cliente 9',  width: 116 },
  { id: 'client-10', name: 'Cliente 10', width: 92  },
]

// ─── Individual logo slot ─────────────────────────────────────────────────────
function LogoSlot({ client }: { client: typeof CLIENTS[number] }) {
  if (client.logo) {
    return (
      <img
        src={client.logo}
        alt={client.name}
        height={28}
        style={{ width: client.width, height: 28 }}
        className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
        loading="lazy"
        decoding="async"
      />
    )
  }

  // Placeholder rectangle — swapped out automatically when `logo` is set above
  return (
    <div
      role="img"
      aria-label={client.name}
      className="shrink-0 rounded-lg bg-ink-200/80 hover:bg-ink-300/70 transition-colors duration-300"
      style={{ width: client.width, height: 28 }}
    />
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ClientLogos() {
  // Duplicate the list so the CSS marquee loops seamlessly
  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section
      className="bg-white border-y border-ink-100 py-12 overflow-hidden"
      aria-label="Empresas que confían en SERVA"
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease }}
        className="text-center text-ink-400 font-bold text-[10px] tracking-[0.22em] uppercase mb-10 px-8"
      >
        Confían en SERVA
      </motion.p>

      {/* Marquee — intentionally full-bleed past section padding */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.12, ease }}
      >
        {/* Edge fades mask the loop seams */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
            style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
            style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }}
            aria-hidden
          />

          {/* The animated track */}
          <div className="logo-marquee flex items-center gap-14" aria-hidden>
            {track.map((client, i) => (
              <LogoSlot key={`${client.id}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
