import React from 'react'

function Navbar({ activeSection, isScrolled, scrollToSection }) {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <span className="brand-text">Portfolio</span>
        <span className="brand-dot">.</span>
      </div>
      <ul className="nav-links">
        {navItems.map((section) => (
          <li key={section}>
            <a 
              href={`#${section}`} 
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection(section) }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
