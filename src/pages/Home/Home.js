import Header from '../Header/Header';
import cl from './Home.module.scss';
import Form from '../../components/Form/Form';
import Map from '../../components/Map/Map';
import { useState } from 'react';
import send from '../../assets/arrow-upward.png';
import Rating from '@mui/material/Rating/Rating';

const Home = () => {
  const [pos, setPos] = useState([]);
  const [street, setStreet] = useState('');
  return (
    <div>
      <div className={cl.homeWrapper}>
        <div className={cl.homeForm}>
          <Map setPos={setPos} setStreet={setStreet} />
          <Form pos={pos} street={street} />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className={cl.map}>
//             <h3>leaflet map</h3>
//           </div>
//           <form className={cl.form}>
//             <h1>Заполнение жалобы</h1>
//             <div className={cl.reason}>
//               <input type="text" className={cl.reasonInput} placeholder="Введите причину жалобы" />
//             </div>
//             <div className={cl.strName}>
//               <input type="text" className={cl.streetInput} placeholder="Введите название улицы" />
//             </div>
//             <div className={cl.star}>
//               <p>
//                 Оцените качество дороги: <br className={cl.br} />
//                 oт 1 до 5 (1- норм 5- слишком плохо)
//               </p>
//               <Rating name="size-large" defaultValue={2} size="large" className={cl.rating} />
//             </div>
//             <div className={cl.photo}>
//               <p>Загрузите фото:</p>
//               <input type="file" className={cl.file} />
//             </div>
//             <div className={cl.area}>
//               <textarea placeholder="Опишите проблему подробнее" className={cl.desc}></textarea>
//             </div>
//             <button type="submit" className={cl.send}>
//               Отправить
//               <img src={send} alt="send" className={cl.sendPng} />
//             </button>
//           </form>
