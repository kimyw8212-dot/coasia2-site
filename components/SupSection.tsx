export default function SupSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden snap-start snap-always">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/SUP_VISUAL.mp4" type="video/mp4" />
      </video>

      {/* Quote — top right */}
      <p
        className="absolute z-10 text-white font-semibold text-right"
        style={{
          right: '3vw',
          top: '3.15vh',
          fontSize: 'clamp(28px, 5vw, 96px)',
          lineHeight: 1.25,
        }}
      >
        &quot;보이지 않는 회로에
        <br />
        생각을 담다&quot;
      </p>

      {/* Body text — bottom left */}
      <div
        className="absolute z-10 text-white font-medium"
        style={{
          left: '4.53vw',
          bottom: '24.7vh',
          fontSize: 'clamp(13px, 1.67vw, 32px)',
          lineHeight: 1.8,
        }}
      >
        <p>보이지 않는 세계를 설계합니다.</p>
        <p>생각을 구조로 바꾸고, 구조를 기술로 완성합니다.</p>
        <p>우리는 현실을 설계합니다.</p>
      </div>
    </section>
  )
}
