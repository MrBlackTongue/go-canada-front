import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space} from "antd";
import {getArticleById} from "../../services";
import {ArticleType, ItemArticleProps} from "../../types";
import { useParams } from 'react-router-dom';

const {Title} = Typography;

const PageArticle: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      console.log('id', id)
      getArticleById(id).then((fetchedArticle) => {
        setArticle(fetchedArticle);
      });
    }
  }, [id]);


  // // Обновление статьи
  // useEffect(() => {
  //   updateArticle();
  // }, [!isUpdateArticle]);
  //
  //
  // useEffect(() => {
  //   updateArticle();
  // }, []);

  return (
    <Card>
      <div style={{display: 'grid'}}>
        <div className='centerTitle'>
          <Title level={3}>{article?.title}</Title>
        </div>
        <Space direction="vertical">
          <Card key={article?.id} style={{width: '100%'}}>
            {article?.content && (
              <div dangerouslySetInnerHTML={{__html: article.content}}/>
            )}
          </Card>
        </Space>
      </div>
      <div>
      </div>
    </Card>
  );
};

export default PageArticle;
