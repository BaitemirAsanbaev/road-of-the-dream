import React from 'react';
import cl from './Profile.module.scss';
import star from '../../assets/star.png';
import ava from '../../assets/profile.png';

function Profile() {
  return (
    <div>
      <div className={cl.wrapper}>
        <div className={cl.user}>
          <div className={cl.head}>
            <p>Profile</p>
            <span>
              <p>5</p>
              <img src={star} alt="star" className={cl.star} />
            </span>
          </div>
          <div className={cl.box}>
            <div className={cl.data}>
              <img src={ava} alt="ava" className={cl.ava} />
              <p>
                <span>username</span>
                <br />
                AMITBEK
              </p>
              <p>
                <span>email</span>
                <br />
                Amitbek@gmail.com
              </p>
            </div>
            <div className={cl.story}>
              <h4>User's claim story</h4>
              <div className={cl.content}>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
                <div className={cl.claim}>
                  <h4>Claim name</h4>
                  <p>02.05.23</p>
                  <span>
                    <p>5</p>
                    <img src={star} alt="star" className={cl.star} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
