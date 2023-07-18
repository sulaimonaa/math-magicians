/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import '../index.css';

const CalculatorFunc = () => (

  <table className="table">
    <tbody>
      <tr>
        <td className="btn-val ac">AC</td>
        <td className="btn-val add-minus">+/-</td>
        <td className="btn-val mod">%</td>
        <td className="operand">÷</td>
      </tr>
      <tr>
        <td className="btn-val">7</td>
        <td className="btn-val">8</td>
        <td className="btn-val">9</td>
        <td className="operand">x</td>
      </tr>
      <tr>
        <td className="btn-val">4</td>
        <td className="btn-val">5</td>
        <td className="btn-val">6</td>
        <td className="operand">-</td>
      </tr>
      <tr>
        <td className="btn-val">1</td>
        <td className="btn-val">2</td>
        <td className="btn-val">3</td>
        <td className="operand">+</td>
      </tr>
      <tr>
        <td className="btn-val" colSpan={2}>0</td>
        <td className="btn-val">.</td>
        <td className="operand">=</td>
      </tr>
    </tbody>
  </table>

);

export default CalculatorFunc;
