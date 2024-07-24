import React from 'react';
import './RotatingCircle.css';

const RotatingCircle = ({ children,name}) => {
  return (
    <div className="circle-container">
      <div className="circles">
        <p>{ children}</p>
        <div className="dots"></div>
      </div>
    </div>
  );
};

export default RotatingCircle;
