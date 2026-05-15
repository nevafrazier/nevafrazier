const jobs = [
  {
    company: 'Willow Health Services Inc.',
    url: 'https://startwillow.com',
    role: 'Operational Data Analytics Intern',
    period: 'Jan 2026 – Present',
    type: 'Remote',
    accent: '#34d399',
    badge: 'Current',
    bullets: [
      'Identified and eliminated a fully manual daily tracking workflow, designing an automation solution that saved the operations team 45 minutes per day and reduced human error.',
      'Built an automated order status reporting tool that processes weekly Excel shipping reports across multiple cohorts, auto-generating a formatted summary with delivery rates and percentages — saving 25 minutes per day.',
      'Analyzed fulfillment data across Mixpanel and Metabase, surfacing shipping trends that directly informed the escalation of 500+ delayed packages and improved operational visibility.',
      'Owned 3+ recurring stakeholder reports weekly, consolidating data from multiple sources into dashboards and Google Sheets reports adopted team-wide for daily decision-making.',
      'Built a daily cohort report visualizing order status trends and performance percentages over time, presented to operations and leadership for consistent data-driven oversight.',
      'Maintained a daily cancelled order tracking report consolidating data from Airtable and Willow Admin, surfacing exceptions and enabling faster cross-team issue resolution.',
      'Standardized and organized 50+ marketing assets monthly across Airtable and Dropbox, improving naming conventions and routing efficiency across the team.',
    ],
  },
  {
    company: 'Starbucks',
    role: 'Barista',
    period: 'Dec 2022 – May 2026',
    type: 'Winston-Salem, NC',
    accent: '#10b981',
    badge: null,
    bullets: [
      'Delivered consistent customer service across hundreds of daily interactions in a high-volume environment.',
      'Trained new team members on drink preparation and POS systems — building communication and leadership skills.',
    ],
  },
  {
    company: 'Ketchie Creek Bakery',
    role: 'Team Member',
    period: 'Jul 2019 – Jul 2022',
    type: 'Clemmons, NC',
    accent: '#059669',
    badge: null,
    bullets: [
      'Designed promotional materials and in-store displays to drive customer engagement.',
      'Prepared food and beverages efficiently while maintaining quality and a welcoming environment.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>Where I've Worked</p>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-14">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, #34d399, #065f46, transparent)' }} />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="md:pl-10 relative">
              {/* Dot */}
              <div className="absolute left-0 top-3 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block"
                style={{ background: job.accent, boxShadow: `0 0 10px ${job.accent}` }} />

              <div className="rounded-2xl p-6 border transition-colors duration-200 hover:border-emerald-500/30"
                style={{ background: '#0f1e14', borderColor: '#1a3326' }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-white text-lg">{job.company}</h3>
                      {job.badge && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                          style={{ background: '#34d39920', color: '#6ee7b7', border: '1px solid #34d39940' }}>
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-semibold mt-0.5" style={{ color: job.accent }}>{job.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-slate-400 text-sm font-medium">{job.period}</div>
                    <div className="text-slate-600 text-xs mt-0.5">{job.type}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: job.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
