'use client'

import { useState } from 'react'
import Image from 'next/image'

const THIN_CARDS = [
  {
    id: 'soc',
    title: 'SoC Solution',
    imgDefault:  '/img/SoC Solution IMG.png',
    imgExpanded: '/img/SoC_Solution_800x800.png',
  },
  {
    id: 'designip',
    title: 'Design IP',
    imgDefault:  '/img/Design IP IMG.png',
    imgExpanded: '/img/Design_IP_800x800.png',
  },
  {
    id: 'design',
    title: 'Design',
    imgDefault:  '/img/Design IMG.png',
    imgExpanded: '/img/Design_800x800.png',
  },
]

const W_LARGE = 'clamp(180px, 36.46vw, 700px)'
const W_SMALL = 'clamp(80px,  14.06vw, 270px)'
const TRANSITION = 'width 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
const ROW_H = 'clamp(180px, 36.46vw, 700px)'

export default function BusinessSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  const asicWidth = hovered ? W_SMALL : W_LARGE
  const thinWidth = (id: string) => (hovered === id ? W_LARGE : W_SMALL)

  return (
    <section
      className="relative z-10"
      style={{
        paddingTop: '7.4vh',
        paddingBottom: '8vh',
        paddingLeft: '6.04vw',
        paddingRight: '6.04vw',
      }}
    >
      {/* Title */}
      <h2
        className="font-bold text-black"
        style={{
          fontSize: 'clamp(36px, 4.17vw, 80px)',
          marginBottom: 'clamp(20px, 3.7vw, 72px)',
        }}
      >
        Business
      </h2>

      {/* All four cards in one row */}
      <div
        className="flex items-stretch"
        style={{ gap: 'clamp(8px, 2.5vw, 48px)', height: ROW_H }}
      >
        {/* Custom ASIC */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{
            width: asicWidth,
            height: '100%',
            borderRadius: 'clamp(14px, 2.97vw, 57px)',
            transition: TRANSITION,
          }}
        >
          <Image
            src="/img/Custom ASIC img.png"
            alt="Custom ASIC"
            fill
            className="object-cover object-bottom"
            sizes="36.46vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.4) 38%, rgba(0,0,0,0) 62%)',
            }}
          />
          <div
            className="absolute text-white"
            style={{
              left: '10%',
              bottom: '20%',
              opacity: hovered ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }}
          >
            <h3
              className="font-bold"
              style={{ fontSize: 'clamp(18px, 3.33vw, 64px)', lineHeight: 1.1, marginBottom: '0.3em' }}
            >
              Custom<br />ASIC
            </h3>
            <p
              className="font-normal"
              style={{ fontSize: 'clamp(9px, 1.25vw, 24px)', lineHeight: 1.6 }}
            >
              고객 요구에 맞춰 성능과 전력 효율을 최적화한
              <br />
              맞춤형 시스템 반도체를 설계합니다.
            </p>
          </div>
        </div>

        {/* SoC Solution · Design IP · Design */}
        {THIN_CARDS.map((card) => {
          const isExpanded = hovered === card.id
          return (
            <div
              key={card.id}
              className="relative overflow-hidden flex-shrink-0 cursor-pointer"
              style={{
                width: thinWidth(card.id),
                height: '100%',
                borderRadius: 'clamp(16px, 3.125vw, 60px)',
                transition: TRANSITION,
              }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={card.imgDefault}
                alt={card.title}
                fill
                className="object-cover object-bottom"
                sizes="36.46vw"
                style={{ opacity: isExpanded ? 0 : 1, transition: 'opacity 0.35s ease' }}
              />
              <Image
                src={card.imgExpanded}
                alt={card.title}
                fill
                className="object-cover object-bottom"
                sizes="36.46vw"
                style={{ opacity: isExpanded ? 1 : 0, transition: 'opacity 0.35s ease' }}
              />
              <p
                className="absolute font-bold text-white"
                style={{
                  top: '17%',
                  left: '17%',
                  fontSize: 'clamp(10px, 1.25vw, 24px)',
                  whiteSpace: 'nowrap',
                  zIndex: 1,
                }}
              >
                {card.title}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
