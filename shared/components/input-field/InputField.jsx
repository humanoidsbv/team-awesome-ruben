import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  color: #7f8fa4;
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;

  @media only screen and (min-width: 901px) {
    margin-bottom: 20px;

    :last-child {
      margin: 0;
    }
  }

  @media only screen and (min-width: 901px) {
    &.halfWidth {
      width: calc(50% - 5px);
    }

    &.halfWidth + .halfWidth {
      margin: 0 0 0 10px;
    }
  }

  .input {
    background-image: #fff;
    border-radius: 4px;
    border: solid 1px #ced0da;
    font-size: 14px;
    margin-top: 7px;
    padding: 9px 0 9px 15px;
    width: 100%;
  }

  .invalidInput {
    border-color: #fb6375;
  }
`;

const InputField = ({
  halfWidth,
  handleBlur,
  inputText,
  inputValue,
  isValid,
  name,
  setInputValue
}) => (
  <Label className={halfWidth && 'halfWidth'} htmlFor={name}>
    {inputText}
    <input
      className={`input ${isValid === false && 'invalidInput'}`}
      name={name}
      onBlur={handleBlur}
      onChange={({ target }) => setInputValue(target.value)}
      value={inputValue}
      maxLength="30"
      minLength="2"
      required
    />
  </Label>
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
