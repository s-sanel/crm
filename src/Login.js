/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
  .withText('LOGIN')
  .build();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    paddingBottom: 10,
    width: 200
  },
  fieldStyle: {
    height: 40,
    color: MKColor.Orange,
    width: 200
  },
  loginButtonArea: {
    marginTop: 20
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    console.log("button clicked");
  }

  render() {
    const { form, fieldStyle, loginButtonArea, errorMessage } = styles;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Sanel
        </Text>
        <MKTextField
          text={this.state.email}
          onTextChange={email => this.setState({email})}
          textInputStyle={fieldStyle}
          placeholder={'Email...'}
          tintColor={MKColor.Teal}
        />
        <MKTextField
          text={this.state.email}
          onTextChange={password => this.setState({password})}
          textInputStyle={fieldStyle}
          placeholder={'Password...'}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text style={errorMessage}>
          {this.state.error}
        </Text>
        <View style={loginButtonArea}>
          <LoginButton onPress={this.onButtonPress} />
        </View>
      </View>
    );
  }
}
