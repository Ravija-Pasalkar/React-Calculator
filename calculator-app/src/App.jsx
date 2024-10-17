import React, { useState } from 'react';
import Display from './components/display';  

function App() {
  const [input, setInput] = useState('0');  

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display value={input} />  
    </div>
  );
}

export default App;
