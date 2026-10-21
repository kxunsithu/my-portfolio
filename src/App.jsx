import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen theme-bg bg-grid relative overflow-x-hidden transition-colors duration-300">
      {/* Global background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary-600 top-0 -left-64 animate-float" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-accent-500 top-[30%] -right-48 animate-float" style={{ animationDelay: '2s' }} />
      <div className="orb w-[300px] h-[300px] bg-primary-400 bottom-0 left-1/2 animate-float" style={{ animationDelay: '4s' }} />

      <Navbar scrolled={scrolled} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
