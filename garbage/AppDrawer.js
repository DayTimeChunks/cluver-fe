import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import { Platform } from 'react-native';
import Login from '../components/SwitchNav/Login';
import Home from '../components/SwitchNav/BottomNav/Home/Home';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from "react-native-elements"; // https://react-native-training.github.io/react-native-elements/docs/icon.html

//TODO: https://stackoverflow.com/questions/53412278/how-to-implement-custom-header-icons-within-a-nested-stacknavigator
//TODO: https://medium.com/@jan.hesters/building-a-react-native-app-with-complex-navigation-using-react-navigation-85a479308f52

// Bottom Navigator:
// TODO: https://snack.expo.io/@react-navigation/tabs-with-icons-v3

// Libraries
// https://blog.bitsrc.io/11-react-native-component-libraries-you-should-know-in-2018-71d2a8e33312



const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);


const MainNavigator = createDrawerNavigator(
  { // RouteConfigs object
    // Login: {
    //   screen: Login,
    //   navigationOptions: ({ navigation }) => ({
    //     title: '',
    //
    //   })
    // },
    // Home: {
    //   screen: Home,
    //   // navigationOptions: () => ({
    //   //   title: 'Home'
    //   // }),
    //   navigationOptions: () => ({
    //     title: 'Home',
    //     headerLeft: (
    //       <Icon
    //         containerStyle={styles.icon}
    //         type="ionicon"
    //         name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
    //       />)
    //   }),
    // },
    Home,
  }, {
    initialRouteName: 'Home'
  }
);



const App = createAppContainer(createSwitchNavigator({
  // React classes or stacks of classes
  Auth: Login,
  App: MainNavigator
}, {
  initialRouteName: 'Auth',
}));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingLeft: 10
  }
});

// export default App;
