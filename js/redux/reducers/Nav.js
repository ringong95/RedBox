// import { NavigationActions } from 'react-navigation';

// import AppNavigator from '../../navigation/NavigationLayout.ios';


// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const initialNavState = AppNavigator.router.getStateForAction(
//   tempNavState
// );

// export default (state = initialNavState, action) => {
//   let nextState;
//   switch (action.type) {
//     case 'navigate':
//       return action.payload
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }

//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// }