import React from 'react';
import "./sidebar.css";
import bgc from "./../../assets/sideBarBgc.jpg";

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBarIntro'>
                <div className='sideBarItem'>
                    <span className='sideBarTitle'>Welcome</span>
                    <img alt='' src={bgc} className='sideBarBgc'></img>
                    <p className='sideBarContent'>
                        Navi's Blog
                    </p>
                </div>
                <div className='sideBarItem'>
                    <span className='sideBarTitle'>What You Can Find Here</span>
                    <ul className='sideBarList'>
                        <li className='sideBarListItem'>Programming</li>
                        <li className='sideBarListItem'>Game</li>
                        <li className='sideBarListItem'>Animation</li>
                        <li className='sideBarListItem'>Comic</li>
                        <li className='sideBarListItem'>Happy</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
