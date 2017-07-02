import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'

import {
  Container,
  Content,
  Button,
  Text as NBText,
  Form,
  Item,
  Input,
  Spinner,
  Right,
  Left,
  Icon
} from 'native-base'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyles'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: 'reactnative@infinite.red',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      this.props.navigation.goBack()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  renderSpinner = () => {
    if (this.props.fetching) {
      return <Spinner color='#dc5b5b' />
    }
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
     <Container>
         <Content>
          <Image resizeMode='cover' style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: 320 }} source={Images.signInHeader}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 30, justifyContent: 'flex-end', alignItems: 'center'}}>
              <NBText style={{color: '#fff', fontSize: 30}}>SIGN IN</NBText>
            </View>
          </Image>

          <View style={Styles.form}>
            <Form>
              <Item regular>
                <Input
                  ref='username'
                  style={textInputStyle}
                  value={username}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={this.handleChangeUsername}
                  underlineColorAndroid='transparent'
                  placeholder='E-mail'
                  onSubmitEditing={() => this.password._root.focus()}
                />
              </Item>
              <Item regular>
                <Input
                  ref={(ref) => { this.password = ref }}
                  style={textInputStyle}
                  value={password}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='go'
                  autoCapitalize='none'
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={this.handleChangePassword}
                  underlineColorAndroid='transparent'
                  placeholder='Password'
                  onSubmitEditing={this.handlePressLogin}
                />
              </Item>
            </Form>
            <View style={[Styles.loginRow]}>
              <Button transparent style={{flex: 1, justifyContent: 'center'}}><Text style={[Styles.or]}>Forgot password?</Text></Button>
            </View>
            <View style={[Styles.loginRow]}>
              <Button style={{ flex: 1, justifyContent: 'center' }} onPress={this.handlePressLogin} >
                <Left />
                <NBText>
                  Sign In
                </NBText>
                <Right>
                  {this.renderSpinner()}
                </Right>
              </Button>
            </View>
            <Text style={[Styles.row, Styles.or]}>OR</Text>
            {/*<View style={[Styles.loginRow, Styles.loginSocial]}>
              <Button style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.facebook, marginRight: 5}} onPress={this.facebookSignIn}>
                <NBText style={{fontSize: 14}}>
                  Login via Facebook
                </NBText>
              </Button>
              <Button style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.google, marginLeft: 5}} onPress={this.googleSignIn} >
                <NBText style={{fontSize: 14}}>
                Login via Google
                </NBText>
              </Button>
            </View>*/}
            <View style={[Styles.loginRow]}>
              <Button transparent style={{flex: 1, justifyContent: 'center'}} onPress={() => { NavigationActions.pop() }}>
                <Text style={[Styles.or]}>Create an account</Text>
              </Button>
            </View>
          </View>
        </Content>
     </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
