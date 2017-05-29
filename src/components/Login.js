/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
 import Loader from './Loader';
 import firebase from 'firebase';

 const LoginButton = MKButton.coloredButton()
     .withText('LOGIN')
     .build();

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  errorMessage: {
    marginTop: 15,
    fontSize: 15,
    color: 'red',
    alignSelf: 'center'
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAuthSuccess = this.onAuthSuccess.bind(this);
    this.onAuthFailed = this.onAuthFailed.bind(this);
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onButtonPress() {
    console.log("button clicked");
    const { email, password } = this.state;
    this.setState({email:'', loadint: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess)
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess)
          .catch(this.onAuthFailed);
      });
  }

  renderLoader() {
    if (this.state.loading) {
      return <Loader size="large" />;
    } else {
      return <LoginButton onPress={this.onButtonPress} />;
    }
  }

  render() {
    const { form, fieldStyle, loginButtonArea, errorMessage } = styles;
    return (
      <View style={form}>
        <Text>Login or create an account</Text>
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
          { this.renderLoader() }
        </View>
      </View>
    );
  }
}
