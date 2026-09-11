import { Sparkles, Tag, Radio, Zap, Users, Recycle } from 'lucide-react'
import { benefits } from '../data/mock'

const ICONS = [Sparkles, Tag, Radio, Zap, Users, Recycle]

export function WhyUkay() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-green-700">Why UkayApp</p>
        <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          Not your typical marketplace
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={benefit.title}
              className="flex gap-4 rounded-2xl bg-cream-soft p-5 transition hover:bg-green-100/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Icon className="h-5 w-5 text-green-700" />
              </span>
              <div>
                <h3 className="font-semibold text-charcoal">{benefit.title}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{benefit.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
