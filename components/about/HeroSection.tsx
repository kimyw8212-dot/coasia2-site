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

export default function AboutHeroSection() {
  return (
    // Figma: 1920×1326px  (1326/1080 = 122.78vh)
    <section className="relative w-full bg-white" style={{ height: '122.78vh' }}>

      {/* ── Navigation ─────────────────────────────────────────────────────
          Figma: x=115 y=42  logo w=180 h=86  links start at x=485        */}
      <nav
        className="absolute z-10 flex items-center"
        style={{
          top: '3.89vh',      // 42/1080
          left: '5.99vw',     // 115/1920
          gap: 'clamp(40px, 9.9vw, 190px)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ width: 'clamp(100px, 9.375vw, 180px)', display: 'block' }}>
          <Image
            src="/img/rogo.png"
            alt="CoAsia"
            width={180}
            height={86}
            className="object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <ul className="flex items-center list-none" style={{ gap: 'clamp(16px, 4vw, 77px)' }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-medium whitespace-nowrap transition-opacity hover:opacity-60"
                style={{
                  fontSize: 'clamp(12px, 1.25vw, 24px)',
                  color: label === 'About' ? '#1f7cf5' : '#111',
                  borderBottom: label === 'About' ? '2px solid #1f7cf5' : 'none',
                  paddingBottom: label === 'About' ? '2px' : '0',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Title ──────────────────────────────────────────────────────────
          Figma: x=115 y=198 w=1180 h=154  2-line bold black text          */}
      <h1
        className="absolute font-extrabold text-black"
        style={{
          left: '5.99vw',     // 115/1920
          top: '18.33vh',     // 198/1080
          fontSize: 'clamp(28px, 3.49vw, 67px)',
          lineHeight: 1.15,
        }}
      >
        CoAsia는 정교한 설계와 혁신 기술을 활용해
        <br />
        더 스마트한 미래를 만들어갑니다.
      </h1>

      {/* ── Hero Visual Video ───────────────────────────────────────────────
          Figma: x=111 y=422 w=1662 h=792  rounded-rectangle               */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '5.78vw',     // 111/1920
          top: '39.07vh',     // 422/1080
          width: '86.56vw',   // 1662/1920
          height: '73.33vh',  // 792/1080
          borderRadius: '20px',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/HERO_VISUAL%20(2).mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
