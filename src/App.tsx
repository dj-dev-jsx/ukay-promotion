import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { UkayExperience } from './components/UkayExperience'
import { FeaturedItems } from './components/FeaturedItems'
import { LiveAuctions } from './components/LiveAuctions'
import { HowItWorks } from './components/HowItWorks'
import { SellSection } from './components/SellSection'
import { WhyUkay } from './components/WhyUkay'
import { SocialProof } from './components/SocialProof'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WaitlistModal } from './components/WaitlistModal'

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onJoin={() => setWaitlistOpen(true)} />
      <Hero onJoin={() => setWaitlistOpen(true)} />
      <UkayExperience />
      <FeaturedItems />
      <LiveAuctions onJoin={() => setWaitlistOpen(true)} />
      <HowItWorks />
      <SellSection onJoin={() => setWaitlistOpen(true)} />
      <WhyUkay />
      <SocialProof />
      <FinalCTA onJoin={() => setWaitlistOpen(true)} />
      <Footer />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  )
}

export default App
