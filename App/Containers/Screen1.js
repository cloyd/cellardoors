import React, { Component } from 'react'
import { Container, Content, Button, Text } from 'native-base'

class Screen extends Component {
  render () {
    return (
      <Container>
        <Content padder>
          <Text>Home Screen</Text>
          <Button full onPress={() => this.props.navigation.navigate('Screen2')}>
            <Text>Screen 2</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Screen
