import React from 'react'

function FloatingObject({ children, delay = 0, className = '' }) {
  const style = {
    animationDelay: `${delay}s`
  }

  return (
    <div className={`floating-object ${className}`} style={style}>
      {children}
    </div>
  )
}

export default FloatingObject
