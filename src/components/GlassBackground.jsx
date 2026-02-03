import React from 'react'
import BrowsingIllustration from '../assets/svg/undraw_browsing_z5g5.svg?url'
import DesignerAvatarIllustration from '../assets/svg/undraw_designer-avatar_n5q8.svg?url'
import ResumeIllustration from '../assets/svg/undraw_my-resume_etai.svg?url'
import ResumeRafikiIllustration from '../assets/svg/Resume-rafiki.svg?url'

function GlassBackground() {
  return (
    <div className="glass-background">
      {/* Base Gradient Background */}
      <div className="base-gradient"></div>
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay"></div>
      
      {/* Animated Grid Pattern */}
      <div className="grid-overlay">
        <div className="grid-lines"></div>
      </div>
      
      {/* Floating Orbs/Blobs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="orb orb-5"></div>
      
      {/* Floating SVG Illustrations */}
      <div className="floating-illustration illustration-1">
        <img src={BrowsingIllustration} alt="Browsing" className="illustration-img" />
      </div>
      <div className="floating-illustration illustration-2">
        <img src={DesignerAvatarIllustration} alt="Designer" className="illustration-img" />
      </div>
      <div className="floating-illustration illustration-3">
        <img src={ResumeIllustration} alt="Resume" className="illustration-img" />
      </div>
      <div className="floating-illustration illustration-4">
        <img src={ResumeRafikiIllustration} alt="Resume Rafiki" className="illustration-img" />
      </div>
      
      {/* Glow Spots */}
      <div className="glow-spot glow-spot-1"></div>
      <div className="glow-spot glow-spot-2"></div>
      <div className="glow-spot glow-spot-3"></div>
      
      {/* Radial Glow Effects */}
      <div className="radial-glow radial-glow-1"></div>
      <div className="radial-glow radial-glow-2"></div>
      
      {/* Scan Line Effect (optional) */}
      <div className="scan-lines"></div>
    </div>
  )
}

export default GlassBackground
