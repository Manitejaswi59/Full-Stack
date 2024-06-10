// CalculatorInterface.js
import React from 'react';
import './Calculator.css';

const CalculatorInterface = ({ display, handleNumberClick, handleOperatorClick, handleEqualClick, handleClearClick }) => {
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleNumberClick}>7</button>
        <button onClick={handleNumberClick}>8</button>
        <button onClick={handleNumberClick}>9</button>
        <button onClick={handleOperatorClick}>/</button>
        <button onClick={handleNumberClick}>4</button>
        <button onClick={handleNumberClick}>5</button>
        <button onClick={handleNumberClick}>6</button>
        <button onClick={handleOperatorClick}>*</button>
        <button onClick={handleNumberClick}>1</button>
        <button onClick={handleNumberClick}>2</button>
        <button onClick={handleNumberClick}>3</button>
        <button onClick={handleOperatorClick}>-</button>
        <button onClick={handleNumberClick}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleOperatorClick}>+</button>
      </div>
    </div>
  );
};

export default CalculatorInterface;
