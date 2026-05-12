import GitHubIcon from './GitHubIcon'

const projects = [
  {
    title: 'Viglore',
    tagline: 'Market Intelligence Dashboard',
    description: 'Viglore is a full-stack market intelligence platform. Search any company, stock, or topic to get live VADER NLP sentiment scoring, real-time news aggregation, Wikipedia context, real-time stock data via Finnhub, and trader sentiment via Stocktwits. Features a trending searches feed backed by SQLite, 100-city tech hub rankings, and a full pytest test suite. Hardened with strict CSP, CORS lockdown, per-endpoint rate limiting, and input validation — rated A+ on Mozilla Observatory.',
    tags: ['React', 'FastAPI', 'Python', 'Tailwind', 'VADER NLP', 'Finnhub API', 'Stocktwits API', 'NewsAPI', 'Guardian API', 'Wikipedia API', 'CSP', 'Rate Limiting'],
    github: 'https://github.com/nevafrazier/viglore',
    live: 'https://viglore.com',
    accent: '#34d399',
    icon: '📡',
  },
  {
    title: 'Market Sentiment Analysis',
    tagline: 'SQL Analytics — Stocks, Sentiment & Cities',
    description: 'SQL analytics project built around the same domain as Viglore. Tracks stock prices, VADER-style sentiment scores, and news coverage across 22 companies and 25 cities over 2,600+ rows of time series data. Answers 12 real business questions using CTEs, window functions (LAG, NTILE, RANK, rolling averages), correlated subqueries, and UNION analysis.',
    tags: ['MySQL', 'SQL', 'Window Functions', 'CTEs', 'Time Series', 'Market Data', 'Sentiment Analysis'],
    github: 'https://github.com/nevafrazier/market-sentiment-sql',
    accent: '#34d399',
    icon: '📈',
  },
  {
    title: "Neva's Agent",
    tagline: 'Personal AI Assistant',
    description: 'A full-stack personal AI agent with a React frontend and Python backend. Streams responses in real time via Server-Sent Events, runs an agentic tool-use loop, and controls a real browser via Playwright. Features: persistent memory across sessions, Gmail email with preview-before-send, Amazon cart automation, web search, Python execution, file system access, and Mac app control.',
    tags: ['React', 'FastAPI', 'Python', 'Playwright', 'Groq', 'SSE', 'Browser Automation'],
    github: 'https://github.com/nevafrazier/personal-agent',
    building: true,
    accent: '#34d399',
    icon: '🤖',
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
                  {p.building && (
                    <span className="text-xs px-3 py-1 rounded-full font-semibold border"
                      style={{ borderColor: '#f59e0b50', background: '#f59e0b10', color: '#fcd34d' }}>
                      Actively Building
                    </span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="text-xs px-3 py-1 rounded-full font-semibold border transition-all duration-200 hover:bg-emerald-500/10"
                      style={{ borderColor: '#34d399', color: '#6ee7b7' }}>
                      Live →
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="text-slate-500 hover:text-white transition-colors">
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-black text-xl">{p.title}</h3>
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
