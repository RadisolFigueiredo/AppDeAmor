import styled, {css} from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-content: center;
  display: flex;
  justify-content: center;

  ${({backgroundInitial}) =>
    backgroundInitial &&
    `
    background: #fd9b60;
  `}
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 55px;
  align-items: center;
`;

export const BoxTitle = styled.View`
  position: absolute;
`;
export const Title = styled.Text`
  font-size: 40px;
  color: #ffff;
`;
