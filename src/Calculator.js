import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e, num) => {
    const value = e.target.value;
    num === 1 ? setNum1(value) : setNum2(value);
  };

  const handleOperation = (operator) => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      switch (operator) {
        case '+':
          setResult(number1 + number2);
          break;
        case '-':
          setResult(number1 - number2);
          break;
        case '*':
          setResult(number1 * number2);
          break;
        case '/':
          setResult(number1 / number2);
          break;
        default:
          setResult(0);
      }
    } else {
      setResult(0);
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="text" value={num1} onChange={(e) => handleInputChange(e, 1)} /><br /><br />
      <input type="text" value={num2} onChange={(e) => handleInputChange(e, 2)} />
      <br />
      <p>Result: {result}</p>
      <br />
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>x</button>
      <button onClick={() => handleOperation('/')}>/</button>


    </div>
  );
};

export default Calculator;