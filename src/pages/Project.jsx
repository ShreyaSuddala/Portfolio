import React from 'react'
import Projectcard from '../components/Projectcard'

function Project() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting application with location-based predictions, interactive maps, and historical weather data.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop'
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media metrics with data visualization, trend analysis, and reporting features.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Featured Projects</span>
          <span className="title-decoration"></span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Projectcard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
