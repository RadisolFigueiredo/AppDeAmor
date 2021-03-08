import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SplashScreen} from './screens/SplashSreen';
import Login from './screens/SplashSreen/Login';

const Routes = createAppContainer(
  createSwitchNavigator({
    SplashScreen: SplashScreen,
    Login: Login,
  }),
);

export default Routes;
