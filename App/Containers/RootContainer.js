import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import FooterTabs from '../Components/FooterTabs'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    console.tron.log({'props': this.props})    
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    console.log('newProps', newProps)
  }
  
  renderFooterTabs = () => {
    console.tron.log({'props': this.props})
    if (!this.props.new) {
       return <FooterTabs style={{ backgroundColor: 'rgba(0,0,0,0.75)', position: 'absolute', bottom: 0, zIndex: 2 }}/>
    }
  }
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation initial={'test'} />
        {this.renderFooterTabs()}
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    new: state.login.new
  }
}
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
