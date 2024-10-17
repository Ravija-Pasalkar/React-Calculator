import React, { useState } from 'react';
import Display from './components/display';
import ButtonPanel from './components/buttonpanel';
import './index.css'; 

function App() {
  const [input, setInput] = useState('0');
  const [openBrackets, setOpenBrackets] = useState(0); 

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setInput(eval(input));  
      } catch (e) {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('0');  
      setOpenBrackets(0); 
    } else if (label === '()') {
      if (openBrackets === 0) {
        setInput(input === '0' ? '(' : input + '(');
        setOpenBrackets(1); 
      } else {
        setInput(input + ')');
        setOpenBrackets(0); 
      }
    } else {
      setInput(input === '0' ? label : input + label);  
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <Display value={input} />  
        <ButtonPanel handleClick={handleClick} />  
      </div>
    </div>
  );
}

export default App;
