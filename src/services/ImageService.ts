import { message } from "antd";
import { URL, IMAGE_UPLOAD } from "./Routes";

// Загрузить новое изображение
export function postNewImage(data: FormData): Promise<string> {
  try {
    const config = {
      method: "POST",
      body: data,
    };
    return fetch(URL + IMAGE_UPLOAD, config)
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            return data.uuid; // здесь вы возвращаете UUID изображения
          });
        } else {
          console.error(response.statusText);
          return message.error("Ошибка при загрузке изображения");
        }
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
