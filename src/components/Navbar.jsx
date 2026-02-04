import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ isScrolled }) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="nav-brand">
        <span className="brand-text">Portfolio</span>
        <span className="brand-dot">.</span>
      </NavLink>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => isActive ? 'active' : ''}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
