import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card, Typography, Input, Button} from 'antd';
import {getArticleById, putUpdateArticle} from '../../services';
import {ArticleType} from '../../types';
import ReactQuill from "react-quill";

const {Title} = Typography;

export const PageEditArticle: React.FC = () => {
  const [article, setArticle] = useState<ArticleType>();

  const {id} = useParams<{ id: string }>();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({...article, title: e.target.value});
  };

  const handleChange = (value: string) => {
    setArticle({...article, content: value});
  };

  const changeArticle = async () => {
    if (article) {
      await putUpdateArticle(article);
      console.log('Article saved:', article);
      return article;
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
    <Card>
      <div style={{display: 'grid'}}>
        <div className="centerTitle">
          <Title level={3}>Редактировать статью</Title>
        </div>
        <Input
          style={{width: 600, marginBottom: '1em'}}
          placeholder="Название статьи"
          value={article?.title}
          onChange={handleTitleChange}
        />
        <ReactQuill
          value={article?.content}
          onChange={handleChange}
          placeholder="Write your article here..."
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
        <Button onClick={changeArticle} style={{marginTop: 10}}>Сохранить</Button>
      </div>
    </Card>
  );
};