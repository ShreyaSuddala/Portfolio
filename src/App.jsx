import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import GlassBackground from './components/GlassBackground'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="app" style={{
      '--mouse-x': mousePosition.x,
      '--mouse-y': mousePosition.y
    }}>
      {/* Glassy Animated Background */}
      <GlassBackground />
      
      {/* Custom Cursor Glow */}
      <div className="cursor-glow"></div>
      
      {/* Scan Lines Effect (optional) */}
      <div className="scanlines"></div>

      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
