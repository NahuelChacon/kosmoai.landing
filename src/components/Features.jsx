const features = [
  {
    id: 'consultas',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
        <circle cx="24" cy="24" r="12" stroke="#C9A227" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="24" cy="24" r="5" fill="#C9A227"/>
        <circle cx="24" cy="9" r="3" fill="#E8B84B" opacity="0.8"/>
        <circle cx="37" cy="31" r="2.5" fill="#C9A227" opacity="0.7"/>
        <circle cx="11" cy="31" r="2" fill="#F5D46B" opacity="0.6"/>
      </svg>
    ),
    tag: 'Agentes IA',
    title: 'Atención a Consultas sin Límites',
    subtitle: 'Tu inmobiliaria nunca cierra',
    description:
      'Desplegamos agentes de inteligencia artificial que responden consultas sobre propiedades, horarios, precios y disponibilidad — los 365 días del año, las 24 horas del día, en múltiples canales simultáneamente.',
    bullets: [
      'Respuesta instantánea en WhatsApp, Instagram y web',
      'Información detallada de propiedades al instante',
      'Derivación automática al asesor correcto',
      'Escalada a humanos cuando la situación lo requiere',
    ],
    accentColor: 'from-gold-500/20 to-transparent',
  },
  {
    id: 'leads',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="#C9A227" strokeWidth="1.5" opacity="0.5"/>
        <path d="M6 18h36" stroke="#C9A227" strokeWidth="1.5" opacity="0.4"/>
        <rect x="12" y="23" width="10" height="3" rx="1.5" fill="#C9A227" opacity="0.7"/>
        <rect x="12" y="29" width="16" height="3" rx="1.5" fill="#E8B84B" opacity="0.5"/>
        <circle cx="35" cy="24.5" r="5" fill="#C9A227" opacity="0.15" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M33 24.5l1.5 1.5 2.5-2.5" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Calificación de Leads',
    title: 'Solo Habla con Quien Realmente Compra',
    subtitle: 'Tu filtro inteligente de oportunidades',
    description:
      'Nuestros agentes califican automáticamente a cada interesado: presupuesto, zona, tipo de propiedad y urgencia. Tu equipo deja de perder tiempo y se enfoca en los leads que sí cierran.',
    bullets: [
      'Preguntas de calificación automáticas por WhatsApp',
      'Clasificación de compradores, vendedores e inversores',
      'Score de cada lead según perfil y urgencia',
      'Alertas en tiempo real para leads de alta prioridad',
    ],
    accentColor: 'from-blue-500/10 to-transparent',
  },
  {
    id: 'visitas',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M8 12h32M8 20h24M8 28h28M8 36h20" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <circle cx="38" cy="34" r="7" fill="#C9A227" opacity="0.15" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M35.5 34l2 2 4-4" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Agendado de Visitas',
    title: 'Visitas Agendadas sin Intervención Humana',
    subtitle: 'Agenda llena, equipo libre',
    description:
      'El agente detecta el interés, verifica disponibilidad y confirma la visita directamente con el cliente — sin que ningún asesor tenga que intervenir. Recordatorios automáticos incluidos para reducir ausencias.',
    bullets: [
      'Agendado automático 24/7 desde WhatsApp e Instagram',
      'Sincronización con la agenda del asesor en tiempo real',
      'Recordatorios previos a la visita para reducir no-shows',
      'Seguimiento post-visita automatizado para avanzar el cierre',
    ],
    accentColor: 'from-purple-500/10 to-transparent',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-space-900">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold-500 mb-4">
            Nuestras soluciones
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Todo lo que tu inmobiliaria necesita,{' '}
            <span className="text-gold-gradient">orbitando en perfecta sincronía</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Tres soluciones de IA integradas que se complementan para transformar
            completamente la operación y crecimiento de tu inmobiliaria.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className={`reveal reveal-delay-${i + 1} glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group`}
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-bl ${feat.accentColor} pointer-events-none`} />

              {/* Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold-500 bg-gold-500/10 px-3 py-1.5 rounded-full border border-gold-500/20">
                  {feat.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6 relative z-10">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1 leading-snug relative z-10">
                {feat.title}
              </h3>
              <p className="text-gold-400 text-sm font-semibold mb-4 relative z-10">
                {feat.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-6 relative z-10">
                {feat.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-3 mt-auto relative z-10">
                {feat.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 12 12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5"/>
                      </svg>
                    </div>
                    <span className="text-white/65 text-sm leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
