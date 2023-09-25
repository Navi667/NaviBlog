import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BackDrop from '../backdrop/backdrop';
import "./search.css"

function Search(props) {
    const { closeSearch } = props;
    const searchInputRef = useRef(null);

    const nav = useNavigate();
    const searchNavTo = (keyWord) => {
        nav(`/search/${keyWord}`)
    }

    const keyUpSearchHandler = (e) => {
        if(e.which === 13){
            searchNavTo(e.target.value);
            closeSearch(e);
        }else {
            return
        }
    }

    const onClickSearchHandler = (e) => {
      const keyWord = searchInputRef.current.value;
      searchNavTo(keyWord);
      closeSearch(e)
    }
    return (
        <BackDrop className="searchBackdrop">
            <div className='searchBox'>
                <div className='searchComp'>
                    <h1 className="searchInfo">Search For:</h1>
                    <input className='searchInput' autoFocus onKeyUp={(e)=>{keyUpSearchHandler(e)}} ref={searchInputRef}></input>
                    <span className='searchBtn' onClick={(e) => { onClickSearchHandler(e) }}>Go!</span>
                </div>
                <div className='searchClose' onClick={e => { closeSearch(e) }}>x</div>
            </div>
        </BackDrop>
    )
}

export default Search;