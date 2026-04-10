import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-900/90 backdrop-blur-xl border-b border-gold-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.svg"
            alt="KOSMO"
            className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(201,162,39,0.6)]"
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: 'Soluciones', id: 'features' },
            { label: 'Resultados', id: 'stats' },
            { label: 'Testimonios', id: 'testimonials' },
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-white/60 hover:text-gold-400 transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo('cta')}
            className="btn-gold px-5 py-2.5 text-sm font-bold"
          >
            <span>Consultoría Gratuita</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-space-800/95 backdrop-blur-xl border-b border-gold-500/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {[
            { label: 'Soluciones', id: 'features' },
            { label: 'Resultados', id: 'stats' },
            { label: 'Testimonios', id: 'testimonials' },
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="text-white/70 hover:text-gold-400 font-medium text-sm transition-colors duration-200"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('cta')}
              className="btn-gold w-full py-3 text-sm font-bold text-center"
            >
              <span>Consultoría Gratuita</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
