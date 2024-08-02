import React from 'react';
import './Loader.css'; // Ensure the correct path to your CSS file

const Loader = () => {
  return (
    <div className='min-h-75vh flex items-center justify-center'>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
