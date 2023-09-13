import React, { useState, useRef } from 'react';
import "./posts.css";
import PostCard from "../post/Post";
import { useGetAllArticlesQuery } from '../../store/api/articleApi';

const PostsPage = (props) => {

  let { articlesList } = props;

  //选中高亮页面
  const [pageIndex, setPageIndex] = useState(1);


  //分页器页面数
  const [currentPage, setCurrentPage] = useState(1);
  //每一页显示多少文章
  const [articlesPerPage, setArticlesPerPage] = useState(8);
  //在特定页面上显示项目的边界
  //每页的最后一篇文章
  const lastArticleInView = currentPage * articlesPerPage;
  //每页的第一篇文章
  const firstArticleInView = lastArticleInView - articlesPerPage;
  //页面数
  const pageNumbers = [];
  //该页面要渲染的所有文章
  let articlesDisplay = articlesList.slice(firstArticleInView, lastArticleInView);

  for (let i = 1; i <= Math.ceil(articlesList.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  const changePageHandler = (e,num) => {
     setCurrentPage(num);
     setPageIndex(num);
  }



  return (
    <div className='postsContainer'>
      <div className='posts'>
        {
          articlesDisplay.map((newArticle, index) => {
            return <PostCard article={newArticle.attributes} key={index} articleId={newArticle.id}></PostCard>
          })
        }
      </div>
      <div className='postsPageSorter'>
        {pageNumbers.map((pageNum, index)=>{
          return <button className={pageNum === pageIndex ? 'pageSorterBtn checked' : 'pageSorterBtn'} key={index} onClick={(e)=>{changePageHandler(e,pageNum)}}>{pageNum}</button>
        })}
      </div>
    </div>
  )
}

export default function Posts() {

  const { data, isLoading, isSuccess, isError, error } = useGetAllArticlesQuery();
  console.log(data)

  let articlesList, content;
  if (isLoading) {
    content = <div>...isLoading</div>
  } else if (isSuccess) {
    articlesList = data.data;
    content = <PostsPage articlesList={articlesList}></PostsPage>
  } else if (isError) {
    alert(error.toString())
  }

  return (
    <>
      {content}
    </>
  )
}
