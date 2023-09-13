import React from 'react';
import "./home.css";
import Header from '../../header/Header';
import SideBar from '../../sidebar/SideBar';
import Posts from '../../posts/Posts';

export default function Home() {
  return (
    <div className='home'>
      <Header></Header>
      <div className='container'>
        <Posts></Posts>
        <SideBar></SideBar>
      </div>
    </div>
  )
}
