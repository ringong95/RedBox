import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import { bottomNavigatorScreens, bottomNavigatorStyles } from './BottomNavConfig';


const BottomNavigator = TabNavigator(bottomNavigatorScreens, bottomNavigatorStyles);


export default StackNavigator(
  {
    HomeScreenNavigator: { screen: BottomNavigator },
  },
  {
    initialRouteName: 'HomeScreenNavigator',
    headerMode: 'screen',
  }
);
