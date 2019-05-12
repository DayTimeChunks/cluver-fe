import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Button, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

class VenueButton extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.textButton}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }

  // handleConfirmation = () => {
  //
  //   const { navigation: { navigate }} = this.props;
  //   navigate('Confirmation');
  //
  //
  // };
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: '100'
  }
});

export default VenueButton;