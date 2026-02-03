import React from 'react'
import GithubIcon from '../assets/images/github.svg?url'
import LinkedInIcon from '../assets/images/linkedin.svg?url'
import TwitterIcon from '../assets/images/twitter.svg?url'
import GmailIcon from '../assets/images/gmail.svg?url'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://linkedin.com' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com' },
    { name: 'Email', icon: GmailIcon, link: 'mailto:hello@example.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-text">Portfolio</span>
            <span className="brand-dot">.</span>
          </div>
          <p className="footer-text">
            &copy; {currentYear} Your Name. Crafted with ❤️ and ☕
          </p>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.link} 
                className="footer-social-link" 
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
