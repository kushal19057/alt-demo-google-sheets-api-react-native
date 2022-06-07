import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import GetRequest from '../screens/getRequest';
import PostRequest from '../screens/postRequest';

const screens = {
  Home: {
    screen: Home
  },
  GetRequest: {
    screen: GetRequest
  },
  PostRequest: {
    screen: PostRequest
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
