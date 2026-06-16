'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const STEPS = [
  {
    label: 'Vision',
    img: '/img/Vision img.png',
    title: 'Global Chipless No.1\nAutomotive Semiconductors',
    desc: '자동차 반도체 분야에서 글로벌 넘버원 칩리스 설계 기업을\n목표로 기술 역량을 집중하고 있습니다.',
  },
  {
    label: 'Mission',
    img: '/img/Mission img.png',
    title: 'Provide the Leading Edge Technologies\nand Services, Anytime and Anywhere',
    desc: '언제 어디서든 최첨단 기술과 서비스를 제공하여\n고객의 성공을 함께 실현합니다.',
  },
  {
    label: 'Core Value',
    img: '/img/Core Value img.png',
    title: 'Global Chipless No.1\nAutomotive Semiconductors',
    desc: '자동차 반도체 분야에서 글로벌 넘버원 칩리스 설계 기업을\n목표로 기술 역량을 집중하고 있습니다.',
  },
]

// Figma 4.2/4.3 기준: Vision y=121/1080, Mission y=234/1080, Core Value y=347/1080
const LABEL_TOPS = [11.2, 21.67, 32.13] // vh

// 이미지 y offsets: 4.x에서 각 이미지가 쌓이는 위치
// Vision: 101/1080=9.35vh, Mission: 214/1080=19.81vh, CV: 327/1080=30.28vh
const IMG_TOPS = [9.35, 19.81, 30.28] // vh

export default function VMCSection() {
  const outerRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    // 실제로 스크롤되는 조상 요소를 탐색
    const getScrollParent = (el: HTMLElement): HTMLElement | Window => {
      let cur: HTMLElement | null = el.parentElement
      while (cur) {
        const { overflow, overflowY } = getComputedStyle(cur)
        if (/(auto|scroll)/.test(overflow + overflowY)) return cur
        cur = cur.parentElement
      }
      return window
    }

    const handleScroll = () => {
      const rect = outer.getBoundingClientRect()
      const scrolled = -rect.top
      setStep(Math.min(2, Math.max(0, Math.floor(scrolled / window.innerHeight))))
    }

    const scrollParent = getScrollParent(outer)
    scrollParent.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => scrollParent.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // 400vh 높이: step 0/1/2 각 100vh + sticky 해제 여유 100vh
    <div ref={outerRef} style={{ height: '400vh', position: 'relative' }}>

      {/* sticky 내부 — 항상 뷰포트에 고정 */}
      <div
        className="sticky top-0 w-full bg-white overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* ── 왼쪽 레이블 (단계마다 쌓임)
            Figma 4.1~4.3: x=73~116/1920=5.99vw 기준                       */}
        {STEPS.map((s, i) => (
          <span
            key={s.label}
            className="absolute font-bold text-black"
            style={{
              left: '5.99vw',          // 115/1920
              top: `${LABEL_TOPS[i]}vh`,
              fontSize: 'clamp(18px, 2.08vw, 40px)',
              whiteSpace: 'nowrap',
              opacity: step >= i ? 1 : 0,
              transform: step >= i ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 0.3s ease, transform 0.3s ease`,
            }}
          >
            {s.label}
          </span>
        ))}

        {/* ── 이미지 (카드 스택 효과)
            Figma: x=370/1920=19.27vw  w=738/1920=38.44vw  h=632/1080=58.52vh
            각 이미지가 y축으로 조금씩 내려가며 쌓임                         */}
        {STEPS.map((s, i) => (
          <div
            key={i}
            className="absolute overflow-hidden"
            style={{
              left: '19.27vw',
              top: `${IMG_TOPS[i]}vh`,
              width: '38.44vw',
              height: '58.52vh',
              borderRadius: '20px',
              zIndex: i + 1,
              opacity: step >= i ? 1 : 0,
              transform: step >= i ? 'translateY(0)' : 'translateY(40vh)',
              transition: `opacity 0.35s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            }}
          >
            <Image
              src={s.img}
              alt={s.label}
              fill
              className="object-cover"
              sizes="39vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* ── 오른쪽 타이틀
            Figma 4.1~4.3: x=1200/1920=62.5vw  y=101/1080=9.35vh  w=672/1920=35vw */}
        {STEPS.map((s, i) => (
          <p
            key={`title-${i}`}
            className="absolute font-bold text-black"
            style={{
              left: '62.5vw',
              top: '9.35vh',
              width: '35vw',
              fontSize: 'clamp(16px, 1.67vw, 32px)',
              lineHeight: 1.3,
              whiteSpace: 'pre-line',
              opacity: step === i ? 1 : 0,
              transition: 'opacity 0.25s ease',
              pointerEvents: step === i ? 'auto' : 'none',
            }}
          >
            {s.title}
          </p>
        ))}

        {/* ── 오른쪽 설명
            Figma 4.1~4.3: x=1200/1920=62.5vw  y=265/1080=24.54vh  w=672/1920=35vw */}
        {STEPS.map((s, i) => (
          <p
            key={`desc-${i}`}
            className="absolute text-black"
            style={{
              left: '62.5vw',
              top: '24.54vh',
              width: '35vw',
              fontSize: 'clamp(13px, 1.25vw, 24px)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              opacity: step === i ? 1 : 0,
              transition: 'opacity 0.25s ease',
              pointerEvents: step === i ? 'auto' : 'none',
            }}
          >
            {s.desc}
          </p>
        ))}
      </div>
    </div>
  )
}
