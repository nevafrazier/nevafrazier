export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden border"
        style={{ background: '#0f1e14', borderColor: '#1a3326' }}>

        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.15) 0%, transparent 65%)' }} />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>Let's Connect</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Open to Opportunities</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
            I'm actively looking for internships and full-time roles in data analytics, AI development,
            or cybersecurity. If you think we'd be a good fit, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:nevacfrazier03@gmail.com"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #059669, #34d399)', boxShadow: '0 0 20px rgba(52,211,153,0.3)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              nevacfrazier03@gmail.com
            </a>
            <a href="https://linkedin.com/in/nevafrazier" target="_blank" rel="noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm border transition-all duration-200 hover:bg-slate-800"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/nevafrazier" target="_blank" rel="noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm border transition-all duration-200 hover:bg-slate-800"
              style={{ borderColor: '#334155', color: '#94a3b8' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="flex justify-center gap-2 text-slate-700 text-sm">
            <span>(336)-251-7817</span>
            <span>·</span>
            <span>Winston-Salem, NC · Open to Relocation</span>
            <span>·</span>
            <span>Available Immediately</span>
          </div>
        </div>
      </div>
    </section>
  )
}
