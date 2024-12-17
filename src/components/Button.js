// src/components/Button.js
import React from 'react';
// import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
