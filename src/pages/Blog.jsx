import { useEffect, useState } from 'react'

const posts = [
  {
    id: 1,
    title: 'Mastering React Performance: Techniques Every Developer Should Know',
    excerpt: 'Explore advanced optimization strategies — from useMemo and useCallback to code splitting, lazy loading, and virtualization that drastically improve your app\'s performance.',
    date: 'October 12, 2026',
    readTime: '8 min read',
    category: 'React',
    emoji: '⚛️',
    gradient: 'from-blue-600 to-primary-600',
    tags: ['React', 'Performance', 'Hooks'],
  },
  {
    id: 2,
    title: 'The Complete Guide to Tailwind CSS v4: What\'s New and How to Migrate',
    excerpt: 'Tailwind CSS v4 brings a complete rewrite with lightning-fast builds, a new CSS-first configuration system, and many new utilities. Here\'s everything you need to know.',
    date: 'September 28, 2026',
    readTime: '12 min read',
    category: 'CSS',
    emoji: '🎨',
    gradient: 'from-teal-600 to-cyan-600',
    tags: ['Tailwind CSS', 'CSS', 'Frontend'],
  },
  {
    id: 3,
    title: 'Building Accessible UI Components: A Practical ARIA Guide',
    excerpt: 'Accessibility is not optional. Learn how to build truly inclusive components using ARIA roles, keyboard navigation, focus management, and semantic HTML.',
    date: 'September 10, 2026',
    readTime: '10 min read',
    category: 'Accessibility',
    emoji: '♿',
    gradient: 'from-green-600 to-emerald-600',
    tags: ['Accessibility', 'HTML', 'ARIA'],
  },
  {
    id: 4,
    title: 'TypeScript Tips That Will Level Up Your Development Game',
    excerpt: 'From advanced type utilities to discriminated unions and conditional types — these TypeScript patterns will make your codebase much more robust and maintainable.',
    date: 'August 22, 2026',
    readTime: '7 min read',
    category: 'TypeScript',
    emoji: '🔷',
    gradient: 'from-blue-700 to-indigo-700',
    tags: ['TypeScript', 'JavaScript', 'Types'],
  },
  {
    id: 5,
    title: 'Designing with Glassmorphism: A Step-by-Step Visual Guide',
    excerpt: 'Glassmorphism is one of the most captivating design trends. Learn how to implement realistic frosted glass effects with CSS backdrop-filter and box-shadow.',
    date: 'August 5, 2026',
    readTime: '6 min read',
    category: 'Design',
    emoji: '🪟',
    gradient: 'from-purple-700 to-pink-700',
    tags: ['Design', 'CSS', 'UI/UX'],
  },
  {
    id: 6,
    title: 'From Zero to Deployed: Building a Full-Stack App with Next.js',
    excerpt: 'A comprehensive walkthrough of building a production-ready full-stack application using Next.js 15, Prisma, PostgreSQL, and deploying to Vercel.',
    date: 'July 20, 2026',
    readTime: '15 min read',
    category: 'Next.js',
    emoji: '🚀',
    gradient: 'from-gray-700 to-slate-700',
    tags: ['Next.js', 'Full-Stack', 'Deployment'],
  },
]

const categoryColors = {
  'React': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'CSS': 'text-teal-400 bg-teal-400/10 border-teal-400/20',
  'Accessibility': 'text-green-400 bg-green-400/10 border-green-400/20',
  'TypeScript': 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  'Design': 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  'Next.js': 'text-gray-300 bg-gray-300/10 border-gray-300/20',
}

export default function Blog() {
  const [featured, ...rest] = posts

  useEffect(() => {
    document.title = 'Blog | Khun Si Thu'
  }, [])

  return (
    <div className="page-enter pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-400 font-medium text-sm uppercase tracking-widest mb-3">Articles & Tutorials</span>
          <h1 className="section-title text-4xl md:text-5xl">Blog</h1>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights on frontend development, design, and the ever-evolving web ecosystem.
          </p>
        </div>

        {/* Featured Post */}
        <article className="relative group glass rounded-3xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 mb-10 cursor-pointer">
          <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
          <div className="relative p-8 sm:p-10 grid sm:grid-cols-3 gap-8 items-center">
            <div className="sm:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-lg border ${categoryColors[featured.category] || 'text-primary-400 bg-primary-400/10 border-primary-400/20'}`}>
                  {featured.category}
                </span>
                <span className="px-2.5 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold rounded-lg">
                  ⭐ Featured
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {featured.readTime}
                </span>
              </div>
              <button className="btn-primary text-sm px-5 py-2.5 w-fit">
                Read Article →
              </button>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${featured.gradient} flex items-center justify-center text-7xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                {featured.emoji}
              </div>
            </div>
          </div>
        </article>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article
              key={post.id}
              className="card group flex flex-col cursor-pointer"
            >
              {/* Post header */}
              <div className={`h-40 rounded-xl mb-5 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500">
                  {post.emoji}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${categoryColors[post.category] || 'text-primary-400 bg-primary-400/10 border-primary-400/20'}`}>
                  {post.category}
                </span>
              </div>

              <h2 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-primary-300 transition-colors duration-200 flex-shrink-0">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-gray-500 text-xs border-t border-white/5 pt-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
