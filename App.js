/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// import custom components
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';

const NewsFeeds = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends Component {
  render() {
    return <NewsFeeds />;
  }
}
