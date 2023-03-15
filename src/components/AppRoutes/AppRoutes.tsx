import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageHome from '../../pages/PageHome/PageHome';
import ArticleEditor from "../../pages/AddPageArticle/AddPageArticle";
import PageAllArticles from "../../pages/PageAllArticles/PageAllArticles";
import PageArticle from "../../pages/PageArticle/PageArticle";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/all-article" element={<PageAllArticles/>}/>
      <Route path="/add-article" element={<ArticleEditor/>}/>
      <Route path="/article/:id" element={<PageArticle/>}/>
    </Routes>
  );
};

export default AppRoutes;
