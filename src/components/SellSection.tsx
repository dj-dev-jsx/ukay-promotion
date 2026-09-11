import { ArrowRight, List, Gavel, Wallet } from 'lucide-react'

const FLOW = [
  { icon: List, label: 'List', description: 'Snap a photo, set a starting price.' },
  { icon: Gavel, label: 'Get Bids', description: 'Watch buyers compete for your item.' },
  { icon: Wallet, label: 'Sell', description: 'Win goes to the highest bidder — you get paid.' },
]

const IMAGE =
  'https://images.unsplash.com/photo-1787044069773-55e8212fb9e7?q=80&w=1200&h=900&fit=crop&auto=format'

export function SellSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section id="sell" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-14 sm:py-16">
        <img
          src={IMAGE}
          alt="Piles of secondhand denim at a Filipino ukay-ukay market stall"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-coral-400">For sellers</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Got something to sell?
            </h2>
            <p className="mt-4 max-w-md text-cream/60">
              Turn the things you no longer use into extra cash. List in minutes and let buyers bid up the price.
            </p>
            <button
              onClick={onJoin}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:bg-white"
            >
              Start Selling
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
            {FLOW.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center gap-3 sm:flex-col sm:items-start sm:gap-0">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800/40 ring-1 ring-cream/10">
                    <step.icon className="h-5 w-5 text-green-400" />
                  </span>
                  <div className="sm:mt-4">
                    <p className="font-display text-base font-bold text-cream">{step.label}</p>
                    <p className="mt-0.5 text-xs text-cream/50 sm:mt-1">{step.description}</p>
                  </div>
                </div>
                {i < FLOW.length - 1 && (
                  <ArrowRight className="mx-2 hidden h-4 w-4 shrink-0 text-cream/20 sm:hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
