import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base'

class Screen extends Component {
  static navigationOptions = {
    title: 'Screen 2',
  }

  render() {
    return (
      <Container
        backgroundColor="#c95e0c"
        onPress={() => this.props.navigation.navigate('Screen5')}
      />
    );
  }
}

export default Screen;
