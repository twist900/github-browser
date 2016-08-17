import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ActivityIndicatorIOS,
  View
} from 'react-native';

class Login extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      showProgress: false
    };
  }

  onLoginPressed(){
    console.log("attempting to login with username " + this.state.username);
    this.setState({showProgress: true});

    let authService = require('./AuthService');
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results) => {
      this.setState(Object.assign({showProgress: false}, results));

      console.log(results);
      if(results.success && this.props.onLogin){
        this.props.onLogin();
      }
    })

  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/Octocat.png')} />
        <Text style={styles.heading}>GitHub Browser</Text>

        <TextInput
          onChangeText={(text) => {this.setState({username: text})}}
          style={styles.loginInput}
          placeholder="GitHub Username"
        />
        <TextInput
          onChangeText={(text) => {this.setState({password: text})}}
          style={styles.loginInput}
          placeholder="GitHub Password"
          secureTextEntry={true}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onLoginPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>

        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          style={styles.loader}
          size="large"
        />
      </View>
      );
  }
}

var styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',

  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    margin: 10,
    marginTop: 20
  },
  loginInput: {
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 0,
      color: '#48BBEC'
  },
  button: {
      height: 50,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
  },
  buttonText: {
      color: '#fff',
      fontSize: 24
  },
  loader: {
    marginTop: 20
  }
});

export default Login;