import { ArrowRight, Sparkles, Gavel, Radio } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'

export function Hero({ onJoin }: { onJoin: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-coral-400/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(23,20,15,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-800/15 bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-800">
            <Sparkles className="h-3.5 w-3.5" />
            Launching soon in the Philippines
          </div>

          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-6xl xl:text-7xl">
            Find It. <span className="text-green-700">Bid It.</span>
            <br />
            <span className="relative inline-block">
              Love It.
              <svg
                className="absolute -bottom-2 left-0 w-full text-coral-500"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 9.5C40 3 120 2 198 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg text-charcoal/65 lg:mx-0">
            Discover unique pre-loved finds, bid on items you love, and join live auctions with UkayApp — the secondhand marketplace built for Filipino thrift hunters.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button
              onClick={onJoin}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-green-800 px-7 py-4 text-sm font-semibold text-cream shadow-xl shadow-green-800/25 transition hover:bg-green-900 sm:w-auto"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onJoin}
              className="w-full rounded-full border-2 border-charcoal/10 bg-white/60 px-7 py-4 text-sm font-semibold text-charcoal backdrop-blur transition hover:border-charcoal/20 hover:bg-white sm:w-auto"
            >
              Get Early Access
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex -space-x-2.5">
              {['bg-green-700', 'bg-coral-500', 'bg-gold-500', 'bg-charcoal'].map((c, i) => (
                <div key={i} className={`h-8 w-8 rounded-full border-2 border-cream ${c}`} />
              ))}
            </div>
            <p className="text-sm text-charcoal/60">
              <span className="font-semibold text-charcoal">10,000+</span> thrift hunters ready to join
            </p>
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-charcoal/50 lg:justify-center">
            <span className="flex items-center gap-1.5">
              <Gavel className="h-3.5 w-3.5 text-green-700" /> Secondhand
            </span>
            <span className="h-1 w-1 rounded-full bg-charcoal/20" />
            <span className="flex items-center gap-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-green-700" /> Bidding
            </span>
            <span className="h-1 w-1 rounded-full bg-charcoal/20" />
            <span className="flex items-center gap-1.5">
              <Radio className="h-3.5 w-3.5 text-coral-500" /> Live Auctions
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
