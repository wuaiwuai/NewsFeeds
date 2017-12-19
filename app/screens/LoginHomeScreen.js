import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class LoginHomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Login!</Text>
        <Button onPress={ () => console.log(this.props) } title="Skip" />
      </View>
    );
  }
}

export default LoginHomeScreen;
