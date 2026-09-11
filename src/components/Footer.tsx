import { ShoppingBag } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-charcoal/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-800 text-cream">
            <ShoppingBag className="h-3.5 w-3.5" />
          </span>
          <Logo className="text-lg" />
        </a>

        <p className="text-xs text-charcoal/45">© 2026 UkayApp. Made for Filipino thrift hunters.</p>

        <div className="flex items-center gap-5 text-xs font-medium text-charcoal/45">
          <a href="#" className="transition hover:text-charcoal">Instagram</a>
          <a href="#" className="transition hover:text-charcoal">Facebook</a>
          <a href="#" className="transition hover:text-charcoal">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
