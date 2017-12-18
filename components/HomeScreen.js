import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View>
        <Text>Hello, Navigation!</Text>
        <Button onPress={() => navigate('Chat')} title="Chat with Lucy" />
      </View>;
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

module.exports = HomeScreen;
