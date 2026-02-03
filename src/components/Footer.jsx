import GithubIcon from '../assets/images/social.png?url'
import LinkedInIcon from '../assets/images/linkedin.png?url'
import GmailIcon from '../assets/images/gmail.png?url'


function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://linkedin.com' },
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
