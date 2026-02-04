import React, { useEffect, useRef } from 'react'
import ResumeIllustration from '../assets/svg/undraw_my-resume_etai.svg?url'

function About() {
  const countersRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const targetValue = parseInt(counter.getAttribute('data-target'))
          const duration = 2000 // 2 seconds
          const increment = targetValue / (duration / 16)
          let currentValue = 0

          const timer = setInterval(() => {
            currentValue += increment
            if (currentValue >= targetValue) {
              counter.textContent = targetValue
              clearInterval(timer)
            } else {
              counter.textContent = Math.floor(currentValue)
            }
          }, 16)
        }
      })
    }, { threshold: 0.5 })

    const validElements = countersRef.current.filter(el => el instanceof Element)
    validElements.forEach(counter => {
      observer.observe(counter)
    })

    return () => {
      validElements.forEach(counter => {
        observer.unobserve(counter)
      })
    }
  }, [])

  const timelineEvents = [
    {
      year: '2020',
      title: 'Web Developer Intern',
      company: 'Tech Solutions Inc.',
      description: 'Developed responsive web applications using HTML, CSS, and JavaScript. Assisted in building client portals and internal tools.'
    },
    {
      year: '2021',
      title: 'Junior Frontend Developer',
      company: 'Digital Agency',
      description: 'Created modern React applications with complex state management. Implemented responsive designs for various client projects.'
    }
    
  ]

  const statistics = [
    { number: 150, label: 'Projects Completed' },
    { number: 50, label: 'Clients Served' },
    { number: 5, label: 'Years Experience' },
    { number: 25, label: 'Technologies' }
  ]

  const highlights = [
    {
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, Tailwind CSS',
      icon: '💻'
    },
    {
      title: 'Backend Development',
      description: 'Node.js, Python, Express, Django',
      icon: '⚙️'
    },
    {
      title: 'Database Management',
      description: 'MongoDB, PostgreSQL, MySQL, Redis',
      icon: '📊'
    },
    {
      title: 'DevOps & Tools',
      description: 'Docker, AWS, Git, CI/CD',
      icon: '🔧'
    }
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

        {/* Professional Summary */}
        <div className="professional-summary">
          <div className="summary-card">
            <div className="summary-header">
              <h3 className="section-subtitle">Professional Summary</h3>
              <div className="summary-icon-large">💼</div>
            </div>
            <div className="summary-content">
              <div className="summary-text-container">
                <p className="summary-text">
                  Results-driven Full Stack Developer with 5+ years of experience building scalable web applications. 
                  Passionate about creating intuitive user experiences and leveraging modern technologies to solve 
                  complex business challenges. Specialized in React ecosystem with expertise in both frontend and 
                  backend development.
                </p>
                <p className="summary-text secondary">
                  Proven track record of delivering high-quality projects on time, collaborating with cross-functional teams,
                  and continuously improving development processes.
                </p>
              </div>
              <div className="summary-highlights">
                <div className="summary-item">
                  <div className="summary-item-icon">🎯</div>
                  <div className="summary-item-content">
                    <h4 className="summary-item-title">Problem Solver</h4>
                    <p className="summary-item-description">Analytical approach to complex challenges</p>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-item-icon">🚀</div>
                  <div className="summary-item-content">
                    <h4 className="summary-item-title">Fast Learner</h4>
                    <p className="summary-item-description">Quickly adapting to new technologies</p>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-item-icon">🤝</div>
                  <div className="summary-item-content">
                    <h4 className="summary-item-title">Team Player</h4>
                    <p className="summary-item-description">Collaborative approach to development</p>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-item-icon">✨</div>
                  <div className="summary-item-content">
                    <h4 className="summary-item-title">Detail Oriented</h4>
                    <p className="summary-item-description">Meticulous attention to quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Statistics */}
        <div className="about-statistics">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                <span ref={el => countersRef.current.push(el)} data-target={stat.number}>0</span>
                {index === 2 && <span className="stat-suffix">+</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <div className="professional-journey">
          <h3 className="section-subtitle">Professional Journey</h3>
          <div className="journey-container">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`journey-card ${index % 2 === 0 ? 'journey-card-left' : 'journey-card-right'}`}
              >
                <div className="journey-header">
                  <div className="journey-year">
                    <span className="year-icon">📅</span>
                    <span className="year-text">{event.year}</span>
                  </div>
                  <div className="journey-badge">
                    {index === 0 ? '🚀 Start' : index === timelineEvents.length - 1 ? '🏆 Current' : '📈 Growth'}
                  </div>
                </div>
                <div className="journey-content">
                  <div className="journey-title">{event.title}</div>
                  <div className="journey-company">
                    <span className="company-icon">🏢</span>
                    <span className="company-text">{event.company}</span>
                  </div>
                  <div className="journey-description">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </section>
  )
}

export default About