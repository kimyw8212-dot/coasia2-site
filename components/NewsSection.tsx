import Image from 'next/image'

export default function NewsSection() {
  return (
    <section
      className="relative w-full bg-white"
      style={{ height: '72.13vh', marginTop: '9.44vh' }}
    >
      {/* NEWS title — Figma: x=95 y=section-top w=254 h=97 */}
      <h2
        className="absolute font-black text-black"
        style={{ left: '4.95vw', top: 0, fontSize: '4.17vw', lineHeight: 'normal' }}
      >
        NEWS
      </h2>

      {/* Card 1 — Figma: x=102 y+158 w=824 img-h=516 */}
      <div
        className="absolute"
        style={{ left: '5.31vw', top: '14.63vh', width: '42.92vw' }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: '100%', height: '47.78vh', borderRadius: '12px' }}
        >
          <Image
            src="/img/NEWS img1.png"
            alt="News 1"
            fill
            className="object-cover"
            sizes="43vw"
          />
        </div>
        <p
          className="text-black font-medium"
          style={{ marginTop: '1.2vh', fontSize: '1.67vw', lineHeight: 1.4 }}
        >
          AI SoC Development Expansion<br />2026.05.13
        </p>
      </div>

      {/* Card 2 — Figma: x=980 y+158 w=824 img-h=516 */}
      <div
        className="absolute"
        style={{ left: '51.04vw', top: '14.63vh', width: '42.92vw' }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: '100%', height: '47.78vh', borderRadius: '12px' }}
        >
          <Image
            src="/img/NEWS 2.png"
            alt="News 2"
            fill
            className="object-cover"
            sizes="43vw"
          />
        </div>
        <p
          className="text-black font-medium"
          style={{ marginTop: '1.2vh', fontSize: '1.67vw', lineHeight: 1.4 }}
        >
          AI SoC Development Expansion<br />2026.05.13
        </p>
      </div>
    </section>
  )
}
