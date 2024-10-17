import React from 'react';
import Button from './button.jsx'; 

const ButtonPanel = ({ handleClick }) => {
  const buttons = [
    'C', '()', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="button-panel">
      {buttons.map((button, index) => (
        <Button 
          key={index} 
          label={button} 
          handleClick={handleClick} 
          className={button === '=' ? 'equal' : ''}  
        />
      ))}
    </div>
  );
};

export default ButtonPanel;
