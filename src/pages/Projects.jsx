import { useEffect, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A full-featured admin dashboard for managing products, orders, and analytics. Real-time charts, dark mode, and mobile-responsive layout.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    category: 'Web App',
    emoji: '🛍️',
    gradient: 'from-blue-900 to-primary-900',
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Generator',
    description: 'A no-code tool that lets developers build stunning portfolios in minutes. Features drag-and-drop sections, theme selection, and one-click deploy.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    category: 'SaaS',
    emoji: '✨',
    gradient: 'from-purple-900 to-accent-500/30',
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather PWA',
    description: 'A Progressive Web App delivering real-time weather updates with beautiful animated backgrounds that reflect current conditions.',
    tags: ['React', 'PWA', 'Weather API', 'CSS Animations'],
    category: 'PWA',
    emoji: '🌤️',
    gradient: 'from-sky-900 to-blue-900',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Chat Application',
    description: 'Real-time messaging platform with group chats, file sharing, emoji reactions, and end-to-end encryption.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'Web App',
    emoji: '💬',
    gradient: 'from-green-900 to-teal-900',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'UI Component Library',
    description: 'A comprehensive library of 50+ accessible React components with Storybook documentation, TypeScript support, and theming.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    category: 'Library',
    emoji: '📦',
    gradient: 'from-orange-900 to-yellow-900',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'A mobile-first food delivery interface with menu browsing, real-time order tracking, payment integration, and dark mode.',
    tags: ['React Native', 'Expo', 'Firebase', 'Stripe'],
    category: 'Mobile',
    emoji: '🍕',
    gradient: 'from-red-900 to-orange-900',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
]

const categories = ['All', 'Web App', 'SaaS', 'PWA', 'Library', 'Mobile']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filtered, setFiltered] = useState(projects)

  useEffect(() => {
    document.title = 'Projects | Khun Si Thu'
  }, [])

  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(projects)
    } else {
      setFiltered(projects.filter((p) => p.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="page-enter pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-400 font-medium text-sm uppercase tracking-widest mb-3">Portfolio</span>
          <h1 className="section-title text-4xl md:text-5xl">My Projects</h1>
          <p className="section-subtitle">
            A selection of projects I've built — from web apps to design systems and everything in between.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Project filters">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Card header image */}
              <div className={`h-48 rounded-xl mb-5 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                  {project.emoji}
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold rounded-lg">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute top-3 left-3 px-2.5 py-1 glass text-gray-200 text-xs font-medium rounded-lg border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h2 className="font-heading font-bold text-white text-xl mb-2 group-hover:text-primary-300 transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="btn-primary flex-1 justify-center text-sm py-2.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="btn-outline flex-1 justify-center text-sm py-2.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">No projects in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
