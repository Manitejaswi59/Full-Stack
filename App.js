import React, { useState } from 'react';
import './App.css';
import CalculatorInterface from './CalculatorInterface';

const App = () => {
  const [display, setDisplay] = useState('');

  const handleNumberClick = (e) => {
    setDisplay(display + e.target.textContent);
  };

  const handleOperatorClick = (e) => {
    setDisplay(display + e.target.textContent);
  };

  const handleEqualClick = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClearClick = () => {
    setDisplay('');
  };

  return (
    <div className="App">
      <CalculatorInterface
        display={display}
        handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleEqualClick={handleEqualClick}
        handleClearClick={handleClearClick}
      />
    </div>
  );
};

export default App;
