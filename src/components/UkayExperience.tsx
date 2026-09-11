import { Sparkles } from 'lucide-react'

const IMAGE =
  'https://images.unsplash.com/photo-1759630814559-f9fffe187384?q=80&w=1600&h=900&fit=crop&auto=format'

export function UkayExperience() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={IMAGE}
        alt="Racks and piles of secondhand clothes at a real ukay-ukay thrift shop"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-green-950/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/60 to-green-950/40" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-coral-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral-400">
          <Sparkles className="h-3.5 w-3.5" />
          Real ukay-ukay energy
        </div>
        <h2 className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
          The thrill of the dig, now in your pocket.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/70">
          Every legendary find starts with a rummage through the pile. UKAY brings that same rush
          online — browse real racks of pre-loved pieces and bid before someone else spots it.
        </p>
      </div>
    </section>
  )
}
