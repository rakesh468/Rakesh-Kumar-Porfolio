import React from 'react';
import { Skillsdata } from '../data/Skills';
import Seperator from '../Seperator/Seperator';
import SkillCard from './SkillCard';
import "./Skills.css";

export function Skill() {
  const data=Skillsdata
  return (
    <div className="skills">
      <Seperator/>
      <label className="section-title">Skills</label>
      <div className="skills-container">
       {data.map((item)=>{
         return(
           <div className="skills-section">
             <label className="skills-section-title">{item.type}</label>
             <div className="skills-list">
               {item.list.map((skill)=>{
                 return(
                   <SkillCard skill={skill}/>
                 )
               })}
               </div>
             </div>
         )
       })}
      </div>
    </div>
  )
}

