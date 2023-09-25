import React from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../../post/Post';
import { useGetArticlesBySearchQuery } from '../../../store/api/articleApi';
import "./searchPage.css"


const SearchPageItem = (props) => {
    const { articles, keyWord } = props;

    const ifSearchExist = (articles) => {
        return (
            articles.length === 0 ?
            <div>您所搜索的内容并未找到，或许将来会有，敬请期待.....</div>:
            articles.map((article, index) => {
                return <div className='pagePostContainer'>
                    <PostCard article={article.attributes} key={index} articleId={article.id}></PostCard>
                </div>
            })
        )    
    }

    return (
        <div className='searchPage'>
            <div className='searchPageTopBar'>
                <h1>您可能想查找: {keyWord}</h1>
            </div>
            <div className='searchPagePosts'>
                {
                    ifSearchExist(articles)
                }
            </div>
        </div>
    )
}

export default function SearchPage() {
         //通过路由获取tag
         const { keyWord } = useParams();
         

         //RTKQ获取文章
         const { data, isLoading, isSuccess, isError, error } = useGetArticlesBySearchQuery(keyWord);
        
     
         let content;
         if (isLoading) {
             content = <div>...isLoading</div>
         } else if (isSuccess) {
             const articles = data.data
             content = <SearchPageItem articles={articles} keyWord={keyWord}></SearchPageItem>
         } else if (isError) {
             content = <div>{isError.toString()}</div>
         }
     
         return (
             <div>
                 {content}
             </div>
         )
};
