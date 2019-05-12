import React from 'react';
import { Icon } from "react-native-elements";
import { View, Text } from 'react-native';

const activeTintLabelColor = "#808B96";

class Reservations extends React.Component {
  componentDidMount() {
    console.log('Reservations DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Reservations WILL UNMOUNT');
  }

  static navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Reservations </Text>,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-paper" type="ionicon" color={tintColor} />
    ),
    drawerLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Reservations </Text>,
    drawerIcon: ({ tintColor }) => <Icon name="clipboard-list" type="ionicon" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Reservations Window</Text>
      </View>
    );
  }
}

export default Reservations;