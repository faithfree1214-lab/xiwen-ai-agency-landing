import { Hero } from '@/components/landing/Hero'
import { StartSection } from '@/components/landing/StartSection'
import { FeaturesChess } from '@/components/landing/FeaturesChess'
import { FeaturesGrid } from '@/components/landing/FeaturesGrid'
import { StatsSection } from '@/components/landing/StatsSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { CtaFooter } from '@/components/landing/CtaFooter'

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="bg-black">
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <StatsSection />
        <TestimonialsSection />
        <CtaFooter />
      </div>
    </>
  )
}
