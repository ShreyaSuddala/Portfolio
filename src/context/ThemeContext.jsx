import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const themes = {
  light: {
    name: 'light',
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceLight: '#e2e8f0',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    primaryColor: '#6366f1',
    accentColor: '#8b5cf6'
  },
  dark: {
    name: 'dark',
    background: '#0f172a',
    surface: '#1e293b',
    surfaceLight: '#334155',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    primaryColor: '#6366f1',
    accentColor: '#8b5cf6'
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [themeData, setThemeData] = useState(themes.dark)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    setThemeData(themes[savedTheme])
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setThemeData(themes[newTheme])
    localStorage.setItem('theme', newTheme)
  }

  const value = {
    theme,
    themeData,
    toggleTheme,
    themes
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext
