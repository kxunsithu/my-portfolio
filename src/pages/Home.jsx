import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { icon: '⚛️', name: 'React.js' },
  { icon: '🎨', name: 'Tailwind CSS' },
  { icon: '📜', name: 'JavaScript' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🌐', name: 'HTML/CSS' },
  { icon: '🎭', name: 'Figma & UI/UX' },
  { icon: '🚀', name: 'Next.js' },
  { icon: '🗄️', name: 'Node.js' },
]

const stats = [
  { value: '15+', label: 'Projects Done' },
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5★', label: 'Average Rating' },
]

function TypedText({ strings }) {
  const [text, setText] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setStrIndex((s) => (s + 1) % strings.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? 60 : 90)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, strIndex, strings])

  return (
    <span className="gradient-text font-heading">
      {text}
      <span className="animate-pulse text-primary-400">|</span>
    </span>
  )
}

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = 'Khun Si Thu | Frontend Developer'
  }, [])

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 pt-16"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text text-glow block">Khun Si Thu</span>
            </h1>

            <div className="text-2xl sm:text-3xl font-heading font-semibold text-gray-300 mb-6 h-10">
              <TypedText strings={[
                'Frontend Developer',
                'UI/UX Designer',
                'React Specialist',
                'Creative Coder',
              ]} />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I craft beautiful, fast, and user-friendly digital experiences using modern technologies.
              Passionate about clean code, pixel-perfect design, and creating things that matter.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="btn-primary text-base px-7 py-3.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-7-7m7 7l-7 7" />
                </svg>
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline text-base px-7 py-3.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-heading font-black gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Avatar / Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-3xl opacity-20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 scale-125 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 rounded-full border border-accent-500/10 scale-150 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

              {/* Avatar */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary-500/30 animate-float shadow-2xl shadow-primary-500/20">
                <img
                  src="/profile.png"
                  alt="Khun Si Thu – Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* subtle overlay to blend with dark theme */}
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-primary-500/20" />
              </div>

              {/* Floating skill cards */}
              <div className="absolute -left-8 top-16 glass rounded-xl px-3 py-2 text-sm font-medium text-white border border-primary-500/30 animate-float" style={{ animationDelay: '1s' }}>
                ⚛️ React Expert
              </div>
              <div className="absolute -right-6 bottom-16 glass rounded-xl px-3 py-2 text-sm font-medium text-white border border-accent-500/30 animate-float" style={{ animationDelay: '2s' }}>
                🎨 UI/UX Pro
              </div>
              <div className="absolute -bottom-4 left-12 glass rounded-xl px-3 py-2 text-sm font-medium text-white border border-green-500/30 animate-float" style={{ animationDelay: '3s' }}>
                🚀 Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
          <span>Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" aria-label="Skills highlights">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">What I Work With</h2>
            <p className="section-subtitle">
              A curated stack of modern tools & technologies I use to build exceptional products.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="card flex items-center gap-3 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" aria-label="Call to action">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-10 sm:p-16 text-center overflow-hidden border border-primary-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-accent-500/10 rounded-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mb-4">
                Let's Build Something{' '}
                <span className="gradient-text">Amazing Together</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's talk and turn your vision into reality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                  Start a Conversation 💬
                </Link>
                <Link to="/projects" className="btn-outline text-base px-8 py-3.5">
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
