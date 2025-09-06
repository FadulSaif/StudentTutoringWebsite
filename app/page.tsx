import { HeroSection } from "@/components/hero-section"
import { WhyUsSection } from "@/components/why-us-section"
import { SubjectsCarousel } from "@/components/subjects-carousel"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturedTutorsSection } from "@/components/featured-tutors-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhyUsSection />
        <SubjectsCarousel />
        <HowItWorksSection />
        <FeaturedTutorsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
