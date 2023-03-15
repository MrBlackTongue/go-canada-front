import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space} from "antd";
import {getAllArticles} from "../../services";
import {ArticleType} from "../../types";
import {
  ZoomInOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const {Title} = Typography;

const ArticleEditor: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>();

  // Обновить статью
  const [updateArticle, setUpdateArticle] = useState(false);

  const allArticles = () => {
    getAllArticles().then((articles) => {
      setArticles(articles)
    })
  }

  useEffect(() => {
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
            <Card
              key={article.id}
              title={article.title}
              extra={
                <Link to={`/article/${article.id}`}>
                {/*<Link to={`/article`}>*/}
                  <Button type="primary" icon={<ZoomInOutlined />}>
                    Подробнее
                  </Button>
                </Link>
              }
              style={{width: '100%'}}>
              {article.content && (
                <div dangerouslySetInnerHTML={{__html: article.content}}/>
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
