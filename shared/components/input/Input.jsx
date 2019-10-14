import PropTypes from 'prop-types';
import styled from 'styled-components';

// interface InputProps {
//   isValid: any;
// }

const Input = styled.input`
  background-image: #fff;
  border: solid 1px #ced0da;
  border-color: ${props => (props.isValid ? '#ced0da' : '#fb6375')};
  border-radius: 4px;
  font-size: 14px;
  margin-top: 7px;
  padding: 9px 0 9px 15px;
`;

// Input.propTypes = {
//   isValid: PropTypes.bool
// };

// Input.defaultProps = {
//   isValid: true
// };

export default Input;
