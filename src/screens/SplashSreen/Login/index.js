import React from 'react';
import {View, Image} from 'react-native';

import {
  BoxTitle,
  WelcomeTitle,
  OfLoveTitle,
  BoxButton,
  Phrase,
  BtnLogin,
  TextBtn,
} from './styles';

const Login = () => {
  const dogImage = '../../../../assets/images/dogImage.png';

  return (
    <View>
      <Image
        style={{
          width: '100%',
          resizeMode: 'cover',
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
        }}
        source={require(dogImage)}
      />
      <BoxTitle>
        <WelcomeTitle>Bem-vindo(a) ao</WelcomeTitle>
        <OfLoveTitle>Dê Amor</OfLoveTitle>
      </BoxTitle>
      <BoxButton>
        <Phrase>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Phrase>
        <BtnLogin onPress={console.log('OIOIOI')}>
          <TextBtn>Entrar</TextBtn>
        </BtnLogin>
      </BoxButton>
    </View>
  );
};

export default Login;
