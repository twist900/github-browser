import {
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import React from 'react';
import Feed from './Feed';

export default class AppContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'feed'
    }
  }

  render(){
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='feed'
          selected={this.state.selectedTab == 'feed'}
          icon={require('./img/inbox.png')}
          onPress={()=> this.setState({selectedTab: 'feed'})}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
              component: Feed,
              title: 'Feed'
            }}
           />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab == 'search'}
          icon={require('./img/search.png')}
          onPress={()=> {this.setState({selectedTab: 'search'})}}
        >
          <Text>Another one</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
      );
  }
}