import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Typography} from "antd";

const {Title} = Typography;

const ArticleEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    // Отправить содержимое статьи на сервер или сохранить локально
    console.log('Article saved:', content);
  };

  return (
    <Card>
      <div style={{display: 'grid'}}>
        <div className='centerTitle'>
          <Title level={3}>Добавление новой статьи</Title>
        </div>
      </div>
      <div>
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
        <Button onClick={handleSave} style={{marginTop: 10}}>Save</Button>
      </div>
    </Card>

  );
};

export default ArticleEditor;
