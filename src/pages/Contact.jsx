import React from 'react'
import GithubIcon from '../assets/images/social.png?url'
import LinkedInIcon from '../assets/images/linkedin.png?url'
import GmailIcon from '../assets/images/gmail.png?url'
import LocationIcon from '../assets/images/location.png?url'
import PhoneIcon from '../assets/images/phone.png?url'
import DesignerAvatarIllustration from '../assets/svg/undraw_designer-avatar_n5q8.svg?url'

function Contact() {
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedInIcon, link: 'https://linkedin.com' },
    { name: 'Email', icon: GmailIcon, link: 'mailto:hello@example.com' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-illustration">
        <img src={DesignerAvatarIllustration} alt="Designer Illustration" className="section-illustration" />
      </div>
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Get In Touch</span>
          <span className="title-decoration"></span>
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always interested in hearing about new projects, opportunities, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <img src={LocationIcon} alt="Location" className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">San Francisco, CA</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <img src={GmailIcon} alt="Email" className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">hello@example.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <img src={PhoneIcon} alt="Phone" className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links-large">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link} 
                    className="social-link-large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon} alt={social.name} className="social-icon" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
