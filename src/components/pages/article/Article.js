import React from 'react';
import SinglePost from "../../singlePost/SinglePost"
import "./article.css";
import { useParams } from 'react-router-dom';

export default function Article() {
    const {id} = useParams();
    return (
        <div className='article'>
            <SinglePost articleId = {id}></SinglePost>
        </div>
    )
}
