import React from 'react';

const Button = ({ label, handleClick, className }) => { 
  return (
    <button className={`button ${className}`} onClick={() => handleClick(label)}> 
      {label}
    </button>
  );
};

export default Button;
