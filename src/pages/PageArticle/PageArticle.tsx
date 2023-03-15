import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space} from "antd";
import {getArticleById} from "../../services";
import {ArticleType} from "../../types";
import { useParams, Link } from 'react-router-dom';

const {Title} = Typography;

const PageArticle: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getArticleById(id).then((fetchedArticle) => {
        setArticle(fetchedArticle);
      });
    }
  }, [id]);

  return (
    <Card>
      <div style={{ display: 'grid' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3}>{article?.title}</Title>
          <Link to={`/edit-article/${id}`}>
            <Button type="primary">Редактировать статью</Button>
          </Link>
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
