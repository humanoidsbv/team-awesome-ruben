import styled from 'styled-components';

type InputProps = {
  isValid: boolean;
};

const Input = styled('input')`
  background-image: #fff;
  border: solid 1px #ced0da;
  border-color: ${(props: InputProps): string =>
    props.isValid !== false ? '#ced0da' : '#fb6375'};
  border-radius: 4px;
  font-size: 14px;
  margin-top: 7px;
  padding: 9px 0 9px 15px;
`;

export default Input;
