import React, {useState, useEffect} from 'react';
import "./topbar.css";
import Search from '../search/search';
import img from "./../../assets/navi.jpg"
import { useNavigate, Link } from 'react-router-dom';

export default function TopBar() {
    const nav = useNavigate();
    const navTo = (url) => {
        nav(url);
    }
    const liNavTo = (e, tag) => {
        e.stopPropagation();
        navTo(`/category/${tag}`)
    }

    const [showSearch, setShowSearch] = useState(false);

    const showSearchHandler = () => {
        setShowSearch(prevState => !prevState);
    }

    const closeSearch = (e) => {
        e.stopPropagation();
        setShowSearch(false);
    }

    const tags = ["react", "js", "css", "else"];
    return (
        <div className='topBar'>
            {showSearch && <Search closeSearch = {closeSearch}></Search>}
            <div className='topLeft'>
                <a href='https://github.com/Navi667'>
                    <i class="topIcon fa-brands fa-github"></i>
                </a>
                <a href='https://space.bilibili.com/350795319'>
                    <i class="topIcon fa-brands fa-bilibili"></i>
                </a>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem' onClick={() => { navTo("/") }}>HOME</li>
                    <li className='topListItem categories' onClick={() => { navTo("/categories") }}>
                        CATEGORIES
                        <div className='categoriesDetailList'>
                            <ul className='detailList'>
                                {tags.map((tag, index) => {
                                    return <li className="detailListLi" key={index} onClick={(e) => { liNavTo(e, tag) }}>{tag}</li>
                                })}
                            </ul>
                        </div>
                    </li>
                    <li className='topListItem' onClick={() => { navTo("/profile") }}>ABOUT</li>
                </ul>
            </div>

            <div className='topRight'>
                <img alt="" src={img} className='topImg'></img>
                <i className="searchIcon fa-solid fa-magnifying-glass" onClick={showSearchHandler}></i>
            </div>

        </div >
    )
}
