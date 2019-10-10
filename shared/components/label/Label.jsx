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

    &:last-child {
      margin: 0;
    }
  }

  @media only screen and (min-width: 901px) {
    margin: ${props => props.halfWidth && '0'};
    width: ${props => props.halfWidth === true && 'calc(50% - 5px)'};
    & + & {
      margin-left: ${props => props.halfWidth && '10px'};
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
