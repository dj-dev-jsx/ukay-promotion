function img(id: string) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=800&h=800&fit=crop&auto=format`
}

export type Product = {
  id: string
  name: string
  category: string
  image: string
  price: number
  bids: number
  status: 'live' | 'ending' | 'new'
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Vintage Leather Jacket',
    category: 'Jackets',
    image: 'https://media.karousell.com/media/photos/products/2025/3/12/leather_jacket_1741785481_16472d3b_progressive.jpg',
    price: 850,
    bids: 12,
    status: 'live',
  },
  {
    id: 'p2',
    name: 'Patched Vintage Denim',
    category: 'Bottoms',
    image: 'https://media.karousell.com/media/photos/products/2026/9/10/light_wash_distressed_baggy_je_1789053377_e658e1d1_progressive.jpg',
    price: 450,
    bids: 8,
    status: 'live',
  },
  {
    id: 'p3',
    name: 'Nike Air Force 1',
    category: 'Sneakers',
    image: 'https://media.karousell.com/media/photos/products/2026/8/2/nike_air_force_1_triple_white__1785656367_c13c63d9_progressive.jpg',
    price: 1800,
    bids: 27,
    status: 'ending',
  },
  {
    id: 'p4',
    name: 'Chambray Button-Down',
    category: 'Tops',
    image: img('1596755094514-f87e34085b2c'),
    price: 250,
    bids: 5,
    status: 'new',
  },
  {
    id: 'p5',
    name: 'Quilted Crossbody Bag',
    category: 'Bags',
    image: 'https://media.karousell.com/media/photos/products/2026/7/10/monroe_sha_quilted_black_cross_1783682976_9a2af196_progressive.jpg',
    price: 1450,
    bids: 15,
    status: 'live',
  },
  {
    id: 'p6',
    name: 'Floral Vintage Dress',
    category: 'Dresses',
    image: 'https://media.karousell.com/media/photos/products/2026/8/10/sheer_floral_layered_midi_dres_1786371786_074394ab_progressive.jpg',
    price: 380,
    bids: 9,
    status: 'new',
  },
  {
    id: 'p7',
    name: 'Ray-Ban Wayfarer',
    category: 'Accessories',
    image: 'https://media.karousell.com/media/photos/products/2026/9/2/rayban_stories_wayfarer_smart__1788331074_255e4faf_progressive.jpg',
    price: 650,
    bids: 4,
    status: 'new',
  },
  {
    id: 'p8',
    name: 'Leather Lace-Up Boots',
    category: 'Shoes',
    image:'https://media.karousell.com/media/photos/products/2026/9/10/black_laceup_chunky_platform_b_1789044473_df9a6ce7_progressive.jpg',
    price: 950,
    bids: 19,
    status: 'ending',
  },
]

export type Auction = {
  id: string
  name: string
  image: string
  currentBid: number
  bidders: number
  timeLeft: string
}

export const liveAuctions: Auction[] = [
  {
    id: 'a1',
    name: products[0].name,
    image: products[0].image,
    currentBid: products[0].price,
    bidders: 12,
    timeLeft: '04:12',
  },
  {
    id: 'a2',
    name: products[2].name,
    image: products[2].image,
    currentBid: products[2].price,
    bidders: 27,
    timeLeft: '01:48',
  },
  {
    id: 'a3',
    name: products[7].name,
    image: products[7].image,
    currentBid: products[7].price,
    bidders: 19,
    timeLeft: '09:30',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Browse thousands of unique pre-loved finds curated by real sellers.',
  },
  {
    number: '02',
    title: 'Bid',
    description: 'Place your bid and compete with other thrift hunters in real time.',
  },
  {
    number: '03',
    title: 'Win',
    description: 'Win the auction, checkout securely, and get it delivered to you.',
  },
  {
    number: '04',
    title: 'Sell',
    description: 'List your own items and start your own auction in minutes.',
  },
]

export const benefits = [
  {
    title: 'Discover Unique Finds',
    description: 'One-of-a-kind items you won’t find in a mall.',
  },
  {
    title: 'Better Deals',
    description: 'Real prices from real people, not markup pricing.',
  },
  {
    title: 'Live Auctions',
    description: 'Feel the thrill of bidding in real time.',
  },
  {
    title: 'Sell With Ease',
    description: 'List an item in minutes and start earning.',
  },
  {
    title: 'Community-Driven',
    description: 'Built by thrifters, for thrifters across the Philippines.',
  },
  {
    title: 'Give Items New Life',
    description: 'Keep good finds in circulation, not in landfills.',
  },
]

export const testimonials = [
  {
    quote: 'Finally an app that gets what ukay-ukay hunting actually feels like. The live bidding is so addictive.',
    name: 'Mika R.',
    role: 'Waitlist member, Manila',
  },
  {
    quote: "I've been reselling online for years. UKAY makes listing and bidding feel effortless.",
    name: 'Josh T.',
    role: 'Early access tester, Cebu',
  },
  {
    quote: 'The auction countdown had my heart racing. Never thought thrifting could feel like this.',
    name: 'Anne D.',
    role: 'Waitlist member, Davao',
  },
]
