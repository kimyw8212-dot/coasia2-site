import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SupSection from '@/components/SupSection'
import TechnologySection from '@/components/TechnologySection'
import BusinessSection from '@/components/BusinessSection'
import VideoSection from '@/components/VideoSection'
import ValueSection from '@/components/ValueSection'
import PartnersSection from '@/components/PartnersSection'
import NewsSection from '@/components/NewsSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll" style={{ scrollSnapType: 'y proximity' }}>
      <HeroSection />
      <SupSection />

      {/* 03 · 05 · 04 — shared BANK IMG background */}
      <div className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/img/BANK IMG.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <TechnologySection />
        <VideoSection />
        <BusinessSection />
      </div>

      {/* 06 · 07 · 08 · 09 */}
      <ValueSection />
      <PartnersSection />
      <NewsSection />
      <FooterSection />
    </main>
  )
}
