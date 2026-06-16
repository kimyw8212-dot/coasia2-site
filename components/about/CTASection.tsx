import Image from 'next/image'

export default function CTASection() {
  return (
    // Figma 23:83 — section 1920×689 (63.8vh)  흰 배경 wrapper
    <section className="relative w-full" style={{ height: '63.8vh', background: '#fff' }}>

      {/* ── 둥근 카드 (overflow hidden)
          Figma: x=131 w=1658 h=689  borderRadius=47px                    */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '6.82vw',    // 131/1920
          top: 0,
          width: '86.35vw',  // 1658/1920
          height: '63.8vh',  // 689/1080
          borderRadius: '47px',
          background: '#000',
        }}
      >
        {/* 배경 이미지 50% 불투명도
            Figma node 23:85: opacity=0.5                                  */}
        <Image
          src="/img/Let`s Build the Future Together img.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.5 }}
          sizes="87vw"
          priority
        />

        {/* 타이틀 — Figma: card-relative x=113 y=97  64px bold white
            113/1920=5.89vw  97/1080=8.98vh                               */}
        <h2
          className="absolute font-bold text-white"
          style={{
            left: '5.89vw',
            top: '8.98vh',
            fontSize: 'clamp(22px, 3.33vw, 64px)',
            lineHeight: 1.2,
          }}
        >
          Let`s Build the Future Together
        </h2>

        {/* 서브타이틀 — Figma: y=199(section-rel)  32px white
            199/1080=18.43vh                                               */}
        <p
          className="absolute text-white"
          style={{
            left: '5.89vw',
            top: '18.43vh',
            fontSize: 'clamp(13px, 1.67vw, 32px)',
            opacity: 0.9,
          }}
        >
          Future Mobility · Semiconductor · Innovation
        </p>

        {/* Contact Us 버튼 — Figma: x=113 y=293 w=290 h=96 borderRadius=48
            5.89vw / 27.13vh / 15.1vw / 8.89vh                            */}
        <button
          className="absolute flex items-center justify-center text-white"
          style={{
            left: '5.89vw',
            top: '27.13vh',
            width: '15.1vw',
            height: '8.89vh',
            borderRadius: '48px',
            border: '1.5px solid rgba(255,255,255,0.85)',
            background: 'transparent',
            fontSize: 'clamp(13px, 1.67vw, 32px)',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  )
}
