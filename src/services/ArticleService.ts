import {ArticleType} from "../types";
import {message} from "antd";
import {URL, ARTICLE, ALL} from "./Routes";

// Добавить новую статью
export function postNewArticle(data: ArticleType) {
  try {
    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    fetch(URL + ARTICLE, config)
      .then((response) => {
        if (response.ok) {
          return message.success('Запись добавлена');
        } else {
          console.error(response.statusText);
          return message.error('Ошибка при добавлении записи');
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
}

// Получить все статьи
export async function getAllArticles(): Promise<ArticleType[]> {
  try {
    const res = await fetch(URL + ARTICLE + ALL);
    if (!res.ok) {
      console.error(res.statusText);
      return Promise.reject();
    }
    return await res.json() as ArticleType[];
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

// Редактировать статью
export async function putUpdateArticle(data: ArticleType) {
  try {
    const config = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    fetch(URL + ARTICLE, config)
      .then(response => {
        if (response.ok) {
          return message.success('Запись изменена');
        } else {
          console.error(response.statusText);
          return message.error('Ошибка при изменении записи');
        }
      })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error);
  }
}

// Удалить статью по id
export async function deleteArticleById(id: number) {
  try {
    const response = await fetch(URL + ARTICLE + `/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.success) {
      return message.success('Запись удалена');
    } else {
      console.error(response.statusText);
      return message.error('Ошибка при удалении записи');
    }
  } catch (err) {
    console.error(err);
  }
}

// Получить статью по id
export async function getArticleById(id: number| string): Promise<ArticleType | undefined> {
  try {
    const response = await fetch(URL + ARTICLE + `/${id}`);
    if (!response.ok) {
      console.error(response.statusText);
      return Promise.reject();
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}