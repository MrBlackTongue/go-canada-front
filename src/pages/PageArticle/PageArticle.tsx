import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Input, Typography} from "antd";
import {postNewArticle} from "../../services";

const {Title} = Typography;

const ArticleEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChange = (value: string) => {
    setContent(value);
  };

  const addArticle = () => {
    const article = {
      title: title,
      content: content,
      imageIds: [],
    };
    postNewArticle(article);
    console.log('Article saved:', article);
    return article;
  };

  return (
    <Card>
      <div style={{display: 'grid'}}>
        <div className='centerTitle'>
          <Title level={3}>Добавление новой статьи</Title>
        </div>
      </div>
      <div>
        <Input
          style={{width: 600, marginBottom: '1em'}}
          placeholder="Название статьи"
          value={title}
          onChange={handleTitleChange}/>
        <ReactQuill
          value={content}
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
        <Button onClick={addArticle} style={{marginTop: 10}}>Save</Button>
      </div>
    </Card>

  );
};

export default ArticleEditor;
