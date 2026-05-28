import { useEffect, useState } from 'react'
import GitHubIcon from './GitHubIcon'

const titles = [
  'Product Analyst',
  'AI & Automation Builder',
  'CIS + Cybersecurity Graduate',
  'Digital Product Developer',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  // types forward, pauses, deletes, then moves to the next title
  useEffect(() => {
    const target = titles[titleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.08) 0%, transparent 70%), linear-gradient(rgba(52,211,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.04) 1px, transparent 1px)',
          backgroundSize: 'cover, 60px 60px, 60px 60px',
        }} />
      {/* Purple glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-14">
        {/* Text side */}
        <div className="flex-1 text-left">
          <div className="fade-up flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium tracking-widest uppercase">Available for opportunities</span>
          </div>

          <h1 className="fade-up delay-1 text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Hi, I'm <span style={{ color: '#6ee7b7' }}>Neva</span>
          </h1>

          <div className="fade-up delay-2 text-xl md:text-2xl font-semibold mb-6 h-8" style={{ color: '#34d399' }}>
            {displayed}<span className="cursor" style={{ color: '#6ee7b7' }}>|</span>
          </div>

          <p className="fade-up delay-3 text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            CIS + Cybersecurity graduate from App State. Product analyst with hands-on experience
            in requirements gathering, KPI monitoring, and cross-functional delivery. Currently
            supporting a healthcare startup owning reporting tools used daily by leadership and
            shipping AI automation that saves the team 70 minutes every day. Also the solo builder
            behind Viglore, a live financial market intelligence platform.
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-3">
            <a href="#projects"
              className="px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #059669, #34d399)', boxShadow: '0 0 20px rgba(52,211,153,0.3)' }}>
              View My Work
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-xl font-bold text-sm border transition-all duration-200 hover:bg-slate-800"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              Get In Touch
            </a>
            <a href="/resume.pdf" download="Neva_Frazier_Resume.pdf"
              className="px-6 py-3 rounded-xl font-bold text-sm border transition-all duration-200 hover:bg-slate-800 flex items-center gap-2"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
            <a href="https://github.com/nevafrazier" target="_blank" rel="noreferrer"
              className="px-4 py-3 rounded-xl border transition-all duration-200 hover:bg-slate-800"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/nevafrazier/" target="_blank" rel="noreferrer"
              className="px-4 py-3 rounded-xl border transition-all duration-200 hover:bg-slate-800"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Photo side */}
        <div className="fade-up delay-3 shrink-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-2xl glow" style={{ background: 'linear-gradient(135deg, #059669, #065f46)', padding: '3px' }}>
              <div className="w-full h-full rounded-2xl" style={{ background: '#060a07' }} />
            </div>
            <img src="/headshot.png" alt="Neva Frazier"
              className="absolute inset-0.5 w-[calc(100%-4px)] h-[calc(100%-4px)] object-cover rounded-2xl" />
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-[#0f1e14] border border-emerald-500/40 rounded-xl px-3 py-2 text-xs font-semibold text-emerald-300 shadow-xl">
              App State '26 ✦
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
