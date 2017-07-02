import React from 'react'
import { View, Text } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/AnotherAuthenticatedScreenStyle'

class AnotherAuthenticatedScreen extends React.Component {
  render () {
    const { goBack } = this.props.navigation
    console.log('this.props', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are still logged in</Text>
        <RoundedButton text='Go back one screen' onPress={() => goBack()} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username
  }
}

// export default AnotherAuthenticatedScreen

export default connect(mapStateToProps)(AnotherAuthenticatedScreen)
