import { useEffect } from 'react'

const skills = {
  'Frontend': ['React.js', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
  'Styling': ['Tailwind CSS', 'SCSS/Sass', 'Styled Components', 'Framer Motion', 'CSS Animations'],
  'UI/UX': ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'],
  'Backend & Tools': ['Node.js', 'REST APIs', 'Git & GitHub', 'Vite', 'Webpack', 'VS Code'],
}

const timeline = [
  {
    year: '2024 - Present',
    role: 'Senior Frontend Developer',
    company: 'Freelance & Remote',
    description: 'Building modern web applications for international clients, specializing in React ecosystems and performance optimization.',
    type: 'work',
  },
  {
    year: '2022 - 2024',
    role: 'Frontend Developer',
    company: 'Tech Startup, Yangon',
    description: 'Led UI development for a SaaS platform serving 10,000+ users. Redesigned the entire dashboard using React and Tailwind CSS.',
    type: 'work',
  },
  {
    year: '2021 - 2022',
    role: 'Junior Web Developer',
    company: 'Digital Agency, Mandalay',
    description: 'Developed responsive websites for local businesses. Mastered core web technologies and modern design principles.',
    type: 'work',
  },
  {
    year: '2017 - 2021',
    role: 'B.Sc. Computer Science',
    company: 'University of Computer Studies, Mandalay',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies.',
    type: 'education',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About | Khun Si Thu'
  }, [])

  return (
    <div className="page-enter pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-400 font-medium text-sm uppercase tracking-widest mb-3">Get to know me</span>
          <h1 className="section-title text-4xl md:text-5xl">About Me</h1>
          <p className="section-subtitle">
            Passionate developer on a mission to craft meaningful digital experiences.
          </p>
        </div>

        {/* Bio + Avatar */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20 items-center">
          {/* Avatar */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-primary-500/30 shadow-2xl shadow-primary-500/10 relative">
                <img
                  src="/profile.png"
                  alt="Khun Si Thu – Frontend Developer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent px-4 py-4">
                  <div className="font-heading font-bold text-white text-base">Khun Si Thu</div>
                  <div className="text-primary-400 text-sm">Frontend Developer</div>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-2xl opacity-10 blur-xl" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-2xl font-heading font-bold text-white">
              Hello! I'm <span className="gradient-text">Khun Si Thu</span> 👋
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate <strong className="text-white">Frontend Developer & UI/UX Designer</strong> based in Myanmar, with over 3 years of experience building modern, responsive web applications. I specialize in transforming ideas into pixel-perfect, high-performance digital products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech began with a love for creating things that look beautiful and work flawlessly. I thrive at the intersection of design and engineering — where aesthetics meet functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring design trends, contributing to open-source projects, or creating tech content on YouTube. I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:khunsithuaung65@gmail.com"
                className="btn-primary text-sm px-5 py-2.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="tel:09944074981"
                className="btn-outline text-sm px-5 py-2.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-20" aria-label="Skills">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl">Skills & Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card">
                <h3 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section aria-label="Experience and education timeline">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl">Experience & Education</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-500 bg-dark-800 z-10 mt-6 shadow-lg shadow-primary-500/30" />

                  {/* Card */}
                  <div
                    className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'
                    }`}
                  >
                    <div className="card">
                      <div className={`flex items-start gap-3 mb-3 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                          item.type === 'work'
                            ? 'bg-primary-500/15 text-primary-400 border border-primary-500/25'
                            : 'bg-accent-500/15 text-accent-400 border border-accent-500/25'
                        }`}>
                          {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                        </span>
                        <span className="text-gray-500 text-xs font-mono">{item.year}</span>
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-0.5">{item.role}</h3>
                      <p className="text-primary-400 text-sm font-medium mb-2">{item.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
