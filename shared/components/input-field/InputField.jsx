import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputField.module.css';

const InputField = ({
  halfWidth,
  handleBlur,
  inputText,
  inputValue,
  isValid,
  name,
  setInputValue
}) => (
  <label
    className={`${styles.label} ${halfWidth && styles.halfWidth}`}
    htmlFor={name}
  >
    <span className={styles.labelText}>{inputText}</span>
    <input
      className={`${styles.input}
      ${isValid === false && styles.invalidInput}`}
      name={name}
      onBlur={handleBlur}
      onChange={({ target }) => setInputValue(target.value)}
      value={inputValue}
      maxLength="30"
      minLength="2"
      required
    />
  </label>
);

InputField.propTypes = {
  halfWidth: PropTypes.bool,
  handleBlur: PropTypes.func,
  inputText: PropTypes.string,
  inputValue: PropTypes.string,
  isValid: PropTypes.bool,
  name: PropTypes.string,
  setInputValue: PropTypes.func
};

InputField.defaultProps = {
  halfWidth: false,
  handleBlur: null,
  inputText: 'input',
  inputValue: 'value',
  isValid: undefined,
  name: 'name',
  setInputValue: null
};

export default InputField;
