import { Search, Bell, Gavel, Users, Clock, Home, Heart, PlusCircle, User } from 'lucide-react'
import { products } from '../data/mock'
import { ProductImage } from './ProductImage'

const discoverItems = [products[2], products[4], products[5], products[6]]

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[4rem] bg-green-500/20 blur-3xl" />
      <div className="absolute -right-6 -top-6 -z-10 h-28 w-28 rounded-full bg-coral-400/40 blur-2xl" />

      {/* phone frame */}
      <div className="relative rounded-[2.75rem] border-[6px] border-charcoal bg-charcoal p-1.5 shadow-2xl">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-cream">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-charcoal" />

          <div className="h-[560px] overflow-hidden">
            {/* status bar */}
            <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-charcoal">
              <span>9:41</span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-charcoal/70" />
              </span>
            </div>

            {/* app header */}
            <div className="flex items-center justify-between px-5 pt-2">
              <div>
                <p className="text-[10px] font-medium text-charcoal/50">Good evening</p>
                <p className="font-display text-base font-bold text-charcoal">Find your next find</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white p-2 shadow-sm">
                  <Search className="h-3.5 w-3.5 text-charcoal/70" />
                </div>
                <div className="relative rounded-full bg-white p-2 shadow-sm">
                  <Bell className="h-3.5 w-3.5 text-charcoal/70" />
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-coral-500" />
                </div>
              </div>
            </div>

            {/* live auction banner */}
            <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-green-900 shadow-lg">
              <div className="flex items-center justify-between px-3.5 pt-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-coral-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                  <span className="h-1.5 w-1.5 animate-blink-dot rounded-full bg-white" />
                  Live
                </span>
                <span className="flex items-center gap-1 text-[9px] font-medium text-cream/70">
                  <Clock className="h-2.5 w-2.5" /> 04:12 left
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-3 px-3.5 pb-3.5">
                <ProductImage
                  src={products[0].image}
                  alt={products[0].name}
                  className="h-16 w-16 shrink-0 rounded-xl"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-cream">{products[0].name}</p>
                  <p className="mt-0.5 text-[9px] text-cream/60">Current bid</p>
                  <p className="font-display text-sm font-bold text-cream">₱{products[0].price}</p>
                </div>
                <button className="shrink-0 rounded-full bg-coral-500 px-3 py-2 text-[10px] font-bold text-white shadow">
                  Bid
                </button>
              </div>
            </div>

            {/* discover grid */}
            <div className="mt-4 flex items-center justify-between px-5">
              <p className="text-xs font-bold text-charcoal">Discover</p>
              <p className="text-[10px] font-medium text-green-700">See all</p>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2.5 px-4">
              {discoverItems.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <ProductImage src={item.image} alt={item.name} className="h-20 w-full" />
                  <div className="px-2 py-1.5">
                    <p className="truncate text-[9.5px] font-semibold text-charcoal">{item.name}</p>
                    <div className="mt-0.5 flex items-center justify-between">
                      <span className="text-[9.5px] font-bold text-green-700">₱{item.price.toLocaleString()}</span>
                      <span className="flex items-center gap-0.5 text-[8.5px] text-charcoal/40">
                        <Gavel className="h-2 w-2" />
                        {item.bids}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom nav */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-charcoal/5 bg-white/95 px-4 py-3 backdrop-blur">
            <Home className="h-4 w-4 text-green-800" strokeWidth={2.5} />
            <Gavel className="h-4 w-4 text-charcoal/30" />
            <PlusCircle className="h-4 w-4 text-charcoal/30" />
            <Heart className="h-4 w-4 text-charcoal/30" />
            <User className="h-4 w-4 text-charcoal/30" />
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -left-12 top-32 hidden rotate-[-6deg] items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl sm:flex">
        <Users className="h-4 w-4 text-coral-500" />
        <div>
          <p className="text-[10px] font-bold text-charcoal leading-tight">27 bidders</p>
          <p className="text-[9px] text-charcoal/50 leading-tight">bidding now</p>
        </div>
      </div>
    </div>
  )
}
