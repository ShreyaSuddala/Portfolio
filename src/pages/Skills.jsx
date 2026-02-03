import React from 'react'
import Skillcard from '../components/Skillcard'
import BrowsingIllustration from '../assets/svg/undraw_browsing_z5g5.svg?url'

function Skills() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'], 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      )
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Python', 'Express', 'Django'], 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      )
    },
    { 
      category: 'Database', 
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'], 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    { 
      category: 'DevOps', 
      items: ['Docker', 'AWS', 'Git', 'CI/CD'], 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-illustration">
        <img src={BrowsingIllustration} alt="Browsing Illustration" className="section-illustration" />
      </div>
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Skills & Technologies</span>
          <span className="title-decoration"></span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Skillcard key={skill.category} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
