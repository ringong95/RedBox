import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Home from '../scenes/Home/Home';
import SinglePost from './../scenes/SinglePost';
import Image from './../scenes/Image';

export default StackNavigator(
  {
    Home: { screen: Home },
    SinglePost: { screen: SinglePost },
    Image: { screen: Image },
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
