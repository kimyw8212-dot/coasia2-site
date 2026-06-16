import Image from 'next/image'

// Figma: 1920×1209px section (8722→9931 canvas y)
// Content box: left:102 top:0 w:1704 h:968 radius:60px bg:#000
// Strip: left:102 top:967 w:1704 h:242 (below box)

const LOGOS = [
  '/img/PARTNERS icon 1.png',
  '/img/PARTNERS icon2.png',
  '/img/PARTNERS icon3.png',
  '/img/PARTNERS icon4.png',
  '/img/PARTNERS icon5.png',
  '/img/PARTNERS icon6.png',
  '/img/PARTNERS icon7.png',
  '/img/PARTNERS icon8.png',
]

export default function PartnersSection() {
  const track = [...LOGOS, ...LOGOS]

  return (
    // section height: 1209/1080 = 111.94vh
    <section className="relative w-full" style={{ height: '112vh', background: '#fff', marginTop: '16.3vh' }}>

      {/* ── Main content box (Rectangle 36) ─────────────────────────────
          Figma: left:102 top:0 w:1704 h:968 borderRadius:60 bg:#000      */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '5.31vw',        // 102/1920
          top: 0,
          width: '88.75vw',      // 1704/1920
          height: '89.63vh',     // 968/1080
          borderRadius: '60px',
          background: '#000',
        }}
      >
        {/* PARTNERS IMG — 먼저 렌더링해서 텍스트 뒤에 위치
            Figma: left:(259-102)/1704=9.22%  top:205/968=21.18%
            w:1356/1704=79.58%  h:762/968=78.72%                         */}
        <div
          className="absolute"
          style={{
            left: '9.22%', top: '21.18%',
            width: '79.58%', height: '78.72%',
          }}
        >
          <Image
            src="/img/PARTNERS img.png"
            alt="Partners"
            fill
            className="object-cover"
            sizes="79vw"
          />
        </div>

        {/* "PARTNERS" label ── top:80/968=8.27%  color:#1f7cf5  32px */}
        <p
          className="absolute left-0 right-0 text-center font-medium"
          style={{ top: '8.27%', color: '#1f7cf5', fontSize: '1.67vw' }}
        >
          PARTNERS
        </p>

        {/* "Global Partners, Reliable Solutions"
            Figma: right edge x=1300 → box right offset=(1704-(1300-102))/1704=29.7%
            top: 158/968 = 16.32%  font:40px  white semibold            */}
        <p
          className="absolute text-white font-semibold"
          style={{
            top: '16.32%',
            right: '29.7%',
            fontSize: '2.08vw',
            whiteSpace: 'nowrap',
          }}
        >
          Global Partners, Reliable Solutions
        </p>

        {/* Korean description ── top:249/968=25.72%  24px  centered */}
        <p
          className="absolute left-0 right-0 text-white text-center font-medium"
          style={{ top: '25.72%', fontSize: '1.25vw', lineHeight: 1.65 }}
        >
          설계부터 생산까지 연결되는 글로벌 파트너 네트워크를 기반으로<br />
          안정적인 반도체 개발과 양산 프로세스를 지원합니다.
        </p>
      </div>

      {/* ── Scrolling logos strip ─────────────────────────────────────
          Figma: left:102 top:967 w:1704 h:242
          → left:5.31vw top:89.54vh w:88.75vw h:22.41vh               */}
      <div
        className="absolute overflow-hidden flex items-center"
        style={{
          left: '5.31vw',
          top: '89.54vh',       // 967/1080
          width: '88.75vw',
          height: '22.41vh',    // 242/1080
          borderRadius: '60px',
          background: '#f5f5f7',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'center',
            animation: 'marquee-scroll 24s linear infinite',
          }}
        >
          {track.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // slot: 1704/8 logos = 213px each at 1920px → 11.09vw
                width: 'clamp(130px, 11.09vw, 213px)',
                padding: '0 clamp(14px, 1.3vw, 24px)',
              }}
            >
              {/* Logo container: ~60% of strip height → 242*0.6=145px */}
              <div
                style={{
                  position: 'relative',
                  height: 'clamp(72px, 13.4vh, 145px)',
                  width: '100%',
                }}
              >
                <Image
                  src={src}
                  alt={`Partner ${(i % LOGOS.length) + 1}`}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
