import React, { useState } from "react";
import { Mobile } from "../Mobile/Mobile";
import { Web } from "../Web/Web";
import "./Header.css";

export function Header() {
    const [isopen,setIsopen]=useState(false);
  return (
    <div className="header">
      <div className="logo"><img src="./picture/portfolio.png" alt="logo"/>Portfolio</div>
      <div className="menu">
        <div className="web-menu">
           <Web/>
        </div>
        <div className="mobile-menu">
           <div onClick={()=>setIsopen(!isopen)}>
           <i class="fi fi-rr-apps menu-icon"></i>
           </div>
           {isopen && <Mobile isopen={isopen} setIsopen={setIsopen}/>}
        </div>
      </div>
    </div>
  );
}



