import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ disabled, innerText, onClick }) => (
  <button
    className={`${styles.button} ${disabled === false && styles.active}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {innerText}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  innerText: PropTypes.string
};

Button.defaultProps = {
  disabled: undefined,
  onClick: null,
  innerText: 'button'
};

export default Button;
