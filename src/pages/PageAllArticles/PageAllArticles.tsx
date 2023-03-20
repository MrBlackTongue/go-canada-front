import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography, Space, Popconfirm, FloatButton, Spin} from "antd";
import {getAllArticles, deleteArticleById} from "../../services";
import {ArticleType} from "../../types";
import {ZoomInOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

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
    <Card style={{width: '70%', margin: '0 auto'}}>
      <div style={{display: 'grid'}}>
        <div className='centerTitle'>
          <Title level={3}>Все статьи</Title>
        </div>
        {articles ? (
          <>
            <Space direction="vertical" style={{width: '100%', gap: '30px'}}>
              {articles?.map((article) => (
                <Card
                  hoverable
                  key={article.id}
                  title={article.title}
                  style={{width: '100%'}}
                  extra={
                    <Space>
                      <Link to={`/article/${article.id}`}>
                        <Button
                          className='blueButton'
                          icon={<ZoomInOutlined/>}>
                          Просмотреть
                        </Button>
                      </Link>
                      <Link to={`/edit-article/${article.id}`}>
                        <Button
                          type="dashed"
                          icon={<EditOutlined/>}
                          className='greenButton'
                        >
                          Редактировать
                        </Button>
                      </Link>
                      {article.id && (
                        <Popconfirm
                          title="Вы уверены, что хотите удалить эту статью?"
                          onConfirm={() => handleDelete(article.id)}
                          okText="Да"
                          cancelText="Нет"
                        >
                          <Button
                            danger icon={<DeleteOutlined/>}>
                            Удалить
                          </Button>
                        </Popconfirm>
                      )}
                    </Space>
                  }
                >
                  {article.content && (
                    <div dangerouslySetInnerHTML={{__html: article.content}}/>
                  )}
                </Card>
              ))}
            </Space>
          </>
        ) : (
          <Spin size="large"/>
        )}
      </div>
      <FloatButton.BackTop/>
    </Card>
  );
};

export default PageAllArticles;