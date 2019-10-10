import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background-image: #fff;
  border: solid 1px #ced0da;
  border-color: ${props => props.isValid === false && '#fb6375'};
  border-radius: 4px;
  font-size: 14px;
  margin-top: 7px;
  padding: 9px 0 9px 15px;
  width: 100%;
`;

Input.propTypes = {
  isValid: PropTypes.bool
};

Input.defaultProps = {
  isValid: undefined
};

export default Input;
