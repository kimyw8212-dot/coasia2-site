export default function VideoSection() {
  return (
    <section
      className="relative z-10"
      style={{
        paddingTop: '6.48vh',   /* ~70px / 1080 */
        paddingBottom: '6.48vh',
        paddingLeft: '6.71vw',  /* 129px / 1920 */
        paddingRight: '6.71vw',
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: '100%',
          maxWidth: 'clamp(300px, 86.56vw, 1662px)',
          height: 'clamp(220px, 69.26vh, 748px)',
          borderRadius: 'clamp(20px, 3.125vw, 60px)',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
