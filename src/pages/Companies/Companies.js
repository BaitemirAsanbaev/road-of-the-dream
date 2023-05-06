import React from 'react';
import cl from './Companies.module.scss';
import Header from '../Header/Header';
import comphoto from '../../assets/comp.png';
import star from '../../assets/star-web.png';

function Companies() {
  return (
    <div>
      <Header />
      <div className={cl.wrapper}>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span> &emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span> &emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
        <div className={cl.company}>
          <div className={cl.up}>
            <div className={cl.left}>
              <img src={comphoto} className={cl.comPhoto} alt="comp" />
              <p className={cl.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={cl.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={cl.star} />
            </div>
          </div>
          <div className={cl.down}></div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
