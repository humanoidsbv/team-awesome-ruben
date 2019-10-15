import styled from 'styled-components';

type LabelProps = {
  halfWidth: boolean;
};

const Label = styled('label')`
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
    margin: ${(props: LabelProps): number | string =>
      props.halfWidth ? 0 : '20px 0 0 0'};
    width: ${(props: LabelProps): string =>
      props.halfWidth ? 'calc(50% - 5px)' : '100%'};
    & + & {
      margin-left: ${(props: LabelProps): string =>
        props.halfWidth ? '10px' : '0'};
    }
  }
`;

export default Label;
