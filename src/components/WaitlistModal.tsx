import { useState } from 'react'
import { X, CheckCircle2, Sparkles } from 'lucide-react'

export function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-cream p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-charcoal/50 hover:bg-charcoal/5 hover:text-charcoal transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-coral-100 px-3 py-1 text-xs font-semibold text-coral-600">
              <Sparkles className="w-3.5 h-3.5" />
              Early Access
            </div>
            <h3 className="font-display mt-4 text-2xl font-bold text-charcoal">
              Be first to find it.
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Join the waitlist and we'll notify you the moment UKAY launches in your city.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-green-800 px-4 py-3.5 text-sm font-semibold text-cream hover:bg-green-900 transition shadow-lg shadow-green-800/20"
              >
                Join the Waitlist
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-charcoal/40">
              No spam. Just a heads up when we launch.
            </p>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="font-display mt-4 text-2xl font-bold text-charcoal">You're on the list!</h3>
            <p className="mt-2 text-sm text-charcoal/60">
              We'll email <span className="font-medium text-charcoal">{email}</span> as soon as UKAY is ready for you.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 w-full rounded-xl bg-charcoal px-4 py-3.5 text-sm font-semibold text-cream hover:bg-charcoal-soft transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
