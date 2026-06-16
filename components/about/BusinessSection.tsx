'use client'

import { useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    title: 'SOC Design Service',
    desc: '고객 요구사항에 최적화된 SoC 설계 솔루션을 제공합니다. 검증된 설계 역량과 전문 엔지니어링 기술을 바탕으로\n고성능·고신뢰성 반도체 개발을 지원합니다.',
    img: '/img/SOC Design Service img.png',
  },
  {
    title: 'Platform Business',
    desc: '검증된 플랫폼과 기술 자산을 활용하여 개발 기간을 단축하고 비용 효율성을 극대화합니다.\n고객 맞춤형 플랫폼 제공을 통해 빠른 시장 진입과 경쟁력 확보를 지원합니다.',
    img: '/img/Platform Business img.png',
  },
  {
    title: 'Turnkey Business',
    desc: '기획부터 설계, 검증, 양산까지 전 과정을 통합 제공하는 원스톱 서비스를 제공합니다.\n체계적인 프로젝트 관리와 협력 네트워크를 기반으로 안정적인 제품 출시를 실현합니다.',
    img: '/img/Turnkey Business img.png',
  },
]

// Figma 버튼 x positions: 212, 719, 1226 → 11.04vw, 37.45vw, 63.85vw
const BAR_LEFTS = ['11.04vw', '37.45vw', '63.85vw']

export default function BusinessSection() {
  const [active, setActive] = useState(0)

  return (
    // Figma 23:32~23:50 — 1920×1080  dark bg
    <section
      className="relative w-full"
      style={{ height: '100vh', background: '#ffffff' }}
    >
      {/* ── 이미지 컨테이너 (rounded)
          Figma: x=115 y=163 w=1658 h=792                                 */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '5.99vw',    // 115/1920
          top: '15.09vh',    // 163/1080
          width: '86.35vw',  // 1658/1920
          height: '73.33vh', // 792/1080
          borderRadius: '24px',
        }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: active === i ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="87vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* ── 타이틀 + 설명 (슬라이드별 페이드)
          Figma: title x=212 y=367(section-rel)  desc y=540              */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: '11.04vw',  // 212/1920
            top: '33.98vh',   // 367/1080
            opacity: active === i ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(22px, 2.5vw, 48px)', lineHeight: 1.2 }}
          >
            {slide.title}
          </h2>
          <p
            className="text-white"
            style={{
              marginTop: '1.6vh',
              fontSize: 'clamp(13px, 1.25vw, 24px)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              opacity: 0.85,
            }}
          >
            {slide.desc}
          </p>
        </div>
      ))}

      {/* ── 진행 바 버튼 (3개)
          Figma: y=902(section-rel)=83.52vh  w=481px=25.05vw  h=6px      */}
      {SLIDES.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          aria-label={SLIDES[i].title}
          style={{
            position: 'absolute',
            left: BAR_LEFTS[i],
            top: '83.52vh',    // 902/1080
            width: '25.05vw',  // 481/1920
            height: '6px',
            borderRadius: '3px',
            background: active === i ? '#ffffff' : 'rgba(255,255,255,0.28)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.35s ease',
            padding: 0,
          }}
        />
      ))}
    </section>
  )
}
