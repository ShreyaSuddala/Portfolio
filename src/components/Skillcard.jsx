import React from 'react'

function Skillcard({ skill }) {
  return (
    <div className="skill-category">
      <div className="skill-header">
        <div className="skill-icon">{skill.icon}</div>
        <h3>{skill.category}</h3>
      </div>
      <div className="skill-items">
        {skill.items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skillcard
