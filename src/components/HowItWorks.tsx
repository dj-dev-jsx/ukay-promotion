import { Search, Gavel, Trophy, Tag } from 'lucide-react'
import { steps } from '../data/mock'

const ICONS = [Search, Gavel, Trophy, Tag]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-green-700">Simple by design</p>
        <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          How UkayApp works
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = ICONS[i]
          return (
            <div key={step.number} className="relative rounded-2xl border border-charcoal/8 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-green-100">{step.number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="h-5 w-5 text-green-800" />
                </span>
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-charcoal">{step.title}</h3>
              <p className="mt-1.5 text-sm text-charcoal/60">{step.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
