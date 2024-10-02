import styled from '@emotion/styled';

export const WriteTitle = styled.h2`
  font-size: 30px;
`;
export const RedInput = styled.input`
  border: 1px solid red;
`;
export const YellowInput = styled.input`
  border: 1px solid yellow;
`;
export const GreenInput = styled.input`
  border: 1px solid green;
`;
export const BlueBtn = styled.button`
  background-color: blue;
  transition: 0.2s all ease-in-out;
  color: ${props => (props.isActive ? 'white' : '')};
`;
