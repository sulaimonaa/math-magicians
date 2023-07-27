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
            <td
              role="gridcell"
              className="btn-val ac"
              onClick={() => handleClickEvent('AC')}
              onKeyDown={() => handleClickEvent('AC')}
            >
              AC
            </td>
            <td
              role="gridcell"
              className="btn-val add-minus"
              onClick={() => handleClickEvent('+/-')}
              onKeyDown={() => handleClickEvent('+/-')}
            >
              +/-
            </td>
            <td
              role="gridcell"
              className="btn-val mod"
              onClick={() => handleClickEvent('%')}
              onKeyDown={() => handleClickEvent('%')}
            >
              %
            </td>
            <td
              role="gridcell"
              className="operand"
              onClick={() => handleClickEvent('÷')}
              onKeyDown={() => handleClickEvent('÷')}
            >
              ÷
            </td>
          </tr>
          <tr>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('7')}
              onKeyDown={() => handleClickEvent('7')}
            >
              7
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('8')}
              onKeyDown={() => handleClickEvent('8')}
            >
              8
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('9')}
              onKeyDown={() => handleClickEvent('9')}
            >
              9
            </td>
            <td
              role="gridcell"
              className="operand"
              onClick={() => handleClickEvent('x')}
              onKeyDown={() => handleClickEvent('x')}
            >
              x
            </td>
          </tr>
          <tr>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('4')}
              onKeyDown={() => handleClickEvent('4')}
            >
              4
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('5')}
              onKeyDown={() => handleClickEvent('5')}
            >
              5
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('6')}
              onKeyDown={() => handleClickEvent('6')}
            >
              6
            </td>
            <td
              role="gridcell"
              className="operand"
              onClick={() => handleClickEvent('-')}
              onKeyDown={() => handleClickEvent('-')}
            >
              -
            </td>
          </tr>
          <tr>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('1')}
              onKeyDown={() => handleClickEvent('1')}
            >
              1
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('2')}
              onKeyDown={() => handleClickEvent('2')}
            >
              2
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('3')}
              onKeyDown={() => handleClickEvent('3')}
            >
              3
            </td>
            <td
              role="gridcell"
              className="operand"
              onClick={() => handleClickEvent('+')}
              onKeyDown={() => handleClickEvent('+')}
            >
              +
            </td>
          </tr>
          <tr>
            <td
              role="gridcell"
              className="btn-val"
              colSpan={2}
              onClick={() => handleClickEvent('0')}
              onKeyDown={() => handleClickEvent('0')}
            >
              0
            </td>
            <td
              role="gridcell"
              className="btn-val"
              onClick={() => handleClickEvent('.')}
              onKeyDown={() => handleClickEvent('.')}
            >
              .
            </td>
            <td
              role="gridcell"
              className="operand"
              onClick={() => handleClickEvent('=')}
              onKeyDown={() => handleClickEvent('=')}
            >
              =
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default CalculatorFunc;
