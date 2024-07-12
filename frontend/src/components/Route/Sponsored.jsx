import React from 'react';
import styles from '../../styles/styles';
import images from '../../Assests';

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between  w-full">
        <div className="flex items-start">
          <img
            src={images.dell_logo}
            alt=""
            style={{ width: '150px', objectFit: 'contain' }}
          />
        </div>
        <div className="flex items-start">
          <img
            src={images.lg_logo}
            style={{ width: '150px', objectFit: 'contain' }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={images.adidas_logo}
            style={{ width: '120px', objectFit: 'contain' }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={images.asus_logo}
            style={{ width: '150px', objectFit: 'contain' }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={images.sony_logo}
            style={{ width: '150px', objectFit: 'contain' }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
