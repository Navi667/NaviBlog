import React from 'react';
import "./header.css";
import bgc from "./../../assets/naviBgc.jpg"

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Navi's</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img alt='' src={bgc} className='headerBgc'></img>
    </div>
  )
}
