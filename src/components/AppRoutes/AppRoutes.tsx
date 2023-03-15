import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageHome from '../../pages/PageHome/PageHome';
import {PageAddArticle, PageEditArticle} from "../../pages";
import PageAllArticles from "../../pages/PageAllArticles/PageAllArticles";
import PageArticle from "../../pages/PageArticle/PageArticle";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/all-article" element={<PageAllArticles/>}/>
      <Route path="/add-article" element={<PageAddArticle/>}/>
      <Route path="/edit-article/:id" element={<PageEditArticle/>}/>
      <Route path="/article/:id" element={<PageArticle/>}/>
    </Routes>
  );
};

export default AppRoutes;