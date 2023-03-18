import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Card, Typography, Space, FloatButton, Button} from "antd";
import {getArticleById} from "../../services";
import {ArticleType} from "../../types";
import {Link, useParams} from 'react-router-dom';
import {RollbackOutlined} from "@ant-design/icons";

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
    <Card style={{width: '70%', margin: '0 auto'}}>
      <div style={{ display: 'grid' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3}>{article?.title}</Title>
          <Space>
            <Link to={`/all-article`}>
              <Button
                className='blueButton'
                icon={<RollbackOutlined/>}>
                Назад к выбору статей
              </Button>
            </Link>
          </Space>
        </div>
        <Space direction="vertical">
          <Card
            key={article?.id}
            style={{width: '100%'}}
          >
            {article?.content && (
              <div dangerouslySetInnerHTML={{__html: article.content}}/>
            )}
          </Card>
        </Space>
      </div>
      <FloatButton.BackTop/>
    </Card>
  );
};

export default PageArticle;