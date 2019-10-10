import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: #f5f7f9;
  border-radius: 4px;
  border: 1px solid #ced0da;
  color: #4b5464;
  cursor: pointer;
  fill: #a8aab7;
  font-size: 14px;
  height: 36px;
  outline: 0;
  padding: 0;
  text-align: center;
  width: calc(50% - 5px);

  &&.button {
    margin-left: 10px;
  }

  &.button[disabled] {
    background-color: #e6eaee;
    background-image: none;
    border: 0;
    color: #68768c;
    cursor: auto;
  }

  &.active {
    background-color: #39b54a;
    border: 0;
    color: #fff;
  }

  @media only screen and (min-width: 901px) {
    margin: 0 0 0 auto;
    min-width: 100px;
    width: 100px;
  }
`;

const Button = ({ disabled, innerText, onClick }) => (
  <ButtonStyled
    className={`button ${disabled === false && 'active'}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {innerText}
  </ButtonStyled>
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
