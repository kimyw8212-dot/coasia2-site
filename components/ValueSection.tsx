import Image from 'next/image'

// Figma: 1920×1079px  → 1px H = 1/1920 vw,  1px V = 1/1079 vh
const ITEMS = [
  {
    key: 'total',
    icon: '/img/Total  Solution ICON.png',
    // icon rect: x:94  y:369  w:201  h:202  (relative to section top)
    iL: '4.9vw',   iT: '34.2vh',  iW: '10.47vw', iH: '18.7vh',
    // text center-x : 191  text-top: 584  text-w: 286
    tCX: '9.95vw', tT: '54.1vh', tW: '14.9vw',
    title: 'Total Solution',
    desc:  '설계부터 검증·양산까지\n반도체 개발 전 과정을 통합\n지원합니다.',
  },
  {
    key: 'soc',
    icon: '/img/Advanced SoC Design ICON.png',
    // icon: x:460  y:370  w:185  h:185
    iL: '23.96vw', iT: '34.3vh', iW: '9.64vw', iH: '17.1vh',
    // text center-x: 563  top: 584  w: 286
    tCX: '29.32vw', tT: '54.1vh', tW: '14.9vw',
    title: 'Advanced SoC Design',
    desc:  'CPU·GPU·AI 기능을 통합한\n고성능 SoC 설계 기술을\n제공합니다.',
  },
  {
    key: 'fast',
    icon: '/img/Fast Development ICON.png',
    // icon: x:798  y:371  w:228  h:170
    iL: '41.56vw', iT: '34.4vh', iW: '11.875vw', iH: '15.75vh',
    // text center-x: 929  top: 571  w: 286
    tCX: '48.39vw', tT: '52.9vh', tW: '14.9vw',
    title: 'Fast Development',
    desc:  '검증된 설계 IP와 개발 프로를 기반으로\n개발 기간과 비용을 효율적으로\n단축합니다.',
  },
  {
    key: 'partner',
    icon: '/img/Reliable Partnership ICON.png',
    // icon: x:1170  y:375  w:240  h:170
    iL: '60.94vw', iT: '34.75vh', iW: '12.5vw', iH: '15.75vh',
    // text center-x: 1295.5  top: 571  w: 287
    tCX: '67.47vw', tT: '52.9vh', tW: '14.95vw',
    title: 'Reliable Partnership',
    desc:  '파운드리 및 생산 협력 네트워크를 통해\n안정적인 제조 환경을\n지원합니다.',
  },
  {
    key: 'high',
    icon: '/img/High Reliability ICON.png',
    // icon: x:1565  y:384  w:240  h:170
    iL: '81.51vw', iT: '35.59vh', iW: '12.5vw', iH: '15.75vh',
    // text center-x: 1684  top: 612  w: 374
    tCX: '87.71vw', tT: '56.7vh', tW: '19.48vw',
    title: 'High Reliability',
    desc:  '시뮬레이션과 검증 기반의 설계를 통해\n안정성과 품질을\n강화합니다.',
  },
]

// Separator lines at x: 381, 744, 1108, 1471  (÷1920 → vw)
const SEPS = ['19.84vw', '38.75vw', '57.71vw', '76.61vw']

export default function ValueSection() {
  return (
    <section className="relative overflow-hidden" style={{ height: '100vh' }}>

      {/* Black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Background image — opacity 17% (Figma: opacity-17) */}
      <div className="absolute inset-0" style={{ opacity: 0.17 }}>
        <Image src="/img/Value Section img.png" alt="" fill className="object-cover object-bottom" sizes="100vw" />
      </div>

      {/* ── Title ── */}
      <h2
        className="absolute left-0 right-0 text-center text-white font-medium"
        style={{ top: '6.02vh', fontSize: '4.17vw', lineHeight: 'normal' }}
      >
        Value Section
      </h2>

      {/* ── EN subtitle ── */}
      <p
        className="absolute left-0 right-0 text-center text-white font-medium"
        style={{ top: '18.9vh', fontSize: '2.08vw' }}
      >
        Invisible Technology, Visible Impact
      </p>

      {/* ── KO subtitle ── */}
      <p
        className="absolute left-0 right-0 text-center text-white font-medium"
        style={{ top: '25.6vh', fontSize: '1.25vw' }}
      >
        보이지 않는 기술, 분명한 영향력
      </p>

      {/* ── Vertical separator lines ── top:380/1079 = 35.22vh  h:614/1079 = 56.9vh */}
      {SEPS.map((x, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: x, top: '35.22vh',
            width: '1px', height: '56.9vh',
            background: 'rgba(255,255,255,0.3)',
          }}
        />
      ))}

      {/* ── 5 value items ── */}
      {ITEMS.map(item => (
        <div key={item.key}>
          {/* Icon */}
          <div
            className="absolute"
            style={{ left: item.iL, top: item.iT, width: item.iW, height: item.iH }}
          >
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className="object-contain object-left-bottom"
              sizes="12vw"
            />
          </div>

          {/* Text block — centered at tCX via translateX(-50%) */}
          <div
            className="absolute text-center text-white"
            style={{
              left: item.tCX,
              top: item.tT,
              width: item.tW,
              transform: 'translateX(-50%)',
            }}
          >
            <p
              className="font-extrabold"
              style={{ fontSize: '1.875vw', lineHeight: 1.15, marginBottom: '0.5em' }}
            >
              {item.title}
            </p>
            <p
              className="font-normal"
              style={{ fontSize: '1.25vw', lineHeight: 1.65, whiteSpace: 'pre-line' }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
