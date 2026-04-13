import StarField from './StarField'

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-950">
      {/* Starfield background */}
      <StarField count={220} />

      {/* Deep space radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.07)_0%,transparent_65%)]" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(100,80,200,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Inteligencia Artificial · Inmobiliarias
          </div>

          {/* Headline */}
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.07] tracking-tight text-white mb-6">
            Tu Inmobiliaria,{' '}
            <br className="hidden sm:block" />
            <span className="text-gold-gradient">En Otra Órbita</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Captamos y calificamos leads automáticamente, agendamos visitas sin fricción
            y atendemos consultas las 24 horas —{' '}
            <span className="text-white/80 font-medium">
              todo con inteligencia artificial diseñada específicamente para inmobiliarias.
            </span>
          </p>

          {/* CTA buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToCTA}
              className="btn-gold px-8 py-4 text-base font-bold shadow-[0_0_40px_rgba(201,162,39,0.3)]"
            >
              <span>Agenda tu Consultoría Gratuita</span>
            </button>
            <button
              onClick={scrollToFeatures}
              className="btn-outline px-8 py-4 text-base font-semibold flex items-center justify-center gap-2"
            >
              Ver soluciones
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Trust bar */}
          <div className="hero-cta mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {['D', 'M', 'C', 'A'].map((l, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-space-700 to-space-800 border-2 border-gold-500/30 flex items-center justify-center text-xs font-bold text-gold-400"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/40">
              <span className="text-white/70 font-semibold">+10 inmobiliarias</span> ya transformadas
            </p>
          </div>
        </div>

        {/* Right visual — orbital system */}
        <div className="hero-visual hidden lg:flex items-center justify-center relative">
          <div className="relative w-[480px] h-[480px]">

            {/* Core planet */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 shadow-[0_0_60px_rgba(201,162,39,0.5),0_0_120px_rgba(201,162,39,0.2)] animate-pulse-glow flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 fill-space-900">
                  <path d="M20 4a16 16 0 1 0 16 16A16 16 0 0 0 20 4zm0 28a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"/>
                  <circle cx="20" cy="20" r="5"/>
                  <ellipse cx="20" cy="20" rx="16" ry="5" fill="none" stroke="#05050f" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Ring 1 */}
            <div className="orbit-ring-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-gold-500/25">
              <div className="orbit-dot absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gold-400 shadow-[0_0_16px_rgba(201,162,39,0.8)] flex items-center justify-center">
                <svg viewBox="0 0 12 12" className="w-3 h-3 fill-space-900">
                  <path d="M6 0l1.5 3.5L11 5 8.5 8l.5 4L6 10.5 3 12l.5-4L1 5l3.5-1.5z"/>
                </svg>
              </div>
              <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 border border-white/30" />
            </div>

            {/* Ring 2 */}
            <div className="orbit-ring-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gold-500/15">
              <div className="orbit-dot absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-space-700 border border-gold-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(201,162,39,0.4)]">
                <span className="text-[9px] font-black text-gold-400">AI</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-600/40 border border-gold-500/40" />
            </div>

            {/* Ring 3 */}
            <div className="orbit-ring-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-gold-500/08">
              <div className="orbit-dot absolute -top-2 left-1/3 w-4 h-4 rounded-full bg-white/10 border border-white/20" />
              <div className="absolute -bottom-2 right-1/3 w-3 h-3 rounded-full bg-gold-500/30 border border-gold-500/50" />
            </div>

            {/* Floating label cards */}
            <div className="animate-float absolute -left-4 top-16 glass-card rounded-xl px-4 py-3 z-30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span className="text-xs font-semibold text-white/80">Agente IA activo</span>
              </div>
              <p className="text-[11px] text-white/40 mt-0.5">Calificando leads 24/7</p>
            </div>

            <div className="animate-float-delayed absolute -right-4 bottom-24 glass-card rounded-xl px-4 py-3 z-30">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
                <span className="text-xs font-semibold text-gold-400">+70% eficiencia</span>
              </div>
              <p className="text-[11px] text-white/40">Visitas agendadas solo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-900 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
        <span className="text-xs tracking-widest uppercase">Descubrir</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
