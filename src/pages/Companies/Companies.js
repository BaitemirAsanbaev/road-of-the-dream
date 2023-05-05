import React from 'react';
import sexy from './Companies.module.scss';
import Header from '../Header/Header';
import comphoto from '../../assets/comp.png';
import star from '../../assets/star-web.png';

function Companies() {
  return (
    <div>
      <Header />
      <div className={sexy.wrapper}>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span> &emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span> &emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
        <div className={sexy.company}>
          <div className={sexy.up}>
            <div className={sexy.left}>
              <img src={comphoto} className={sexy.comPhoto} alt="comp" />
              <p className={sexy.leftP}>
                Name of Company <br /> <span>&emsp; We are the strongest company in KG</span>
              </p>
            </div>
            <div className={sexy.right}>
              <h3>5</h3>
              <img src={star} alt="star" className={sexy.star} />
            </div>
          </div>
          <div className={sexy.down}></div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
