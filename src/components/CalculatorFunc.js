import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../index.css';

const CalculatorFunc = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  function handleClickEvent(buttonName) {
    const newState = calculate(state, buttonName);
    setState(newState);
  }
  return (
    <>
      <div className="result">{state.next || state.total || '0'}</div>
      <table className="table">
        <tbody>
          <tr>
            <td className="btn-val ac" onClick={() => handleClickEvent('AC')}>
              AC
            </td>
            <td
              className="btn-val add-minus"
              onClick={() => handleClickEvent('+/-')}
            >
              +/-
            </td>
            <td className="btn-val mod" onClick={() => handleClickEvent('%')}>
              %
            </td>
            <td className="operand" onClick={() => handleClickEvent('÷')}>
              ÷
            </td>
          </tr>
          <tr>
            <td className="btn-val" onClick={() => handleClickEvent('7')}>
              7
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('8')}>
              8
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('9')}>
              9
            </td>
            <td className="operand" onClick={() => handleClickEvent('x')}>
              x
            </td>
          </tr>
          <tr>
            <td className="btn-val" onClick={() => handleClickEvent('4')}>
              4
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('5')}>
              5
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('6')}>
              6
            </td>
            <td className="operand" onClick={() => handleClickEvent('-')}>
              -
            </td>
          </tr>
          <tr>
            <td className="btn-val" onClick={() => handleClickEvent('1')}>
              1
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('2')}>
              2
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('3')}>
              3
            </td>
            <td className="operand" onClick={() => handleClickEvent('+')}>
              +
            </td>
          </tr>
          <tr>
            <td
              className="btn-val"
              colSpan={2}
              onClick={() => handleClickEvent('0')}
            >
              0
            </td>
            <td className="btn-val" onClick={() => handleClickEvent('.')}>
              .
            </td>
            <td className="operand" onClick={() => handleClickEvent('=')}>
              =
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default CalculatorFunc;
