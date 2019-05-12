import React, {Component} from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import {Icon, Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleLogin = () => {
    this.props.navigation.navigate('Home')
  };
  render() {
    return (
      <View style={styles.container}>
        {/*<FontAwesome name={'md-wine'} />*/}
        <Icon name="md-wine" type="ionicon" size={64} iconStyle={styles.icon}/>
        <Text style={styles.appName}>Cluver</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <Button title="Log In" onPress={this.handleLogin}
                color="#841584"
                accessibilityLabel="Log in"/>
        <Text style={styles.guidance}>Not a member yet?</Text>
        <Button
          title="Sign Up" onPress={this.handleLogin}
          accessibilityLabel="Log out"/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appName: {
    fontSize: 30,
    padding: 15
  },
  input: {
    height: 40, width: 250, borderColor: 'gray', borderWidth: 0.5, borderRadius: 4, padding: 10, marginBottom: 20
  },
  guidance: {
    fontSize: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    // fontWeight: '100'
  }
});

export default Login;