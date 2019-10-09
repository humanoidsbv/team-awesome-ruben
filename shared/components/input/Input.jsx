import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const InputStandard = ({
  halfWidth,
  handleBlur,
  inputText,
  inputValue,
  name,
  setInputValue,
  validity
}) => (
  <label
    className={`${styles.label} ${halfWidth && styles.halfWidth}`}
    htmlFor={name}
  >
    <span className={styles.labelText}>{inputText}</span>
    <input
      className={`${styles.input} ${validity[name] === false &&
        styles.invalidInput}`}
      maxLength="30"
      minLength="2"
      name={name}
      onBlur={handleBlur}
      onChange={({ target }) => setInputValue(target.value)}
      required
      value={inputValue}
    />
  </label>
);

InputStandard.propTypes = {
  halfWidth: PropTypes.bool,
  handleBlur: PropTypes.func,
  inputText: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  setInputValue: PropTypes.func,
  validity: PropTypes.shape({})
};

InputStandard.defaultProps = {
  halfWidth: false,
  handleBlur: null,
  inputText: 'input',
  inputValue: 'value',
  name: 'name',
  setInputValue: null,
  validity: {}
};

export default InputStandard;
