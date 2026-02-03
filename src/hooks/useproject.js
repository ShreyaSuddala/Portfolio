import { useState, useEffect, useCallback } from 'react'

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with location-based predictions.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop'
  }
]

function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setProjects(projectsData)
      setError(null)
    } catch (err) {
      setError('Failed to fetch projects')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return { projects, loading, error, refetch: fetchProjects }
}

export default useProjects
