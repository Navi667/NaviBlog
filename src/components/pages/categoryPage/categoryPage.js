import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./categoryPage.css";
import PostCard from '../../post/Post';
import { useGetArticlesByTagQuery } from '../../../store/api/articleApi';

const SingleCategoryPage = (props) => {

    const { articles, tagName } = props;

    return (
        <div className='categoryPage'>
            <div className='categoryPageTopBar'>
                <h1>{tagName}</h1>
            </div>
            <div className='categoryPagePosts'>
                {articles.map((article, index) => {
                    return <div className='pagePostContainer'>
                        <PostCard article={article.attributes} key={index} articleId={article.id}></PostCard>
                    </div>
                })}
            </div>
        </div>
    )
}

export default function CategoryPage() {
    //通过路由获取tag
    const { tag } = useParams();

    //RTKQ获取文章
    const { data, isLoading, isSuccess, isError, error } = useGetArticlesByTagQuery(tag);

    let content;
    if (isLoading) {
        content = <div>...isLoading</div>
    } else if (isSuccess) {
        const articles = data.data
        content = <SingleCategoryPage articles={articles} tagName={tag}></SingleCategoryPage>
    } else if (isError) {
        alert(error.toString())
    }

    return (
        <div>
            {content}
        </div>
    )

};
