import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <View>
        <Text>Hello, Navigation!</Text>
        <Button onPress={() => navigate('Stack')} title="Go to a nested stack screen" />
      </View>;
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
