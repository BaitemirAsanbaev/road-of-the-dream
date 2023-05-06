// import cl from "./Form.module.scss";
// import Rating from "@mui/material/Rating";
// import send from "../../assets/arrow-upward.png";
// import { useState } from "react";
// import requests from "../../requests/requests";
// import { useSelector } from "react-redux";

// const Form = ({ pos, street }) => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [rating, setRating] = useState(0);
//   const username = useSelector((state) => state.auth.username);
//   const email = useSelector((state) => state.auth.email);
//   const token = useSelector((state)=>state.auth.token)
//   function sendReview() {
//     requests.postReport({
//       title,
//       image,
//       longitude: pos[1],
//       latitude: pos[0],
//       description,
//       street,
//       rating: parseInt(rating),
//       author:{
//         username,
//         email
//       }
//     },
//     { Authorization: "Bearer " + token });
//   }
//   function handleFileChange(e) {
//     // Создаем новый объект FileReader
//     const reader = new FileReader();

//     // Устанавливаем обработчик события onload для получения закодированных данных
//     reader.onload = function() {
//       const base64 = reader.result;
//       setImage(base64); // Сохраняем закодированное изображение в состояние
//     }

//     // Читаем выбранный файл в формате DataURL
//     reader.readAsDataURL(e.target.files[0]);
//   }
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//       }}
//       className={cl.Form}
//     >
//       <h1>Заполнение жалобы</h1>
//       <div className={cl.reason}>
//         <input
//           onInput={(e) => setTitle(e.target.value)}
//           type="text"
//           className={cl.reasonInput}
//           placeholder="Введите причину жалобы"
//         />
//       </div>
//       <div className={cl.strName}>
//         <input
//           disabled
//           type="text"
//           value={street}
//           className={cl.streetInput}
//           placeholder="Выберите улицу на карте"
//         />
//       </div>
//       <div className={cl.star}>
//         <p>
//           Оцените качество дороги: <br />
//           oт 1 до 5 (1- норм 5- слишком плохо)
//         </p>
//         <Rating
//           onInput={(e) => setRating(e.target.value)}
//           name="size-large"
//           defaultValue={2}
//           size="large"
//           className={cl.rating}
//         />
//       </div>
//       <div className={cl.photo}>
//         <p>Загрузите фото:</p>
//         <input
//           onChange={handleFileChange}
//           type="file"
//           className={cl.file}
//         />
//       </div>
//       <div className={cl.area}>
//         <textarea
//           onInput={(e) => setDescription(e.target.value)}
//           placeholder="Опишите проблему подробнее"
//           className={cl.desc}
//         ></textarea>
//       </div>

//       <button
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//         onClick={() => sendReview()}
//         type="submit"
//         className={cl.send}
//       >
//         Отправить
//         <img src={send} alt="send" className={cl.sendPng} />
//       </button>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import cl from './Form.module.scss';
import send from '../../assets/arrow-upward.png';
import requests from '../../requests/requests';
import axios from 'axios';

const Form = ({ pos, street }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);

  function sendReview() {
    axios
      .post(
        'http://192.168.100.64:8000/reviews/',
        {
          title,
          // image,
          longitude: pos[1],
          latitude: pos[0],
          description,
          street,
          rating: parseInt(rating),
          author: {
            username,
            email,
          },
        },
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      )
      .then((res) => {
        console.log('succes', res.data);
      });
  }

  function handleFileChange(e) {
    // Создаем новый объект FileReader
    const reader = new FileReader();

    // Устанавливаем обработчик события onload для получения закодированных данных
    reader.onload = function () {
      const base64 = reader.result;
      setImage(base64); // Сохраняем закодированное изображение в состояние
    };

    // Читаем выбранный файл в формате DataURL
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    console.log('tset');
    e.preventDefault();
    sendReview();
  };

  return (
    <form onSubmit={handleSubmit} className={cl.Form} encType="application/json">
      <h1>Заполнение жалобы</h1>
      <div className={cl.reason}>
        <input
          onInput={(e) => setTitle(e.target.value)}
          type="text"
          className={cl.reasonInput}
          placeholder="Введите причину жалобы"
        />
      </div>
      <div className={cl.strName}>
        <input
          disabled
          type="text"
          value={street}
          className={cl.streetInput}
          placeholder="Выберите улицу на карте"
        />
      </div>
      <div className={cl.star}>
        <p>
          Оцените качество дороги: <br />
          oт 1 до 5 (1- норм 5- слишком плохо)
        </p>
        <Rating
          onInput={(e) => setRating(e.target.value)}
          name="size-large"
          defaultValue={2}
          size="large"
          className={cl.rating}
        />
      </div>
      {/* <div className={cl.photo}>
        <p>Загрузите фото:</p>
        <input onChange={handleFileChange} type="file" className={cl.file} />
      </div> */}
      <div className={cl.area}>
        <textarea
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Опишите проблему подробнее"
          className={cl.desc}></textarea>
      </div>
      <button type="submit" className={cl.send}>
        Отправить
        <img src={send} alt="send" className={cl.sendPng} />
      </button>
    </form>
  );
};
export default Form;
