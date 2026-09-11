import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Logo } from './Logo'

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Auctions', href: '#auctions' },
  { label: 'Sell', href: '#sell' },
  { label: 'About', href: '#about' },
]

export function Navbar({ onJoin }: { onJoin: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/5 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-800 text-cream">
            <ShoppingBag className="h-4.5 w-4.5" />
          </span>
          <Logo className="text-xl" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 transition hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onJoin}
            className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-green-900"
          >
            Join the Waitlist
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-charcoal/5 bg-cream px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-charcoal/80 hover:bg-charcoal/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setOpen(false)
              onJoin()
            }}
            className="mt-3 w-full rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-cream"
          >
            Join the Waitlist
          </button>
        </div>
      )}
    </header>
  )
}
