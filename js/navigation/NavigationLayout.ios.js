import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import HomePage from '../scenes/Home/Home';

export default StackNavigator(
  {
    HomePage: { screen: HomePage },

  },
  {
    initialRouteName: 'HomePage',
    headerMode: 'screen',
    animationEnabled: true,
    tabBarOptions: {
      style: { height: 0 }
    }
  }
);
