import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import {Icon} from "react-native-elements";

const activeTintLabelColor = "#808B96";

class SearchTab extends PureComponent {
  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  // TODO: Remove when found way to move to headerTab
  static navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Search </Text>,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" type="ionicon" color={tintColor} />
    ),
    drawerLabel: <Text style={{ fontSize: 10, color: activeTintLabelColor }}> Search </Text>,
    drawerIcon: ({ tintColor }) => <Icon name="search" type="ionicon" color={tintColor} />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>Search Fields Window</Text>
      </View>
    );
  }
}

export default SearchTab;