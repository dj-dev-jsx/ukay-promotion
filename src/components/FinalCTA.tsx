import { ArrowRight, Gavel } from 'lucide-react'

export function FinalCTA({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-green-950 px-6 py-16 text-center sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-600/20 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-coral-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-500/20">
            <Gavel className="h-6 w-6 text-coral-400" />
          </span>
          <h2 className="font-display mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-5xl">
            Your next great find is waiting.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/60">
            Be first in line when UkayApp launches. Join thousands of buyers and sellers getting ready.
          </p>
          <button
            onClick={onJoin}
            className="group mx-auto mt-8 flex items-center gap-2 rounded-full bg-coral-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-coral-500/25 transition hover:bg-coral-600"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
