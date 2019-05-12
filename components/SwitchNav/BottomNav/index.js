import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import SearchTab from './SearchTab';
import Account from './Account';
import Reservations from './Reservations';
import NotificationCenter from './NotificationCenter';

import React from 'react';
import { Platform } from "react-native"; // Handle platform-specific code

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({  // BottomNavigator of a Stack and a Component
      Home, // Navigator
      Reservations,
      NotificationCenter,
      Account,
      SearchTab,
    },
    {
      initialRouteName: 'Home',
    }),
  android: createDrawerNavigator({ // DrawerNavigator of a Stack and a Component
      Home,
      Reservations,
      NotificationCenter,
      Account,
      SearchTab,
    },
    {
      initialRouteName: 'Home',
    })
});

// TODO:
// const ParentStack = createStackNavigator({
//   MainNavigator,
//   SearchTab
// })


// export default ParentStack;
export default MainNavigator;

