const groups = [
  {
    icon: '🤖',
    title: 'AI & Agentic Development',
    color: '#34d399',
    skills: ['Claude (Anthropic)', 'ChatGPT', 'Gemini', 'OpenClaw', 'Prompt Engineering', 'AI Automation'],
  },
  {
    icon: '💻',
    title: 'Programming & Data',
    color: '#10b981',
    skills: ['Python', 'SQL', 'MySQL', 'Excel (Advanced)', 'Google Sheets', 'Dashboard Building'],
  },
  {
    icon: '🔒',
    title: 'Networking & Cybersecurity',
    color: '#059669',
    skills: ['Wireshark', 'Cisco Packet Tracer', 'Linux', 'Cybersecurity Fundamentals', 'Network Analysis'],
  },
  {
    icon: '📊',
    title: 'Tools & Platforms',
    color: '#065f46',
    skills: ['Mixpanel', 'Metabase', 'Airtable', 'Tableau', 'Google Cloud', 'Dropbox'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/40" style={{ background: '#0b1510' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: '#34d399' }}>What I Work With</p>
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {groups.map(g => (
            <div key={g.title} className="rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: '#0f1e14', borderColor: '#1a3326', boxShadow: 'none' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 30px ${g.color}20`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <div className="text-3xl mb-3">{g.icon}</div>
              <h3 className="font-bold text-white text-sm mb-4 leading-snug">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                    style={{ borderColor: `${g.color}30`, background: `${g.color}10`, color: '#a7f3d0' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Business & Marketing — full width supplemental row */}
        <div className="rounded-2xl p-6 border" style={{ background: '#0f1e14', borderColor: '#1a3326' }}>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-2xl">📈</span>
              <h3 className="font-bold text-white text-sm">Business & Marketing</h3>
            </div>
            <div className="w-px h-5 bg-slate-700 hidden sm:block shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {['Inbound Marketing', 'HubSpot CRM', 'Marketing Analytics', 'Operations Reporting',
                'Campaign Asset Management', 'Cross-Team Communication', 'Stakeholder Presentations'].map(s => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                  style={{ borderColor: '#34d39930', background: '#34d39910', color: '#a7f3d0' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
