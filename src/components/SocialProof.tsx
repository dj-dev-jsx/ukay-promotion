import { Star } from 'lucide-react'
import { testimonials } from '../data/mock'

const STATS = [
  { value: '10,000+', label: 'Thrift hunters on the waitlist' },
  { value: '500+', label: 'Sellers ready to list' },
  { value: '₱2M+', label: 'In items ready to bid on' },
]

export function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-charcoal/8 bg-white p-6 text-center">
            <p className="font-display text-3xl font-bold text-green-700 sm:text-4xl">{stat.value}</p>
            <p className="mt-1.5 text-sm text-charcoal/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-cream-soft p-6">
            <div className="flex gap-0.5 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">"{t.quote}"</p>
            <p className="mt-4 text-sm font-semibold text-charcoal">{t.name}</p>
            <p className="text-xs text-charcoal/50">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
