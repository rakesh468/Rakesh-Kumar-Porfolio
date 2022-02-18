import React from 'react';
import"./SkillCard.css";

function SkillCard({skill}) {
  return (
    <div className="skill-card">
        <div className="skill-icons">{skill.icon}</div>
        <label className="skill-name">{skill.name} </label>
    </div>
  )
}

export default SkillCard 