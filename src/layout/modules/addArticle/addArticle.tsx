import React, {useState, useEffect} from 'react';
import {
  Typography,
  Space,
  Button,
  Form,
} from 'antd';
import {
  SyncOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import '../../../App.css'

const {Title} = Typography;

interface Article {
  title: string;
  content: string;
}

interface Props {
  onSubmit: (article: Article) => void;
}

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit({title, content});
    setTitle('');
    setContent('');
  };

  return (
    <div style={{display: 'grid'}}>
      <div className='centerTitle'>
        <Title level={3}>Статья</Title>
      </div>
      (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Заголовок статьи:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">Содержание статьи:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Создать статью</button>
      </form>
      );
    </div>
  );
};

export default AddArticle;