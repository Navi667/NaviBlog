import React from 'react';
import "./singlePost.css";
import "./github-markdown.css";
import img from "./../../assets/postBgc.jpg";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetOneArticleByIdQuery } from '../../store/api/articleApi';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const PostPageItem = ({ article }) => {
  const URL = 'http://43.140.252.116:1337';
  const imgLoad = article.bgc.data.attributes.url;
  return (
    <div className='singlePst'>
      <div>
        <div className='singlePstWrapper'>
          <img alt='' src={URL + imgLoad} className='singlePstBgc'></img>
        </div>
        <h1 className='singlePstTitle'>
          {article.title}
        </h1>
        <div className='singlePstInfo'>
          <span className='singlePstAuthor'>Author: <b> {article.author}</b></span>
          <span className='singlePstDate'> {article.time}</span>
        </div>
        <div className='pstMd'>
          <ReactMarkdown
            className={'markdown-body'}
            children={article.content}
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}


export default function SinglePost(props) {
  const { articleId } = props;

  //RTKQ获取文章数据
  const { data, isLoading, isSuccess, isError, error } = useGetOneArticleByIdQuery(articleId);
  
  let article, content;
  if (isLoading) {
    content = <div>...isLoading</div>
  } else if (isSuccess) {
    article = data.data.attributes;
    content = <PostPageItem article={article}></PostPageItem>
  } else if (isError) {
    alert(error.toString())
  }


  return (
    <>
      {content}
    </>
  )


}
