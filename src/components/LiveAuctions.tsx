import { useEffect, useState } from 'react'
import { Clock, Users, Gavel, Radio } from 'lucide-react'
import { liveAuctions } from '../data/mock'
import { ProductImage } from './ProductImage'

function toSeconds(mmss: string) {
  const [m, s] = mmss.split(':').map(Number)
  return m * 60 + s
}

function format(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function LiveAuctions({ onJoin }: { onJoin: () => void }) {
  const [remaining, setRemaining] = useState(() => liveAuctions.map((a) => toSeconds(a.timeLeft)))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => prev.map((s, i) => (s <= 0 ? toSeconds(liveAuctions[i].timeLeft) : s - 1)))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="auctions" className="bg-green-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-coral-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral-400">
              <Radio className="h-3.5 w-3.5" />
              Live right now
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Don't just shop.
              <br className="hidden sm:block" /> Join the auction.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/50">
            Real-time bidding with real people. Watch the price move, feel the countdown, win the moment it ends.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liveAuctions.map((auction, i) => (
            <div
              key={auction.id}
              className="overflow-hidden rounded-2xl bg-green-900/60 ring-1 ring-cream/10 transition hover:ring-coral-400/40"
            >
              <div className="relative">
                <ProductImage src={auction.image} alt={auction.name} className="h-44 w-full" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  <span className="h-1.5 w-1.5 animate-blink-dot rounded-full bg-white" />
                  Live
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-charcoal/70 px-2.5 py-1 text-[10px] font-semibold text-cream backdrop-blur">
                  <Clock className="h-3 w-3" />
                  {format(remaining[i])}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-cream">{auction.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-cream/45">Current bid</p>
                    <p className="font-display text-xl font-bold text-cream">₱{auction.currentBid.toLocaleString()}</p>
                  </div>
                  <p className="flex items-center gap-1 text-xs font-medium text-cream/50">
                    <Users className="h-3.5 w-3.5" />
                    {auction.bidders} bidders
                  </p>
                </div>
                <button
                  onClick={onJoin}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 py-3 text-sm font-bold text-white transition hover:bg-coral-600"
                >
                  <Gavel className="h-4 w-4" />
                  Place a Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
