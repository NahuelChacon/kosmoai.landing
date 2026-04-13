import StarField from './StarField'

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-space-950">
      <StarField count={120} />

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(201,162,39,0.1)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Sin compromiso · Sin tarjeta de crédito
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          ¿Listo para llevar tu{' '}
          <br className="hidden sm:block" />
          inmobiliaria a{' '}
          <span className="text-gold-gradient">otra dimensión?</span>
        </h2>

        {/* Sub-copy */}
        <p className="reveal reveal-delay-2 text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
          Agenda hoy tu consultoría gratuita de 30 minutos. Analizamos tu inmobiliaria, identificamos las oportunidades
          y te mostramos exactamente cómo KOSMO puede transformarla.{' '}
          <span className="text-white/70 font-medium">Sin presiones. Solo resultados.</span>
        </p>

        {/* CTA Button */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* 👉 CALENDLY: reemplazá la URL con tu link personal de Calendly
               Ejemplo: 'https://calendly.com/nahuel-kosmoai/consultoria'  */}
          <button
            onClick={() => window.open('https://calendly.com/nahuelvlogs0/consultoria-gratuita-kosmo', '_blank')}
            className="btn-gold px-10 py-5 text-lg font-black shadow-[0_0_60px_rgba(201,162,39,0.35)] animate-pulse-glow"
          >
            <span className="flex items-center gap-3">
              Agendar Consultoría Gratuita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        {/* Microcopy */}
        <div className="reveal reveal-delay-4 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
          {[
            { icon: '🕐', text: 'Respuesta en menos de 24 hs' },
            { icon: '🎯', text: 'Consultoría 100% personalizada' },
            { icon: '🔒', text: 'Confidencialidad garantizada' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal reveal-delay-5 mt-16 pt-12 border-t border-gold-500/10">
          <p className="text-white/20 text-sm mb-6 uppercase tracking-widest font-medium">
            Tecnología en la que confían
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['OpenAI', 'Anthropic', 'Meta AI', 'Google Cloud', 'Stripe'].map((brand) => (
              <span
                key={brand}
                className="text-white/20 text-sm font-bold tracking-wider hover:text-white/40 transition-colors duration-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
