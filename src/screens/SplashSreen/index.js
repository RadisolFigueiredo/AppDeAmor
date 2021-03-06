import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Box} from './styles';

export const SplashScreen = () => {
  return (
    <Container>
      <Box>
        <Icon style={{paddingRight: 20}} name="paw" size={36} color="#ffff" />
        <Icon name="user" size={36} color="#ffff" />
      </Box>
    </Container>
  );
};
