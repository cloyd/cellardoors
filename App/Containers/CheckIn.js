import React, {Component} from 'react'
import {
  StyleSheet,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import {
  View,
  Container,
  Text
} from 'native-base'

import QRCodeScanner from 'react-native-qrcode-scanner'
// import DealsAction from '../Redux/DealsRedux'

class CheckIn extends Component {
  static propTypes = {
    // region: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    // console.tron.log(this.props)
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // console.tron.log(newProps)
  }

  componentDidMount () {
    // this.props.getFavorites()
  }
  componentWillUnmount () {
  }

  chekIn = (e) => {
    const { user, redeem } = this.props
    const parts = e.data.split('/')
    const itemId = Number(parts[parts.length - 1])

    const accountId = (user.hasOwnProperty('id')) ? user.id : 1
    // console.log({accountId, itemId})
    redeem({accountId, itemId})
    // NavigationActions.profile({animation: 'fade'})
    // NavigationActions.refresh()
  }

  renderBottomContent = () => {
    return (
      <Text style={styles.centerText}>
        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
      </Text>
    )
  }

  render () {
    return (
      <QRCodeScanner cameraStyle={styles.cameraContainer} onRead={this.chekIn} showMarker={false} />
    )
  }
}

const styles = StyleSheet.create({
  zeroContainer: {
    height: 0,
    flex: 0
  },

  cameraContainer: {
    height: Dimensions.get('window').height - 64,
    borderColor: '#03A9F4',
    borderWidth: 1,
    backgroundColor: 'red'
    // marginTop: 10,
    // paddingTop: 0
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },

  textBold: {
    fontWeight: '500',
    color: '#000'
  }

})
const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // redeem: (params) => dispatch(DealsAction.redeemDealsRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn)
