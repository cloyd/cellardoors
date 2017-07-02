import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'
import { Image } from 'react-native'
import { Text, View, Button } from 'native-base'
import { Images } from '../Themes'
import Swiper from 'react-native-swiper'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  componentWillMount () {
    // console.log('launch screen', this.props.firstLoad)
  }
  componentWillReceiveProps (nextProps) {
    this.forceUpdate()
    // console.log('launch screen nextProps', nextProps)
  }
  componentWillUpdate () {
    // console.log('componentWillUpdate')
  }
  componentWillUnmount () {
    // console.tron.log('componentWillUnmount')
  }

  handlePressSignUp = () => {
   
  }
  handlePressSkip = () => {
 
  }
  render () {
    return (
      <View>
        <Swiper style={styles.wrapper} loop paginationStyle={styles.paginationStyle} activeDotStyle={styles.activeDotStyle}>
          <View style={styles.slide}>
            <Image resizeMode='cover' style={styles.image} source={Images.tutorialSlider1}>
              <View style={styles.sliderContent}>
                <Text style={styles.h1}>WELCOME</Text>
                <Text style={styles.text}>
                  Plan your trip to some of the best wine & food destinations in Australia. Hundreds of featured cellar doors plus nearby accommodation, breweries, cafes and restaurants.
                  Just search the region of your choice.
                </Text>
              </View>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='cover' style={styles.image} source={Images.tutorialSlider2}>
              <View style={styles.sliderContent}>
                <Text style={styles.h1}>GET NOTIFIED</Text>
                <Text style={styles.text}>
                  Get notified about secret wine trails, special offers, exciting destinations, important information and fresh new content.
                </Text>
              </View>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='cover' style={styles.image} source={Images.tutorialSlider3} >
              <View style={styles.sliderContent}>
                <Text style={styles.h1}>PLAN YOUR TRIP</Text>
                <Text style={styles.text}>
                 Search, find and add your favourite places to your itinery and see the best of what’s nearby using the handy ‘search near me’ feature.
                </Text>
              </View>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='cover' style={styles.image} source={Images.tutorialSlider4} >
              <View style={styles.sliderContent}>
                <Text style={styles.h1}>SPECIAL EVENTS</Text>
                <Text style={styles.text}>
                  Check out what’s on throughout Australia’s wine regions. Wine & Food festivals, concerts, music festivals, country markets & more.
                </Text>
              </View>
            </Image>
          </View>
          <View style={styles.slide}>
            <Image resizeMode='cover' style={styles.image} source={Images.tutorialSlider5} >
              <View style={styles.sliderContent}>
                <Text style={styles.h1}>JOIN US</Text>
                <Text style={styles.text}>
                  Stay up to date with the latest events, things to do and places to see and receive special discounts and offers from our partners.
                </Text>
              </View>
            </Image>
          </View>
        </Swiper>
        <View style={styles.buttonsRow}>
          <View style={styles.buttonWrapper}>
            <Button style={styles.buttonSignUp} onPress={() =>  this.props.signup()}>
              <Text>Signup</Text>
            </Button>
            <Button light style={styles.buttonSkip} onPress={() => this.props.skip('anonymous')}>
              <Text>Skip</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    skip: (username) => dispatch(LoginActions.loginSuccess(username)),
    signup: () => dispatch(LoginActions.auth())
  }
}

export default connect(null, mapDispatchToProps)(LaunchScreen)
