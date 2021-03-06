import React from 'react';
import {ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Box} from './styles';

export const SplashScreenTwo = () => {
  const backgroundImage = '../../../assets/images/backgroundCat.png';

  return (
    <ImageBackground
      style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      source={require(backgroundImage)}>
      <Container>
        <Box>
          <Icon style={{paddingRight: 20}} name="paw" size={36} color="#ffff" />
          <Text style={{fontSize: 40, color: '#fff'}}>Dê Amor</Text>
          <Icon style={{paddingLeft: 20}} name="user" size={36} color="#ffff" />
        </Box>
      </Container>
    </ImageBackground>
  );
};
