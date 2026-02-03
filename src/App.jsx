import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GlassBackground from './components/GlassBackground'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
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

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
      <Navbar 
        activeSection={activeSection} 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <Home scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
