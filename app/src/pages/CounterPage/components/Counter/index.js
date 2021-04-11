import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../../routes/routesNames';

import './styles.css';

const Counter = ({ countValue, typeNumber, handleIncrement, handleDecrement, handleReset }) => {
  return (
    <div>
      <div className='counter-wrapper'>
        <div className="count-screen">{countValue}</div>
        <div className={typeNumber}>{typeNumber}</div>
        <div className="buttons-wrapper">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <Link to={ROUTES.HOME_PAGE} className="button-back">
        <button> GO TO HOME PAGE</button>
      </Link>
    </div>

  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  typeNumber: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counter;

