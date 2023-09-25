import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const articleApi = createApi({
    //reducer的唯一标识，用于创建store时指定action的type属性，默认为api。
    reducerPath: "articleApi",
    //设置发送请求的工具,这里使用RTKQ提供的fetchBaseQuery 
    baseQuery: fetchBaseQuery({
        baseUrl: "http://43.140.252.116:1337/api/"
    }),
    //api对象封装一类功能，比如增删改查，统一封装到一个对象中
    //一类功能中的每一个具体功能我们可以称它是一个端点。endpoints用来对请求中的端点进行配置。
    endpoints(build) {
        return {
            //获取全部文章
            getAllArticles: build.query({
                //返回一个子路径 ，与baseURL拼接成完整的请求路径
                query() {
                    return 'articles?populate=*';
                }
            }),

            //通过ID获取单个文章
            getOneArticleById: build.query({
                query(articleId){
                    return `articles/${articleId}?populate=*`;
                }
            }),

            //通过标签获取多个文章
            getArticlesByTag: build.query({
                query(tag){
                    return `articles?filters[tag]=${tag}&populate=*`
                }
            }),

            //搜索文章接口，针对标题和标签搜索
            getArticlesBySearch: build.query({
                query(keyWord){
                    return `articles?filters[$or][0][title][$contains]=${keyWord}&filters[$or][1][tag][$contains]=${keyWord}&populate=*`
                }
            })


        }
    }
})

export const { 
    useGetAllArticlesQuery,
    useGetOneArticleByIdQuery,
    useGetArticlesByTagQuery,
    useGetArticlesBySearchQuery
 } = articleApi;
export default articleApi;