import React from 'react';
import "./category.css";
import { useNavigate } from 'react-router-dom';
import { useGetArticlesByTagQuery } from '../../store/api/articleApi';

const CategoryItem = (props) => {
    const { articles, tagName } = props;

    const URL = 'http://43.140.252.116:1337';

    const slicedArticles = articles.slice(0, 3);

    const nav = useNavigate();
    const navTo = (url) => {
        nav(url);
    }
    const btnNavTo = (e, tag) => {
        e.stopPropagation();
        navTo(`/category/${tag}`)
    }


    return (
        <div className='category-box'>
            <div className='top-box'>
                <span className='categoryTitle'>{tagName}</span>
                <div className='readMore' onClick={(e)=>{btnNavTo(e, tagName)}}>+ Read More</div>
            </div>
            <div className='file-box'>
                {slicedArticles.map((article, index) => {
                    let a = article.attributes;
                    let imgLoad = a.bgc.data.attributes.url;
                    return <div className='file-card' key={index} onClick={() => { navTo(`/article/${article.id}`) }}>
                        <img alt='' src={URL + imgLoad} className='fileBgc'></img>
                        <div className='file-info'>
                            <span className='fileTitle'>{a.title}</span>
                            <span className='fileTime'>{a.time}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default function Category(props) {
    //获取当前分类
    const { tagName } = props;
    //RTKQ获取文章数据
    const { data, isLoading, isSuccess, isError, error } = useGetArticlesByTagQuery(tagName);



    let content;
    if (isLoading) {
        content = <div>...isLoading</div>
    } else if (isSuccess) {
        const articles = data.data
        content = <CategoryItem articles={articles} tagName={tagName}></CategoryItem>
    } else if (isError) {
        alert(error.toString())
    }


    return (
        <div>
            {content}
        </div>
    )

};
