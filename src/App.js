import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Article from "./components/pages/article/Article";
import Write from "./components/pages/write/Write";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/Login";
import Categories from "./components/pages/categories/categories";
import CategoryPage from "./components/pages/categoryPage/categoryPage";
import SearchPage from "./components/pages/searchPage/searchPage";


function App() {
  return (
    <>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="article/:id" element={<Article></Article>}></Route>
        <Route path="write" element={<Write></Write>}></Route>
        <Route path="profile" element={<Profile></Profile>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="categories" element={<Categories></Categories>}></Route>
        <Route path="category/:tag" element={<CategoryPage></CategoryPage>}></Route>
        <Route path="search/:keyWord" element={<SearchPage></SearchPage>}></Route>
        <Route path='*' element={<div>default</div>}></Route>

      </Routes>
      <div className="policeStation">
        <span>navigatenan.xyz</span>
        <a href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2023011294号-1</a>
      </div>

    </>
  );
}

export default App;
