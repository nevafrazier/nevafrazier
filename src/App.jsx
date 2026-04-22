import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#060a07', color: '#e2e8f0' }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <footer className="text-center py-8 text-slate-600 text-sm border-t border-slate-800/50">
        © 2026 Neva Frazier · Built with React
      </footer>
    </div>
  )
}
