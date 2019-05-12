import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import {Icon} from "react-native-elements";

const activeTintLabelColor = "#808B96";

class Account extends PureComponent {
  componentDidMount() {
    console.log('Account DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Account WILL UNMOUNT');
  }

  static navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Account </Text>,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-settings" type="ionicon" color={tintColor} />
    ),
    drawerLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Account </Text>,
    drawerIcon: ({ tintColor }) => <Icon name="account-settings" type="ionicon" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Account Window</Text>
      </View>
    );
  }
}

export default Account;