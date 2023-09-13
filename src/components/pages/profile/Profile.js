import React from 'react';
import "./profile.css";
import SideBar from "./../../sidebar/SideBar";
import img from "../../../assets/navi.jpg"

export default function Profile() {
  return (
    <div className='profile'>

      <div className='profileWrapper'>

        <div className='profileSimple'>
          <img className='profileImg' alt='' src={img}></img>
          <div className='profileTitle'>
            <h1 className='profileName'>Navi</h1>
            <p className='profileIntro'>一个听过前端的前端开发</p>
          </div>
        </div>

        <div className='profileDetail'>
          <div className='profileRecent'>
            <p>近期目标:</p>
            <ul className='recentList'>
              <li className='recentItem'>学习TS</li>
              <li className='recentItem'>Vue</li>
              <li className='recentItem'>提升英语水平</li>
              <li className='recentItem'>NextJS</li>
              <li className='recentItem'>熟悉CSS</li>
            </ul>
          </div>
          <div className='profileDetailIntro'>
            <h3 className='detailTitle'>认识一下：</h3>
            <p className='detailContent'>
              前端开发，爱好ACG，会不定期分享在学习过程中的笔记，绝大部分内容并非原创，希望能对你有帮助，
             <br></br>
              偶尔分享近期游玩的游戏测评，动漫与漫画的分析，敬请期待.....
            </p>
          </div>
        </div>

        <div className='profileBottom'>
          <p>友情赞助底部栏</p>
        </div>
      </div>

      <SideBar></SideBar>
    </div>
  )
}
