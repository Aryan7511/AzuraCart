import React from 'react';
import images from '../../Assests';

const CircularLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[300px]">
      <img src={images.circularLoader} alt="Loading..." className="w-16 h-16" />
    </div>
  );
};

export default CircularLoader;
