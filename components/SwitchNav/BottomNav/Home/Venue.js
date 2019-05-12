import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Button, TextInput, TouchableHighlight} from "react-native";
import {Icon} from "react-native-elements";
import { NavigationActions, SafeAreaView } from "react-navigation";
import DateTimePicker from 'react-native-modal-datetime-picker';
import ModalSelector from 'react-native-modal-selector';
import brand from '../../../brand'
import { formatDateTime } from '../../../../utils/api'

class Venue extends Component {

  state = {
    name: "Manuel Cuevas",
    date: '',
    showDatePicker: false,
    people: ''
  };

  handleDatePicked = (date) => {
    this.setState({
      date,
    });

    this.handleDatePickerHide();
  };


  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false,
    });
  };

  handleDatePress = () => {
    this.setState({
      showDatePicker: true,
    });
  };

  render() {

    let index = 0;
    const data = [
      { key: index++, label: 1, accessibilityLabel: `Tap here for 1`},
      { key: index++, label: 2, accessibilityLabel: `Tap here for 2`},
      { key: index++, label: 3, accessibilityLabel: `Tap here for 3`},
      { key: index++, label: 4, accessibilityLabel: `Tap here for 4`},
      { key: index++, label: 5, accessibilityLabel: `Tap here for 5`},
      { key: index++, label: 6, accessibilityLabel: `Tap here for 6`},
      { key: index++, label: 7, accessibilityLabel: `Tap here for 7`},
      { key: index++, label: 8, accessibilityLabel: `Tap here for 8`},
      { key: index++, label: 9, accessibilityLabel: `Tap here for 9`},
      { key: index++, label: 10, accessibilityLabel: `Tap here for 10`},
    ];

    // console.log("nav", this.props.navigation)
    return (
      <View style={styles.container}>
        <Text style={brand.sectionTitle}>{this.props.navigation.state.params.name}</Text>
        <Text style={brand.description}>{this.props.navigation.state.params.description}</Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Reservation for:</Text>
          <TextInput
            style={[styles.text, styles.borderTop]}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            placeholder="Full name"
            spellcheck={false}/>

          <Text style={styles.label}>Date & Time:</Text>
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker isVisible={this.state.showDatePicker}
                          mode="datetime"
                          onConfirm={this.handleDatePicked}
                          onCancel={this.handleDatePickerHide}/>

          <Text style={styles.label}>Number of people:</Text>
          <ModalSelector
            animationType='slide'
            // selectStyle={{flex: 1}}
            overlayStyle={{ flex: 1, paddingTop: '65%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}
            data={data}
            initValue={this.state.people}
            onChange={(choice) => {this.setState({people: choice.label.toString()})}}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
          >
            <TextInput
              // style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
              style={[styles.text, styles.borderTop]}
              editable={false}
              placeholder="Select your party!"
              value={this.state.people} />

          </ModalSelector>




          <TouchableHighlight
            style={styles.button}
            onPress={this.handleConfirmation}>
            <Text>Book Now</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  handleConfirmation = () => {
    const navigation = this.props.navigation;
    // const { navigation: { navigate }} = this.props;
    // navigate('Confirmation');

    const navigateAction = NavigationActions.navigate({
      routeName: 'Confirmation',
      params: {
        name: navigation.state.params.name,
        description: navigation.state.params.description,
      }
    });
    navigation.dispatch(navigateAction);


  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    // borderWidth: 1,
    // margin: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
    width: 250, borderColor: 'gray', borderWidth: 0.5, borderRadius: 4, padding: 10
  },
  label: {
    ...brand.label,
    paddingLeft: 10,
    marginTop: 10,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Venue;