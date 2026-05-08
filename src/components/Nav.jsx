import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Education', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // show background once the user scrolls past the hero
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060a07]/95 backdrop-blur border-b border-[#1a3326]/60 shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-lg tracking-tight">
          Neva<span style={{ color: '#34d399' }}>Frazier</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              {l}
            </a>
          ))}
          <a href="#contact"
            className="text-sm font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 hover:bg-emerald-500/10"
            style={{ borderColor: '#34d399', color: '#6ee7b7' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080f08] border-t border-slate-800 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-1 text-sm transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
