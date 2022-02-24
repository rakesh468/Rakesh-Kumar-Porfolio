import React from 'react';
import { SocialData } from '../../data/Social';
import "./SocialContact.css";

export function SocialContact() {
    const data=SocialData;
  return (
    <div className="social-contact">
        {data.map((item)=>{
        return(
           <a href={item.link}target="_blank" rel="noreferrer" >
               <div className="social-icon-div">
                   <img src={item.icon} className="social-icon" alt={item.platform}/>

               </div>
           </a>
        )
        })}
    </div>
  )
}

