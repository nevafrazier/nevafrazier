const courses = [
  'Programming Software Solutions',
  'Systems Analysis & Design',
  'Network & IT Infrastructures',
  'Database Management',
  'Audit & Cybersecurity Analytics',
  'Managing Security',
  'Global Blockchain & AI Applications',
  'Information Systems Project',
  'Global IS Ethics & Privacy',
  'Principles of Marketing',
  'Production & Operations Management',
  'Business Capstone Experience',
  'Strategic Management',
]

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-slate-800/40" style={{ background: '#0b1510' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>Academic Background</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-14">Education</h2>

        <div className="rounded-2xl p-8 border" style={{ background: '#0f1e14', borderColor: '#1a3326' }}>
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8 pb-8 border-b border-slate-800">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
              style={{ background: '#34d39915', border: '1px solid #34d39930' }}>
              🏔️
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-black text-xl">Appalachian State University</h3>
                  <p className="text-emerald-400 font-semibold mt-0.5">Bachelor of Science in Business Administration</p>
                  <p className="text-slate-400 text-sm mt-1">Major: Computer Information Systems – Cybersecurity</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-slate-400 text-sm font-medium">Boone, NC</div>
                  <div className="text-slate-600 text-xs mt-0.5">Graduated May 2026</div>
                  <div className="mt-2 text-sm font-black" style={{ color: '#6ee7b7' }}>Major GPA 3.61</div>
                  <div className="text-xs text-slate-500 mt-0.5">Overall GPA 3.31</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {courses.map(c => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full border font-medium text-slate-300"
                  style={{ borderColor: '#1a3326', background: '#0a160e' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
