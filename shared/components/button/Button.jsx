import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props =>
    props.type === 'submit' ? '#39b54a' : '#f5f7f9'};
  border-radius: 4px;
  border: ${props => (props.type === 'submit' ? 0 : '1px')} solid #ced0da;
  color: ${props => (props.type === 'submit' ? '#fff' : '#4b5464')};
  fill: #a8aab7;
  font-size: 14px;
  height: 36px;
  outline: 0;
  padding: 0;
  text-align: center;
  width: calc(50% - 5px);

  & + & {
    margin-left: 10px;
  }

  &[disabled] {
    background-color: #e6eaee;
    background-image: none;
    border: 0;
    color: #68768c;
    cursor: auto;
  }

  @media only screen and (min-width: 901px) {
    margin: 0;
    min-width: 100px;
    padding: 0 20px;
    width: auto;
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  type: 'regular'
};

export default Button;
