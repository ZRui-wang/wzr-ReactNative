/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
  render() {
    return (
        <TabBarIOS>
          <TabBarIOS.Item title="Home" icon={require("./Resources/Image/Tab/tab_home_green.png")}>

          </TabBarIOS.Item>

            <TabBarIOS.Item title="Categories" icon={require("./Resources/Image/Tab/tab_categories_gray.png")}>

            </TabBarIOS.Item>


            <TabBarIOS.Item title="GroupBuy" icon={require("./Resources/Image/Tab/tab_groupbuy_gray.png")}>

            </TabBarIOS.Item>


          <TabBarIOS.Item title="Rewards" icon={require("./Resources/Image/Tab/tab_rewards_gray.png")}>

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
