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
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCyWPmSYltuwnG_XJdtAWVqRMLYeL2vym0",
      authDomain: "crmreactnative.firebaseapp.com",
      databaseURL: "https://crmreactnative.firebaseio.com",
      projectId: "crmreactnative",
      storageBucket: "crmreactnative.appspot.com",
      messagingSenderId: "249954532047"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Sanel
        </Text>
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
});
