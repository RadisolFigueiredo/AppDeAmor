import styled from 'styled-components';

export const BoxTitle = styled.View`
  display: flex;
  justify-content: center;
  height: 45%;
`;

export const Title = styled.Text`
  font-size: 36px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fd9b60;
  text-align: center;
`;
export const WelcomeTitle = styled(Title)`
  font-size: 40px;
`;
export const OfLoveTitle = styled(Title)`
  font-size: 72px;
`;

export const BoxButton = styled.View`
  display: flex;
  align-items: center;
  height: 20%;
`;

export const Phrase = styled.Text`
  width: 80%;
  text-align: center;
  padding-bottom: 30px;
  font-size: 22px;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 60px;
  background-color: #fd9b60;
`;

export const TextBtn = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #ffff;
  margin: auto 0;
`;
