import React, { Component } from 'react'
import { Container, Content, Button, Text } from 'native-base'

class WineRegion extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    console.tron.log({'wineRegion': this.props})
  }
  render () {
    const { params } = this.props.navigation.state
    return (
      <Container>
        <Content padder>
          <Text>Wine Region - {params.name}</Text>
          <Button full onPress={() => this.props.navigation.navigate('WineRegionListings', params)}>
            <Text>View Listings</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default WineRegion
