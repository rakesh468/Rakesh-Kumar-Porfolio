import React from 'react';
import "./Body.css";
import { About } from '../About/About';
import { Project } from '../projects/Project';
import { Skill } from '../Skill/Skill';
import { Contact } from '../Contact/Contact';
export function Body() {
  return (
    <div className="body">
      
      <section id="about">
     <About/>
      </section>
      <section id="projects">
       <Project/>
      </section>
      <section id="skills">
       <Skill/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
     
    </div>
  )
}








