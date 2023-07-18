/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import Result from './Result';
import CalculatorFunc from './CalculatorFunc';
import '../index.css';

const Calculator = () => (
  <div className="main-cal">
    <Result />
    <CalculatorFunc />
  </div>
);

export default Calculator;
