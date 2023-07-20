import React from 'react';
import CalculatorFunc from './CalculatorFunc';
import QuoteContainer from './QuotesContainer';
import '../index.css';

const Calculator = () => (
  <div className="wrap">
    <div className="main-cal">
      <CalculatorFunc />
    </div>
    <QuoteContainer />
  </div>
);
export default Calculator;
