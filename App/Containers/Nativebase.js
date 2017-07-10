import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base'

import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NativebaseStyle'

class Nativebase extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <Container>
        <Content>
        <Text>Nativebase Container</Text>          
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nativebase)
