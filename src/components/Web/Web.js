import React from "react";
import "./Web.css";
import PersonIcon from '@mui/icons-material/Person';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FeedIcon from '@mui/icons-material/Feed';

export function Web() {
  return (
    <div className="web">
      <div className="web-option">
          <a href="#projects">
         <FeedIcon/>Projects
          </a>
      </div>
      <div className="web-option">
          <a href="#skills">
          <LaptopMacIcon/>Skills
              
          </a>
      </div>
      <div className="web-option">
          <a href="#contact">
         <PersonIcon/> Contact
              
          </a>
      </div>
    </div>
  );
}
