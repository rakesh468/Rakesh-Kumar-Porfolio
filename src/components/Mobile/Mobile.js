import React from 'react';
import "./Mobile.css";
import PersonIcon from '@mui/icons-material/Person';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FeedIcon from '@mui/icons-material/Feed';


export function Mobile({isopen,setIsopen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={()=>setIsopen(!isopen)} >
      <i class="fi fi-rr-cross-circle" ></i>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
          <a href="#projects">
       <FeedIcon/> Projects
          </a>
      </div>
      <div className="mobile-option">
          <a href="#skills">
         <LaptopMacIcon/>Skills
              
          </a>
      </div>
      <div className="mobile-option">
          <a href="#contact">
          <PersonIcon/>Contact
              
          </a>
      </div>
      </div>
    </div>
  )
}

