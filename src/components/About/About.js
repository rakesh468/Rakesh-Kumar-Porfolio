import React from 'react';
import { SocialContact } from '../Common/Social-contact/SocialContact';
import "./About.css";


export function About() {
  return (
    <div className="about">
      <div className="about-top">
      <div className="about-info">
       Hello There🙋‍♂️, I am <br/><span className="name">Rakesh kumar</span><br/>
       
       <span style={{color:"red"}}> <b>FULL STACK DEVELOPER</b></span>
      
      <div>
        <br/>
        <p className="title-name"> ⚡About me</p>
      <p className="para">Hey! I'm <span style={{color:"red"}}>Rakesh,</span> I've been fascinated by technology and gadgets since I was a kid, and I think this is what pushed me to become a <span style={{color:"red"}}>full stack developer</span>. I prefer to learn new things rather than repeat the same types of tasks, and this sector allows me to do so.</p>
      </div>
      </div>
      <div className="about-photo">
      <img src="/picture/image2.jpeg" className="picture" alt="poster"/>
      </div>
      </div>
     <SocialContact/>
    </div>
  )
}

