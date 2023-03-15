import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space} from "antd";
import {getAllArticles} from "../../services";
import {ArticleType} from "../../types";

const {Title} = Typography;

const ArticleEditor: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>();

  const allArticles = () => {
    getAllArticles().then((articles) => {
      setArticles(articles)
      console.log('articles', articles)
    })
  }

  useEffect(()=> {
    allArticles()
  }, [])

  return (
    <Card>
      <div style={{display: 'grid'}}>
        <div className='centerTitle'>
          <Title level={3}>Все статьи</Title>
        </div>
        <Space direction="vertical">
          {articles?.map((article) => (
            <Card key={article.id} title={article.title} extra={<a href="#">Подробнее</a>} style={{width: '100%'}}>
              {article.content && (
                <div dangerouslySetInnerHTML={{__html: article.content}} />
              )}
            </Card>
          ))}
        </Space>
      </div>
      <div>
      </div>
    </Card>
  );
};

export default ArticleEditor;
