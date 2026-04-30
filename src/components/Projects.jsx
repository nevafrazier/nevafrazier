const projects = [
  {
    title: 'SignalScope',
    tagline: 'Market Intelligence Dashboard',
    wip: true,
    description: 'Full-stack Bloomberg-style analytics platform. Search any company, game, or topic to see live VADER sentiment analysis, Reddit + news aggregation, Wikipedia context cards with awards/achievements, stock prices via Alpha Vantage, and city tech rankings across 25 US metros.',
    tags: ['React', 'FastAPI', 'Python', 'Tailwind', 'VADER NLP', 'Alpha Vantage API'],
    github: 'https://github.com/nevafrazier/signalscope',
    live: 'https://signalscope-six.vercel.app',
    accent: '#34d399',
    icon: '📡',
  },
  {
    title: 'Shipping Status Agent',
    tagline: 'AI-Powered Automation Tool',
    description: 'Python/Playwright automation agent built for daily operations at Willow Health. Autonomously retrieves FedEx tracking links, populates shipment statuses, and calculates days-in-transit across Excel and Google Sheets — eliminating a fully manual workflow and saving 35 minutes per day.',
    tags: ['Python', 'Playwright', 'Google Sheets API', 'Excel', 'Automation'],
    github: 'https://github.com/nevafrazier/shipping-status-agent',
    accent: '#10b981',
    icon: '📦',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/40" style={{ background: '#0b1510' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>What I've Built</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-14">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title}
              className="rounded-2xl p-7 border flex flex-col transition-all duration-300 hover:scale-[1.01]"
              style={{ background: '#0f1e14', borderColor: '#1a3326' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${p.accent}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a3326'}>

              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{p.icon}</div>
                <div className="flex items-center gap-3">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-xs px-3 py-1 rounded-full font-semibold border transition-all duration-200 hover:bg-emerald-500/10"
                      style={{ borderColor: '#34d399', color: '#6ee7b7' }}>
                      Live →
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="text-slate-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-black text-xl">{p.title}</h3>
                {p.wip && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: '#78716c20', color: '#a8a29e', border: '1px solid #78716c40' }}>
                    In Progress
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold mb-3" style={{ color: p.accent }}>{p.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                    style={{ borderColor: `${p.accent}30`, background: `${p.accent}10`, color: '#a7f3d0' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          More projects coming soon · <a href="https://github.com/nevafrazier" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">See GitHub →</a>
        </p>
      </div>
    </section>
  )
}
