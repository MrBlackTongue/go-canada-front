import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageHome from '../../pages/PageHome/PageHome';
import ArticleEditor from "../../pages/PageArticle/PageArticle";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/add-article" element={<ArticleEditor/>}/>
    </Routes>
  );
};

export default AppRoutes;
