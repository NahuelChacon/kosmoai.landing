const testimonials = [
  {
    name: 'Martín Alderete',
    role: 'Dueño & Director Comercial',
    clinic: 'Alderete Propiedades',
    city: 'Buenos Aires',
    avatar: 'MA',
    stars: 5,
    quote:
      'Desde que implementamos KOSMO, el agente IA atiende más de 150 consultas diarias en WhatsApp sin que ningún asesor tenga que intervenir. Los leads que llegan a nuestro equipo ya están calificados y listos para avanzar. Recuperamos horas de trabajo y cerramos más operaciones.',
    highlight: 'Leads calificados antes de llegar al asesor',
  },
  {
    name: 'Luciana Ferreyra',
    role: 'Fundadora & Gerente General',
    clinic: 'Ferreyra Inmobiliaria',
    city: 'Córdoba',
    avatar: 'LF',
    stars: 5,
    quote:
      'El agendado automático de visitas cambió todo. Antes perdíamos interesados porque no podíamos responder rápido. Hoy el sistema les confirma la visita en minutos, les manda recordatorio antes y cuando llegan ya saben qué esperar. La tasa de visitas concretadas subió notablemente.',
    highlight: '+35% de visitas concretadas desde el primer mes',
  },
  {
    name: 'Diego Saráchaga',
    role: 'Director & Co-fundador',
    clinic: 'Saráchaga & Asociados',
    city: 'Rosario',
    avatar: 'DS',
    stars: 5,
    quote:
      'Lo que más me sorprendió fue la calificación de leads. KOSMO detecta si el interesado es comprador, vendedor o inversor, qué zona le interesa y qué presupuesto tiene — todo antes de que mi equipo haga una sola llamada. Dejamos de perder tiempo y nos enfocamos en quienes realmente compran.',
    highlight: '70% menos tiempo en gestión de consultas',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-space-800 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(201,162,39,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-500 mb-4">
            Historias de éxito
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Inmobiliarias que ya{' '}
            <span className="text-gold-gradient">despegaron con KOSMO</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Dueños y directores que tomaron la decisión de transformar su inmobiliaria con inteligencia artificial.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-gold-500/10 text-8xl font-serif leading-none select-none group-hover:text-gold-500/15 transition-colors duration-300">
                "
              </div>

              {/* Stars */}
              <div className="mb-5">
                <StarRating count={t.stars} />
              </div>

              {/* Highlight pill */}
              <div className="inline-flex items-center gap-1.5 mb-5 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 w-fit">
                <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="text-[11px] font-bold text-gold-400">{t.highlight}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 text-sm leading-relaxed flex-grow mb-8 relative z-10">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gold-500/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-700/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-black text-gold-400">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                  <p className="text-gold-500/70 text-xs font-medium">{t.clinic} — {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust signal */}
        <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: '4.9/5', label: 'Valoración promedio' },
            { value: '100%', label: 'Clientes satisfechos' },
            { value: '30 días', label: 'Primeros resultados' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-black text-gold-400">{item.value}</span>
              <span className="text-xs text-white/35 font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
