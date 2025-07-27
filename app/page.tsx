import { Hero } from "@/components/home/Hero"
import { FeaturedLands } from "@/components/home/FeaturedLands"
import { Features } from "@/components/home/Features"
import { Stats } from "@/components/home/Stats"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedLands />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  )
}
