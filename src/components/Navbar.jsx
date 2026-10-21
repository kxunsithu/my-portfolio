import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

function SunIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Scrolled header style adapts per theme */
  const scrolledClass = scrolled
    ? isDark
      ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
      : 'bg-white/80 backdrop-blur-xl border-b border-primary-500/10 shadow-lg shadow-primary-500/5'
    : 'bg-transparent'

  /* Hamburger bar color */
  const barColor = isDark ? 'bg-white' : 'bg-gray-700'

  /* Mobile overlay color */
  const overlayBg = isDark
    ? 'bg-dark-900/95 backdrop-blur-xl'
    : 'bg-white/97 backdrop-blur-xl'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolledClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-heading font-black text-white text-lg shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/60 transition-all duration-300 group-hover:scale-110">
            K
          </div>
          <span
            className="font-heading font-bold text-lg hidden sm:block transition-colors duration-300"
            style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}
          >
            Khun Si Thu
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* ── Theme Toggle ── */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
            style={{
              background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(108,99,255,0.08)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(108,99,255,0.2)',
              color: isDark ? '#94a3b8' : '#4f46e5',
            }}
          >
            {/* animated icon swap */}
            <span
              className="absolute inset-0 flex items-center justify-center transition-all duration-300"
              style={{ opacity: isDark ? 1 : 0, transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)' }}
            >
              <SunIcon />
            </span>
            <span
              className="absolute inset-0 flex items-center justify-center transition-all duration-300"
              style={{ opacity: isDark ? 0 : 1, transform: isDark ? '-rotate-90 scale-0' : 'rotate(0deg) scale(1)' }}
            >
              <MoonIcon />
            </span>
          </button>

          {/* Hire Me CTA */}
          <NavLink to="/contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
            Hire Me
          </NavLink>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all duration-200"
            style={{ background: menuOpen ? 'rgba(108,99,255,0.1)' : 'transparent' }}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 ${barColor} rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 ${barColor} rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-5 h-0.5 ${barColor} rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 ${overlayBg} z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navItems.map((item, idx) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-2xl font-heading font-semibold transition-all duration-300 hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : isDark ? 'text-gray-300' : 'text-gray-600'
                }`
              }
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary mt-4 text-base">
            Hire Me ✨
          </NavLink>

          {/* Theme toggle in mobile menu too */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
            style={{
              color: isDark ? '#94a3b8' : '#4b5563',
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(108,99,255,0.07)',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(108,99,255,0.15)',
            }}
          >
            {isDark ? <><SunIcon /> Switch to Light Mode</> : <><MoonIcon /> Switch to Dark Mode</>}
          </button>
        </div>
      </div>
    </header>
  )
}
