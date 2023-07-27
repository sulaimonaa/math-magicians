import React from 'react';
import CalculatorFunc from './CalculatorFunc';
import '../index.css';

const Calculator = () => (
  <>
    <div className="container">
      <div className="calcWrap">
        <div className="introMath">
          <h2>Lets do some math!</h2>
        </div>
        <div className="mainCal">
          <CalculatorFunc />
        </div>
      </div>
    </div>
  </>
);
export default Calculator;
