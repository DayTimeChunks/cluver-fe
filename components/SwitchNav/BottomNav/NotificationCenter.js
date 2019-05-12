import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import {Icon} from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const activeTintLabelColor = "#808B96";

class NotificationCenter extends PureComponent {
  componentDidMount() {
    console.log('Notifications DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Notifications WILL UNMOUNT');
  }

  static navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Notifications </Text>,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-notifications" type="ionicon" color={tintColor} />
    //  <FontAwesome name={'comments'} /> could be this one instead
    ),
    drawerLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Notifications </Text>,
    drawerIcon: ({ tintColor }) => <Icon name="notifications" type="ionicon" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Notifications Window</Text>
      </View>
    );
  }
}

export default NotificationCenter;