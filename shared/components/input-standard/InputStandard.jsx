import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputStandard.module.css';

const InputStandard = ({
  handleBlur,
  inputText,
  inputValue,
  setInputValue,
  validity
}) => (
  <label className={`${styles.label}`} htmlFor={inputText}>
    <span className={styles.labelText}>{inputText}</span>
    <input
      className={`${styles.input} ${validity[inputValue] === false &&
        styles.invalidInput}`}
      maxLength="30"
      minLength="2"
      name={inputText}
      onBlur={handleBlur}
      onChange={({ target }) => setInputValue(target.value)}
      required
      value={inputValue}
    />
  </label>
);

InputStandard.propTypes = {
  handleBlur: PropTypes.func,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  validity: PropTypes.shape({ key: PropTypes.string }),
  inputText: PropTypes.string
};

InputStandard.defaultProps = {
  handleBlur: null,
  inputText: 'input',
  inputValue: 'value',
  setInputValue: null,
  validity: {}
};

export default InputStandard;
