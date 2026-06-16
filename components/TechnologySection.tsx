import Image from 'next/image'

type Card = {
  num: string
  title: string
  desc: string[]
  img: string
  side: 'left' | 'right'
}

const CARDS: Card[] = [
  {
    num: '01',
    title: 'SoC Technology',
    desc: [
      'AI 기반 고집적 SoC 설계 기술로',
      '최적의 성능과 전력 효율을 구현합니다.',
    ],
    img: '/img/SoC Technology IMG.png',
    side: 'left',
  },
  {
    num: '02',
    title: 'Advanced Circuit Design',
    desc: [
      '정밀한 회로 구조 설계를 기반으로 안정적인 성능과 효율을 구현합니다.',
      '고속 처리와 저전력 환경에 최적화된 설계 기술을 제공합니다.',
    ],
    img: '/img/2.png',
    side: 'right',
  },
  {
    num: '03',
    title: 'Turnkey Design Service',
    desc: [
      '설계부터 검증, 물리 설계, 양산 연계까지 전 과정을 지원하는 통합 솔루션입니다.',
      '빠른 개발 대응과 안정적인 생산 프로세스를 제공합니다.',
    ],
    img: '/img/3.png',
    side: 'left',
  },
]

export default function TechnologySection() {
  return (
    <section className="relative z-10" style={{ paddingTop: '6.5vh', paddingBottom: '8vh' }}>
      <h2
        className="font-bold text-black"
        style={{
          fontSize: 'clamp(36px, 4.17vw, 80px)',
          paddingLeft: '6.04vw',
          marginBottom: 'clamp(20px, 3.7vw, 72px)',
        }}
      >
        TECHNOLOGY
      </h2>

      <div className="flex flex-col" style={{ gap: 'clamp(20px, 7.8vw, 150px)' }}>
        {CARDS.map((card) => (
          <div
            key={card.num}
            className="relative overflow-hidden"
            style={{
              width: 'clamp(280px, 56.67vw, 1088px)',
              height: 'clamp(180px, 36.35vw, 698px)',
              borderRadius: 'clamp(16px, 3.125vw, 60px)',
              marginLeft: card.side === 'left' ? '6.04vw' : 'auto',
              marginRight: card.side === 'right' ? '1.82vw' : undefined,
            }}
          >
            <Image src={card.img} alt={card.title} fill className="object-cover" sizes="56.67vw" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0) 52%)',
              }}
            />
            <div className="absolute flex flex-col text-black" style={{ left: '8.5%', top: '26%' }}>
              <span
                className="font-bold leading-none"
                style={{ fontSize: 'clamp(20px, 3.33vw, 64px)', marginBottom: '0.18em' }}
              >
                {card.num}
              </span>
              <h3
                className="font-bold"
                style={{ fontSize: 'clamp(12px, 1.875vw, 36px)', marginBottom: '0.45em' }}
              >
                {card.title}
              </h3>
              <div
                className="font-semibold"
                style={{ fontSize: 'clamp(8px, 0.78vw, 15px)', lineHeight: 1.6, marginBottom: '0.9em' }}
              >
                {card.desc.map((line, i) => <p key={i}>{line}</p>)}
              </div>
              <button
                className="border border-black rounded-full text-black bg-white/20 hover:bg-black hover:text-white transition-colors w-fit"
                style={{ fontSize: 'clamp(10px, 1.04vw, 20px)', padding: '0.35em 1.3em' }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
