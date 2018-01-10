/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import icons from './Resources/Image/Tab/tabBarImageData';

 import home from './home';

//var Home = require('./home');

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    };
  }
  render() {
    return (
        <TabBarIOS tintColor='rgba(140, 180, 49, 1)'>
          <TabBarIOS.Item title="Home"
                          icon={{uri:icons.home_green, scale:3}}
                          selectedIcon={{uri:icons.home_green, scale:3}}
                          selected={this.state.selectedTab === 'home'}
                          onPress={()=>{
                            this.setState({
                                selectedTab: 'home'
                            });
                          }}>

              {/*<home/>*/}

              <View >
                  <Text>发现</Text>
              </View>

          </TabBarIOS.Item>

            <TabBarIOS.Item title="Categories"
                            icon={{uri:icons.categories_gray, scale:3}}
                            selectedIcon={{uri:icons.categories_green, scale:3}}
                            selected={this.state.selectedTab === 'categories'}
                            onPress={()=>{
                                this.setState({
                                    selectedTab: 'categories'
                                });
                            }}>

                <View >
                    <Text>分类</Text>
                </View>

            </TabBarIOS.Item>


            <TabBarIOS.Item title="GroupBuy"
                            icon={{uri:icons.groupbuy_gray, scale:3}}
                            selectedIcon={{uri:icons.groupbuy_green, scale:3}}
                            selected={this.state.selectedTab === 'groupbuy'}
                            onPress={()=>{
                                this.setState({
                                    selectedTab: 'groupbuy'
                                });
                            }}>
                <View >
                    <Text>分类</Text>
                </View>

            </TabBarIOS.Item>


          <TabBarIOS.Item title="Rewards"
                          icon={{uri:icons.rewards_gray, scale:3}}
                          selectedIcon={{uri:icons.rewards_green, scale:3}}
                          selected={this.state.selectedTab === 'rewards'}
                          onPress={()=>{
                              this.setState({
                                  selectedTab: 'rewards'
                              });
                          }}>
              <View >
                  <Text>分类</Text>
              </View>

          </TabBarIOS.Item>
        </TabBarIOS>
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
