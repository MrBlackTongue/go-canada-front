import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space, Popconfirm} from "antd";
import {getAllArticles, deleteArticleById} from "../../services";
import {ArticleType} from "../../types";
import {ZoomInOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const {Title} = Typography;

const PageAllArticles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>();

  const allArticles = () => {
    getAllArticles().then((articles) => {
      setArticles(articles)
    })
  }

  const handleDelete = (id: number | undefined) => {
    if (id) {
      deleteArticleById(id).then(() => {
        allArticles();
      });
    }
  };

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
              hoverable
              key={article.id}
              title={article.title}
              extra={
                <Space>
                  <Link to={`/article/${article.id}`}>
                    <Button
                      type="primary"
                      icon={<ZoomInOutlined />}>
                      Просмотреть
                    </Button>
                  </Link>
                  <Link to={`/edit-article/${article.id}`}>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      style={{ backgroundColor: 'green', borderColor: 'green' }}
                      >
                      Редактировать
                    </Button>
                  </Link>
                  {article.id && (
                    <Popconfirm
                      title="Вы уверены, что хотите удалить статью?"
                      onConfirm={() => handleDelete(article.id)}
                      okText="Да"
                      cancelText="Нет"
                    >
                      <Button
                        type="primary"
                        danger icon={<DeleteOutlined />}>
                        Удалить
                      </Button>
                    </Popconfirm>
                  )}
                </Space>
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

export default PageAllArticles;