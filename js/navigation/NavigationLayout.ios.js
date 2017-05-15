import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Home from '../scenes/Home/Home';
import SinglePost from './../scenes/SinglePost'

export default StackNavigator(
  {
    Home: { screen: Home },
    SinglePost: { screen: SinglePost },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    animationEnabled: true,
    tabBarOptions: {
      style: { height: 0 }
    }
  }
);
