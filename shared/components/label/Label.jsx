import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  color: #7f8fa4;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;

  @media only screen and (min-width: 901px) {
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }
  }

  @media only screen and (min-width: 901px) {
    margin: ${props => (props.halfWidth ? '0' : '20px 0 0 0')};
    width: ${props => (props.halfWidth ? 'calc(50% - 5px)' : '100%')};
    & + & {
      margin-left: ${props => (props.halfWidth ? '10px' : '0')};
    }
  }
`;

Label.propTypes = {
  halfWidth: PropTypes.bool
};

Label.defaultProps = {
  halfWidth: false
};

export default Label;
