const certs = [
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google · Coursera',
    year: 'Nov 2025',
    logo: 'https://logo.clearbit.com/google.com',
    image: '/certs/google-cyber.jpg',
    link: '/certs/google-cyber.jpg',
  },
  {
    name: 'Google AI Essentials Certificate',
    issuer: 'Google · Coursera',
    year: '2025',
    logo: 'https://logo.clearbit.com/google.com',
    image: null,
    link: '/certs/google-ai.pdf',
  },
  {
    name: 'Mixpanel Partner Fundamentals',
    issuer: 'Mixpanel',
    year: '2026',
    logo: 'https://logo.clearbit.com/mixpanel.com',
    image: null,
    link: null,
  },
  {
    name: 'Inbound Marketing Certification',
    issuer: 'HubSpot Academy',
    year: 'Nov 2024',
    logo: 'https://logo.clearbit.com/hubspot.com',
    image: '/certs/hubspot-inbound.jpg',
    link: '/certs/hubspot-inbound.jpg',
  },
  {
    name: 'Advanced Excel Badge',
    issuer: 'Cengage',
    year: 'Mar 2024',
    logo: 'https://logo.clearbit.com/cengage.com',
    image: '/certs/excel-badge.png',
    link: '/certs/excel-badge.png',
  },
  {
    name: 'Cybersecurity Threat Landscape',
    issuer: 'LinkedIn Learning',
    year: '2025',
    logo: 'https://logo.clearbit.com/linkedin.com',
    image: null,
    link: '/certs/linkedin-cyber.pdf',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-6">
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>Credentials</p>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-14">Certifications</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.name}
            className="rounded-2xl border flex flex-col overflow-hidden transition-all duration-200 hover:border-emerald-500/30"
            style={{ background: '#0f1e14', borderColor: '#1a3326' }}>

            {/* Top: logo + name */}
            <div className="flex items-center gap-3 p-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                style={{ background: '#0a160e', border: '1px solid #1a3326' }}>
                <img
                  src={c.logo}
                  alt={c.issuer}
                  className="w-6 h-6 object-contain"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                <span style={{ display: 'none' }} className="text-lg items-center justify-center w-full h-full">🏅</span>
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-snug">{c.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#34d399' }}>{c.issuer}</p>
                <p className="text-slate-600 text-xs mt-0.5">{c.year}</p>
              </div>
            </div>

            {/* Certificate thumbnail */}
            {c.image ? (
              <a href={c.link} target="_blank" rel="noreferrer" className="mx-5 mb-5 block group relative overflow-hidden rounded-lg border border-slate-800 shrink-0" style={{ height: '80px' }}>
                <img src={c.image} alt={`${c.name} certificate`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'rgba(0,0,0,0.55)' }}>
                  <span className="text-white text-xs font-semibold">View Certificate →</span>
                </div>
              </a>
            ) : c.link ? (
              <a href={c.link} target="_blank" rel="noreferrer"
                className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-lg border text-xs font-medium text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors py-3"
                style={{ borderColor: '#1a3326', height: '48px' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Certificate
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
