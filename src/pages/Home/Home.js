import Header from '../Header/Header';
import sexy from './Home.module.scss';
import Form from '../../components/Form/Form';
import Map from '../../components/Map/Map';
import { useState } from 'react';

const Home = () => {
    const [pos, setPos] = useState([])
    const [street, setStreet] = useState('')
  return (
    <div>
        {/* <GetData/> */}
    
      <div className={sexy.homeWrapper}>
        <div className={sexy.homeForm}>

          <Map setPos={setPos} setStreet={setStreet}/>
          <Form pos={pos} street={street} />
          <div className={sexy.map}>
            <h3>leaflet map</h3>
          </div>
          <form className={sexy.form}>
            <h1>Заполнение жалобы</h1>
            <div className={sexy.reason}>
              <input
                type="text"
                className={sexy.reasonInput}
                placeholder="Введите причину жалобы"
              />
            </div>
            <div className={sexy.strName}>
              <input
                type="text"
                className={sexy.streetInput}
                placeholder="Введите название улицы"
              />
            </div>
            <div className={sexy.star}>
              <p>
                Оцените качество дороги: <br className={sexy.br} />
                oт 1 до 5 (1- норм 5- слишком плохо)
              </p>
              <Rating name="size-large" defaultValue={2} size="large" className={sexy.rating} />
            </div>
            <div className={sexy.photo}>
              <p>Загрузите фото:</p>
              <input type="file" className={sexy.file} />
            </div>
            <div className={sexy.area}>
              <textarea placeholder="Опишите проблему подробнее" className={sexy.desc}></textarea>
            </div>
            <button type="submit" className={sexy.send}>
              Отправить
              <img src={send} alt="send" className={sexy.sendPng} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
