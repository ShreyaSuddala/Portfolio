import GithubIcon from '../assets/images/social.png?url'
import LinkedInIcon from '../assets/images/linkedin.png?url'
import GmailIcon from '../assets/images/gmail.png?url'
import HeroAvatar from '../assets/svg/undraw_businesswoman-avatar_ktl2.svg?url'

function Herosection({ scrollToSection }) {
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://linkedin.com' },
    { name: 'Email', icon: GmailIcon, link: 'mailto:hello@example.com' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-bg-elements">
        <div className="floating-orb orb-hero-1"></div>
        <div className="floating-orb orb-hero-2"></div>
        <div className="floating-orb orb-hero-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar">
            <img src={HeroAvatar} alt="Profile Illustration" />
          </div>
          <div className="avatar-ring"></div>
        </div>
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Your Name</span>
        </h1>
        <h2 className="hero-subtitle">
          <span className="typing-effect">Full Stack Developer</span>
        </h2>
        <p className="hero-description">
          I craft exceptional digital experiences with modern technologies.
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            <span>Get In Touch</span>
          </button>
        </div>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="social-link"
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt={social.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Herosection
