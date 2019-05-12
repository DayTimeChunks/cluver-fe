import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Venue from './Venue';
import Confirmation from './Confirmation';
import {Icon} from "react-native-elements";
import { Text } from 'react-native';

const activeTintLabelColor = "#808B96";

const HomeStack = createStackNavigator({
    Venue,
    Confirmation,
    Home,
  },
  {
    initialRouteName: 'Home',
  });

HomeStack.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Home </Text>,
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" type="ionicon" color={tintColor} />
  ),
  drawerLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Home </Text>,
  drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />
};

export default HomeStack;