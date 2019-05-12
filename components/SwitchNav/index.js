import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import BottomNav from './BottomNav';
import Login from './Login';
import SearchTab from './BottomNav/SearchTab'

const AppNavigator = createSwitchNavigator({
    Login, // Component
    BottomNav, // Navigator
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);