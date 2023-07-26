import React from 'react';
import CalculatorFunc from './CalculatorFunc';
import styles from '../styles/styles.modules.css';

const Calculator = () => (
  <>
    <div className={styles.container}>
      <div className={styles.calcWrap}>
        <div className={styles.introMath}>
          <h2>Lets do some math!</h2>
        </div>
        <div className={styles.mainCal}>
          <CalculatorFunc />
        </div>
      </div>
    </div>
  </>
);
export default Calculator;
