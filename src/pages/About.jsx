import React from 'react'
import Skillcard from '../components/Skillcard'
import ResumeIllustration from '../assets/svg/undraw_my-resume_etai.svg?url'

function About() {
  const timeline = [
    { year: '2024', title: 'Senior Developer', company: 'Tech Corp', description: 'Leading development of enterprise applications' },
    { year: '2022', title: 'Full Stack Developer', company: 'Startup Inc', description: 'Built scalable web applications from scratch' },
    { year: '2020', title: 'Frontend Developer', company: 'Digital Agency', description: 'Created stunning user interfaces for clients' },
    { year: '2018', title: 'Junior Developer', company: 'Software House', description: 'Started professional development career' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-illustration">
        <img src={ResumeIllustration} alt="Resume Illustration" className="section-illustration" />
      </div>
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">About Me</span>
          <span className="title-decoration"></span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="lead-text">
                Hello! I'm a passionate Full Stack Developer with over 5 years of experience 
                building web applications. I started my journey in software development during 
                college and have since worked on diverse projects ranging from small business 
                websites to enterprise-level applications.
              </p>
              <p>
                My approach to development focuses on writing clean, maintainable code and 
                creating intuitive user experiences. I believe in continuous learning and 
                staying updated with the latest technologies and best practices in the industry.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentoring.
              </p>
            </div>
            
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                </div>
                <span className="stat-number">15+</span>
                <span className="stat-label">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
