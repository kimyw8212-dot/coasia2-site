import AboutHeroSection from '@/components/about/HeroSection'
import AboutSupSection from '@/components/about/SupSection'
import BusinessSection from '@/components/about/BusinessSection'
import VMCSection from '@/components/about/VMCSection'
import CTASection from '@/components/about/CTASection'
import FooterSection from '@/components/FooterSection'

export default function AboutPage() {
  return (
    <main className="h-screen overflow-y-scroll" style={{ scrollSnapType: 'y proximity' }}>
      <AboutHeroSection />
      <AboutSupSection />
      <BusinessSection />
      <VMCSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
