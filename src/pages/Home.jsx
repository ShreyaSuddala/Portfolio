import React from 'react'
import Herosection from '../components/Herosection'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Project from '../pages/Project'
import Contact from '../pages/Contact'

function Home({ scrollToSection }) {
  return (
    <div className="home">
      <Herosection scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
