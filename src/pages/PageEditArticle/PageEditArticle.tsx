import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Card, Typography, Input, Button, FloatButton} from 'antd';
import {getArticleById, putUpdateArticle} from '../../services';
import {ArticleType} from '../../types';
import ReactQuill from "react-quill";

const {Title} = Typography;

export const PageEditArticle: React.FC = () => {

  const [article, setArticle] = useState<ArticleType>();
  const {id} = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({...article, title: e.target.value});
  };

  const handleChange = (value: string) => {
    setArticle({...article, content: value});
  };

  const updateArticle = async () => {
    if (article) {
      const updatedArticle: ArticleType = {
        id: article.id,
        title: article.title,
        content: article.content,
      };
      await putUpdateArticle(updatedArticle);
      navigate(`/article/${id}`);
    }
  };

  useEffect(() => {
    if (id) {
      getArticleById(id).then((article) => {
        setArticle(article);
      });
    }
  }, [id]);

  return (
    <Card style={{width: '70%', margin: '0 auto'}}>
      <div style={{display: 'grid'}}>
        <div className="centerTitle">
          <Title level={3}>Редактировать статью</Title>
        </div>
      </div>
      <div>
        <Input
          value={article?.title}
          style={{width: 600, marginBottom: '1em'}}
          placeholder="Название статьи"
          onChange={handleTitleChange}
        />
        <ReactQuill
          value={article?.content}
          onChange={handleChange}
          placeholder="Текст статьи..."
          modules={{
            toolbar: [
              [{'header': [1, 2, false]}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          }}
          formats={[
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image',
          ]}
        />
        <Button onClick={updateArticle} style={{marginTop: 10}}>Сохранить</Button>
      </div>
      <FloatButton.BackTop/>
    </Card>
  );
};