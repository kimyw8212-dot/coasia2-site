import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'TECHNOLOGY', href: '#' },
  { label: 'R&D',        href: '#' },
  { label: 'PARTNERS',   href: '#' },
  { label: 'PRESS',      href: '#' },
  { label: 'CAREER',     href: '#' },
]

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden snap-start snap-always">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/HERO_VISUAL.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav
        className="absolute z-10 flex items-center"
        style={{
          top: '4.54vh',
          left: '5.47vw',
          gap: 'clamp(40px, 9.9vw, 190px)',
        }}
      >
        <div style={{ width: 'clamp(100px, 9.375vw, 180px)' }}>
          <Image
            src="/img/rogo.png"
            alt="CoAsia"
            width={180}
            height={86}
            className="object-contain"
            priority
          />
        </div>

        <ul
          className="flex items-center list-none"
          style={{ gap: 'clamp(16px, 4vw, 77px)' }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-white font-medium whitespace-nowrap transition-opacity hover:opacity-70"
                style={{ fontSize: 'clamp(12px, 1.25vw, 24px)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero title */}
      <div
        className="absolute z-10"
        style={{ left: '5.47vw', top: '28.24vh' }}
      >
        <h1
          className="font-extrabold text-white"
          style={{
            fontSize: 'clamp(40px, 6.77vw, 130px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Where Circuits
          <br />
          Begin
          <br />
          to Think
        </h1>
      </div>
    </section>
  )
}
