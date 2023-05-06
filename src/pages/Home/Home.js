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
        </div>
      </div>
    </div>
  );
};

export default Home;
