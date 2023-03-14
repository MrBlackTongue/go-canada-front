import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Button, Card, Input, Typography} from "antd";
import {postNewArticle, postNewImage} from "../../services";
import {Article} from "../../types";

const {Title} = Typography;

const ArticleEditor: React.FC = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    content: '',
    imageIds: [],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, title: e.target.value });
  };

  const handleChange = (value: string) => {
    setArticle({ ...article, content: value });
  };

  const handleImageUpload = (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    return postNewImage(formData).then((result) => {
      console.log("Image uploaded successfully:", result);
      const imageId = result;
      const updatedArticle = {
        ...article,
        imageIds: article?.imageIds ? [...article.imageIds, imageId] : [imageId],
      };
      setArticle(updatedArticle);
      return imageId;
    });
  };

  const addArticle = () => {
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
          value={article.title}
          onChange={handleTitleChange}/>
        <ReactQuill
          value={article.content}
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
