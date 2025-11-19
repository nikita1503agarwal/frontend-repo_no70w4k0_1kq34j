import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[75vh] w-full overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(59,130,246,0.18),transparent),radial-gradient(1000px_600px_at_90%_10%,rgba(147,51,234,0.18),transparent)]" />

      {/* Soft grid lines */}
      <div className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(80%_80%_at_50%_20%,black,transparent)]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="glow" cx="50%" cy="0%" r="70%">
              <stop offset="0%" stopColor="rgba(56,189,248,0.5)" />
              <stop offset="60%" stopColor="rgba(147,51,234,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#glow)" />
        </svg>
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Holographic header */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 backdrop-blur-md text-sky-200/90">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs tracking-widest uppercase">Cognitive Identity Stream</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-200 via-indigo-200 to-fuchsia-200 drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]">
              Maulana Niko Ainul Yaqin
            </h1>
            <p className="mt-4 text-sky-100/80 max-w-xl">
              Profil identitas digital dengan tampilan command-center futuristik. Disusun oleh sistem analitik cerdas untuk keterbacaan maksimal.
            </p>

            {/* Holographic stats pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ['Validated', 'status'],
                ['Trusted', 'shield'],
                ['Synced', 'sync'],
              ].map((item, idx) => (
                <div key={idx} className="px-3 py-1 rounded-full text-xs text-indigo-100/90 border border-indigo-400/30 bg-indigo-400/10 backdrop-blur">
                  {item[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade to content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}

export default Hero
