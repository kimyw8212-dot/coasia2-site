'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function SupSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    // Figma 23:25 — 1920×1080px  흰 배경
    <section ref={sectionRef} className="relative w-full bg-white" style={{ height: '100vh' }}>

      {/* ── sup SECTION 1 — 위에서 내려오는 애니메이션
          Figma: x=1040 y=148(section-relative) w=333 h=510               */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '54.17vw',    // 1040/1920
          top: '13.70vh',     // 148/1080
          width: '17.34vw',   // 333/1920
          height: '47.22vh',  // 510/1080
          borderRadius: '64px',
          transform: visible ? 'translateY(0)' : 'translateY(-55vh)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.7s ease',
        }}
      >
        <Image
          src="/img/sup SECTION 1.png"
          alt="Sup Section 1"
          fill
          className="object-cover"
          sizes="18vw"
        />
      </div>

      {/* ── sup SECTION 2 — 아래에서 올라오는 애니메이션
          Figma: x=1440 y=403(section-relative) w=333 h=510               */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: '75vw',       // 1440/1920
          top: '37.31vh',     // 403/1080
          width: '17.34vw',   // 333/1920
          height: '47.22vh',  // 510/1080
          borderRadius: '64px',
          transform: visible ? 'translateY(0)' : 'translateY(55vh)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s, opacity 0.7s ease 0.15s',
        }}
      >
        <Image
          src="/img/sup SECTION 2.png"
          alt="Sup Section 2"
          fill
          className="object-cover"
          sizes="18vw"
        />
      </div>

      {/* ── Who We Are — Figma: font-size 64px bold, x=115 y=360(section) */}
      <h2
        className="absolute font-bold text-black"
        style={{
          left: '5.99vw',     // 115/1920
          top: '33.33vh',     // 360/1080
          fontSize: 'clamp(28px, 3.33vw, 64px)',
          lineHeight: 1,
        }}
      >
        Who We Are
      </h2>

      {/* ── 본문 1 — Figma: font-size 24px regular, line-height 36px
          x=115 y=509(section) w=1073                                      */}
      <p
        className="absolute text-black"
        style={{
          left: '5.99vw',
          top: '47.13vh',     // 509/1080
          width: '55.88vw',   // 1073/1920
          fontSize: 'clamp(14px, 1.25vw, 24px)',
          lineHeight: '36px',
        }}
      >
        CoAsia SEMI는 혁신적이고 유용한 기술로 세상을 한 단계 발전시키는<br />
        모든 고객을 위해 최고의 반도체 디자인 서비스를 제공합니다.
      </p>

      {/* ── 본문 2 — Figma: font-size 24px regular, line-height 36px
          x=115 y=611(section) w=1073 (이미지 침범 방지 위해 본문1과 동일 너비) */}
      <p
        className="absolute text-black"
        style={{
          left: '5.99vw',
          top: '56.57vh',     // 611/1080
          width: '55.88vw',   // 1073/1920 — 이미지 영역 전에 끊기
          fontSize: 'clamp(14px, 1.25vw, 24px)',
          lineHeight: '36px',
        }}
      >
        Spec부터 RTL, Netlist, GDS까지 폭넓은 고객 인터페이스를<br />
        제공하며, IP 커스터마이징·디자인 기술·플랫폼 솔루션을 함께 제공합니다.<br />
        패키지·테스트·품질관리를 포함한 턴키 솔루션을 제공하는 Total Solution Provider입니다.
      </p>
    </section>
  )
}
