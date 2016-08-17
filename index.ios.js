/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import Login from './Login';
import AuthService from './AuthService';
import AppContainer from './AppContainer';

class GithubBrowser extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checkingAuth: true,
      isLoggedIn: false
    }
  }

  componentDidMount(){
    AuthService.getAuthInfo((err, authInfo) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      });
    })
  }

  onLogin(){
    this.setState({
      isLoggedIn: true
    });
  }


  render() {
    if(this.state.checkingAuth){
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loader}
          />
        </View>
        );
    }
    if(this.state.isLoggedIn){
      return <AppContainer />
    } else {
      return <Login onLogin={this.onLogin.bind(this)}/>
    }

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
