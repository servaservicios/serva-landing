import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { STATS, TESTIMONIALS } from '../lib/constants'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    const frame = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Deterministic avatar color from name ────────────────────────────────────
const AVATAR_HUES = [25, 55, 120, 185, 240, 290, 340]

function avatarColors(name: string) {
  const code = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const hue = AVATAR_HUES[code % AVATAR_HUES.length]
  return {
    bg: `oklch(91% 0.07 ${hue})`,
    color: `oklch(36% 0.16 ${hue})`,
  }
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateNav = () => {
    const el = scrollRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateNav, { passive: true })
    // initial check after layout
    const id = requestAnimationFrame(updateNav)
    return () => {
      el.removeEventListener('scroll', updateNav)
      cancelAnimationFrame(id)
    }
  }, [])

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({
      left: dir === 'next' ? el.clientWidth : -el.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-ink-50 py-24 lg:py-36" aria-label="Confianza y resultados">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">

        {/* ── Header + nav arrows ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-brand font-extrabold text-xs tracking-[0.25em] uppercase mb-4">
              05 — Confianza
            </p>
            <h2
              className="font-black text-ink-900 leading-tight tracking-tight max-w-lg"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Números que hablan por nosotros.
            </h2>
          </div>

          {/* Navigation arrows — desktop only */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('prev')}
              disabled={!canPrev}
              aria-label="Testimonio anterior"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-ink-200 bg-white text-ink-600 hover:border-brand hover:text-brand transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-ink-200 disabled:hover:text-ink-600"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>
            <button
              onClick={() => scroll('next')}
              disabled={!canNext}
              aria-label="Testimonio siguiente"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-ink-200 bg-white text-ink-600 hover:border-brand hover:text-brand transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-ink-200 disabled:hover:text-ink-600"
            >
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>
          </div>
        </motion.div>

        {/* ── Stats grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
              className={`rounded-2xl p-8 lg:p-10 ${
                i === 0
                  ? 'bg-ink-900 text-ink-50'
                  : 'bg-white border border-ink-100'
              }`}
            >
              <p
                className={`font-black leading-none mb-3 ${
                  i === 0 ? 'text-brand' : 'text-ink-900'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}
              >
                {stat.display != null ? (
                  stat.display
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className={`text-sm font-semibold ${i === 0 ? 'text-ink-400' : 'text-ink-500'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Testimonials carousel ── */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-1"
        >
          {TESTIMONIALS.map((t, i) => {
            const colors = avatarColors(t.name)
            const initials = getInitials(t.name)

            return (
              <blockquote
                key={i}
                className="snap-start shrink-0 flex flex-col gap-5 bg-white border border-ink-100 rounded-2xl p-8
                           w-[85%] sm:w-[calc(50%_-_8px)] lg:w-[calc(33.333%_-_10.667px)]"
              >
                <Quote className="w-6 h-6 text-brand shrink-0" aria-hidden />

                <p className="text-ink-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.body}&rdquo;
                </p>

                <footer className="border-t border-ink-100 pt-5 flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span
                      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-black select-none"
                      style={{ background: colors.bg, color: colors.color }}
                      aria-hidden
                    >
                      {initials}
                    </span>
                  )}
                  <div>
                    <p className="font-extrabold text-ink-900 text-sm">{t.name}</p>
                    <p className="text-ink-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            )
          })}
        </div>

      </div>
    </section>
  )
}
