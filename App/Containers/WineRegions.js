import React, { Component } from 'react'
import { Container, Content, Button, Text, List, ListItem} from 'native-base'

class WineRegions extends Component {
  render () {
    return (
      <Container>
        <Content padder>
          <Text>Wine Regions</Text>

          <List style={{paddingTop: 30}} button>
            <ListItem onPress={() => this.props.navigation.navigate('WineRegion', {name: 'Hunter Valley'})}>
              <Text>Hunter Valley</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('WineRegion', {name: 'Barrosa Valley'})}>
              <Text>Barrosa Valley</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('WineRegion', {name: 'Margaret River'})}>
              <Text>Margaret River</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('WineRegion', {name: 'Clare Valley'})}>
              <Text>Clare Valley</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default WineRegions
