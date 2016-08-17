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
  ActivityIndicatorIOS,
  StyleSheet
} from 'react-native';
import Login from './Login';
// import AuthService from './AuthService';

class GithubBrowser extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checkingAuth: false,
      isLoggedIn: false
    }
  }

  componentDidMount(){
    // AuthService.getAuthInfo((err, authInfo) => {
    //   this.setState({
    //     checkingAuth: false,
    //     isLoggedIn: authInfo != null
    //   });
    // })
  }


  render() {
    if(this.state.checkingAuth){
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            animating={true}
            size="large"
            style={styles.loader}
          />
        </View>
        );
    }
    return (
      <Login />
    );
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
