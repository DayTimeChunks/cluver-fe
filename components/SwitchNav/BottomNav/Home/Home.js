import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Button, ScrollView} from "react-native";
import * as db from '../../../../utils/db'
import VenueButton from './VenueButton'
import { NavigationActions } from "react-navigation";
const uuidv1 = require('uuid/v1');

import {Icon} from "react-native-elements";

class Home extends Component {

  state = {
    antros: "",
    promos: ""
  };

  componentWillMount(){

  }

  // handleToggle = () => {
  //   // this.props.navigation.navigate('SearchTab');
  //   const navigation = this.props.navigation;
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: 'SearchTab',
  //     // params: {
  //     //   param: param,
  //     //   name: item.name,
  //     //   description: item.description,
  //     // }
  //   });
  //   navigation.dispatch(navigateAction);
  // };

  static navigationOptions = ({navigation}) => ({
    headerTitle: "Home",
    // TODO: This works, but need to declare SearchTab.js at same level as BottomNav
    // headerRight: (
    //   <Icon
    //     onPress={() => navigation.navigate('SearchTab')}
    //     containerStyle={{paddingRight: 15}}
    //     type="ionicon"
    //     name={Platform.OS === "ios" ? "ios-search" : "search"}
    //   />)
  });

  renderVenue(item, navigation) {
    return (
      <VenueButton key={uuidv1()} label={item.name} name={item.name} description={item.description} onPress={ () => {
        const param = item.param;
        const route = item.route;
        const navigateAction = NavigationActions.navigate({
          routeName: route,
          params: {
            param: param,
            name: item.name,
            description: item.description,
          }
        });
        navigation.dispatch(navigateAction);
      }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.sectionTitle}>What's hot?</Text>
          {db.antros.entries.map(venue => this.renderVenue(venue, this.props.navigation))}
          <Text style={styles.sectionTitle}>Promotions</Text>
          {db.promos.entries.map(venue => this.renderVenue(venue, this.props.navigation))}
          </ScrollView>

      </View>
    );
  }

  handleVenuePress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('Venue');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10
  },
  sectionTitle: {
    fontSize: 30,
    justifyContent: 'center',
    fontWeight: '100',
    padding: (10, 30)
  },
  icon: {
    paddingLeft: 10
  }

});

export default Home;