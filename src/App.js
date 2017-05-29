/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import firebase from 'firebase';
 import Login from './Login';
 import Loader from './Loader';
 import PeopleList from './PeopleList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <PeopleList />;
        break;
      case false:
        return <Login />;
        break;
      default:
        return <Loader size='large' />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
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
});
