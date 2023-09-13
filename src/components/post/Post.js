import React from 'react';
import img from "./../../assets/postBgc.jpg";
import "./post.css";
import { useNavigate, useParams } from 'react-router-dom';
export default function PostCard(props) {

    const URL = 'http://43.140.252.116:1337';
    const {article, articleId} = props;

    const nav = useNavigate();
    const navTo = (url) => {
        nav(url);
    }

    const {title, tag, time, description} = article;
    const imgLoad = article.bgc.data.attributes.url


    return (
        <div className='post' onClick={() => {navTo(`/article/${articleId}`)}}>
            <img alt='' src={URL+imgLoad} className='postBgc'></img>
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>{tag}</span>
                </div>
                <span className='postTitle'>{title}</span>
                <hr></hr>
                <span className='postDate'>{time}</span>
            </div>
            <p className='postDesc'>
              {description}
            </p>
        </div>
    )
}
