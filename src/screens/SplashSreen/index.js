import React, {useState, useEffect} from 'react';
import {Animated, ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Box, BoxTitle, Title} from './styles';

export const SplashScreen = ({navigation}) => {
  const backgroundImage = '../../../assets/images/backgroundCat.png';
  const [iconPawAnimated] = useState(new Animated.Value(0));
  const [iconUserAnimated] = useState(new Animated.Value(0));
  const [title, setTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(iconPawAnimated, {
        toValue: -100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(iconUserAnimated, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);
    setTimeout(() => {
      setTitle(true);
    }, 1500);
    setTimeout(() => {
      navigation.navigate('Login');
      return () => setTitle(false);
    }, 3000);
  }, []);

  return (
    <ImageBackground
      style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      source={require(backgroundImage)}>
      <Container backgroundInitial={!title}>
        <Box>
          <Animated.View style={{transform: [{translateX: iconPawAnimated}]}}>
            <Icon
              style={{paddingRight: 20}}
              name="paw"
              size={36}
              color="#ffff"
            />
          </Animated.View>
          {title && (
            <BoxTitle>
              <Title>Dê Amor</Title>
            </BoxTitle>
          )}
          <Animated.View style={{transform: [{translateX: iconUserAnimated}]}}>
            <Icon
              style={{paddingLeft: 20}}
              name="user"
              size={36}
              color="#ffff"
            />
          </Animated.View>
        </Box>
      </Container>
    </ImageBackground>
  );
};
