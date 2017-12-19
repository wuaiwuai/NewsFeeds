/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { LoginNavStack, Nav } from './app/config/router';

import store from './app/store';

class App extends Component {
  componentDidMount() {
    console.log(store.getState());
  }

  render() {
    const nav = <Nav />;
    return (
      <Provider store={store}>
        {nav}
      </Provider>
    );
  }
}

export default App;
