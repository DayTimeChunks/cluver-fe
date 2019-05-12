import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Button} from "react-native";
import {Icon} from "react-native-elements";

class Confirmation extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.name}</Text>
        <Text>Thank you Manuel!</Text>
        <Text>Reservation info</Text>
        <Text>See you soon</Text>

        <Button title="Back to home" onPress={this.handleHome} />
      </View>
    );
  }

  handleHome = () => {
    const { navigation: { navigate }} = this.props;
    navigate('Home');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    paddingLeft: 10
  }
});

export default Confirmation;