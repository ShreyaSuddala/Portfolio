// Project Service - API calls for projects

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const projectService = {
  // Get all projects
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`)
      if (!response.ok) {
        throw new Error('Failed to fetch projects')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching projects:', error)
      throw error
    }
  },

  // Get single project by ID
  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`)
      if (!response.ok) {
        throw new Error('Project not found')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching project:', error)
      throw error
    }
  },

  // Create new project
  async create(projectData) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
      })
      if (!response.ok) {
        throw new Error('Failed to create project')
      }
      return await response.json()
    } catch (error) {
      console.error('Error creating project:', error)
      throw error
    }
  },

  // Update project
  async update(id, projectData) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
      })
      if (!response.ok) {
        throw new Error('Failed to update project')
      }
      return await response.json()
    } catch (error) {
      console.error('Error updating project:', error)
      throw error
    }
  },

  // Delete project
  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to delete project')
      }
      return true
    } catch (error) {
      console.error('Error deleting project:', error)
      throw error
    }
  }
}

export default projectService
