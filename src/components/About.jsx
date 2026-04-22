export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-14 items-start">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>About Me</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Data-driven builder with a<br />
            <span style={{ color: '#34d399' }}>cybersecurity mindset</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm a Computer Information Systems and Cybersecurity student at Appalachian State University,
            graduating May 2026. I specialize in turning messy data into clean insights — and building
            AI tools that automate the work in between.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Currently a Data Analytics Intern at Willow Health Services, where I've built dashboards,
            automated reporting pipelines, and developed an AI agent that saves the team 35 minutes
            every day. My Business Administration background also gives me experience in marketing
            operations, cross-team communication, and presenting data to non-technical stakeholders.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'AI Agents', 'Data Analytics', 'Cybersecurity', 'Marketing Ops'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full border font-medium"
                  style={{ borderColor: '#34d39930', background: '#34d39910', color: '#a7f3d0' }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="/resume.pdf" download="Neva_Frazier_Resume.pdf"
              className="flex items-center gap-2 text-xs px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:bg-emerald-500/10 ml-auto shrink-0"
              style={{ borderColor: '#34d399', color: '#6ee7b7' }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Single highlight card */}
        <div className="shrink-0 w-full md:w-64">
          <div className="rounded-2xl p-6 border text-center"
            style={{ background: '#0f1e14', borderColor: '#1a3326' }}>
            <div className="text-4xl mb-3">🎓</div>
            <div className="text-white font-black text-lg mb-1">App State</div>
            <div className="text-emerald-400 text-sm font-semibold mb-3">CIS – Cybersecurity</div>
            <div className="border-t border-slate-800 pt-3 mt-3">
              <div className="text-slate-500 text-xs mb-1">Graduating</div>
              <div className="text-white font-bold">May 2026</div>
            </div>
            <div className="border-t border-slate-800 pt-3 mt-3">
              <div className="text-slate-500 text-xs mb-1">Certifications</div>
              <div className="text-emerald-400 font-bold text-lg">5+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
