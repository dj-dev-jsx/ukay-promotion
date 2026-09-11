import { Gavel } from 'lucide-react'
import { products } from '../data/mock'
import { ProductImage } from './ProductImage'

const STATUS_STYLES: Record<string, string> = {
  live: 'bg-coral-500 text-white',
  ending: 'bg-charcoal text-cream',
  new: 'bg-green-700 text-white',
}

const STATUS_LABEL: Record<string, string> = {
  live: 'Live Auction',
  ending: 'Ending Soon',
  new: 'New Listing',
}

export function FeaturedItems() {
  return (
    <section id="discover" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-green-700">Featured finds</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            What you can buy on UkayApp
          </h2>
        </div>
        <p className="max-w-sm text-sm text-charcoal/60">
          Curated secondhand fashion — from vintage jackets to sneakers to statement bags — every item has a story.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <ProductImage
                src={item.image}
                alt={item.name}
                className="aspect-square w-full"
                imgClassName="group-hover:scale-110"
              />
              <span
                className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${STATUS_STYLES[item.status]}`}
              >
                {STATUS_LABEL[item.status]}
              </span>
            </div>
            <div className="p-3.5 sm:p-4">
              <p className="text-[11px] font-medium text-charcoal/45">{item.category}</p>
              <h3 className="mt-0.5 truncate text-sm font-semibold text-charcoal sm:text-base">{item.name}</h3>
              <div className="mt-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-charcoal/45">Current bid</p>
                  <p className="font-display text-base font-bold text-green-700">₱{item.price.toLocaleString()}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-charcoal/5 px-2.5 py-1 text-[11px] font-semibold text-charcoal/60">
                  <Gavel className="h-3 w-3" />
                  {item.bids}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
