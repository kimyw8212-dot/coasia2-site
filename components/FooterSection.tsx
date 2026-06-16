import Image from 'next/image'

const NAV_LINKS = ['파트너십 문의', '오시는 길', '이용약관', '개인정보처리방침']

export default function FooterSection() {
  return (
    <footer
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '54.35vh', marginTop: '12.04vh' }}
    >
      {/* Logo — Figma: x=180 y+215 w=464 h=221 */}
      <div
        className="absolute"
        style={{
          left: '9.375vw',
          top: '36.63%',
          width: '24.17vw',
          height: '37.65%',
        }}
      >
        <Image
          src="/img/FOOTER logo.png"
          alt="CoAsia"
          fill
          className="object-contain object-left"
          sizes="24vw"
        />
      </div>

      {/* Nav links — Figma: x=1016 y+129 w=750 */}
      <div
        className="absolute flex gap-8 text-white font-medium"
        style={{ left: '52.92vw', top: '21.97%', fontSize: '1.25vw' }}
      >
        {NAV_LINKS.map((link) => (
          <span key={link} className="cursor-pointer whitespace-nowrap hover:opacity-70">
            {link}
          </span>
        ))}
      </div>

      {/* Contact — Figma: x=1016 y+305 */}
      <div
        className="absolute text-white"
        style={{ left: '52.92vw', top: '51.96%', fontSize: '1.25vw', lineHeight: 1.8 }}
      >
        <p className="font-semibold">문의하기</p>
        <p className="font-normal">이메일 : customer@oscotec.com</p>
        <p className="font-normal">전화 : +82-31-628-7630</p>
      </div>
    </footer>
  )
}
