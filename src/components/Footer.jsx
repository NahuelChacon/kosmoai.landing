export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-space-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <img src="/logo.svg" alt="KOSMO" className="h-9 w-auto opacity-80" />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Inteligencia artificial diseñada para transformar la gestión y crecimiento
              de clínicas dentales en Latinoamérica.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Soluciones
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Agentes IA de Atención',
                'Páginas Web que Convierten',
                'CRM a Medida',
                'Automatización de Procesos',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/35 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:nahuel.kosmoai@gmail.com"
                  className="text-white/35 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  nahuel.kosmoai@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5438736593222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  +54 387 365-9322
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nahuelc.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @nahuelc.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {year} KOSMO. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Hecho con</span>
            <svg className="w-3.5 h-3.5 text-gold-500/60" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span>para el futuro de la odontología</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
