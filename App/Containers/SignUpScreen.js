import React, { PropTypes } from 'react'
import {
  Keyboard,
  LayoutAnimation,
  Image,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import SignupActions from '../Redux/SignupRedux'
import {
  Container,
  Content,
  Left,
  Body,
  Right,
  Icon,
  View,
  Button,
  Text as NBText,
  Form,
  Item,
  Input,
  Header,
  Title,
  CheckBox,
  Spinner,
  Toast
} from 'native-base'
import Styles from './Styles/SignupScreenStyles'
// import {FBLoginManager} from 'react-native-facebook-login'

import Images from '../Themes/Images'

class SignUpScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    attemptSignup: PropTypes.func,
    fetching: PropTypes.bool
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      terms: true
    }
    this.isAttempting = false
  }
  
  handleChangeFirstName = text => {
    this.setState({ firstname: text })
  }
  handleChangeLastName = text => {
    this.setState({ lastname: text })
  }
  handleChangeEmailAddress = text => {
    this.setState({ email: text })
  }
  handleChangePassword = text => {
    this.setState({ password: text })
  }
  handlePressSignup = () => {
    const { firstname, lastname, email, password, terms } = this.state
    this.props.attemptSignup(firstname, lastname, email, password, terms)
  }
  // handleFacebookSignUp = () => {
  //   const {attemptSignup} = this.props
  //   FBLoginManager.login(function (error, data) {
  //     if (!error) {
  //       const api = `https://graph.facebook.com/v2.3/${data.credentials.userId}?fields=first_name,last_name,email&access_token=${data.credentials.token}`
  //       fetch(api)
  //         .then((response) => response.json())
  //         .then((responseData) => {
  //           responseData.email = 'sg44sdfsdf@3332222.com'
  //           attemptSignup(responseData.first_name, responseData.last_name, responseData.email, responseData.id, true)
  //         })
  //         .done()
  //     } else {
  //       // console.log('Error: ', data)
  //     }
  //   })
  // }
  renderSpinner = () => {
    // console.log('fetching', this.props.fetching)
    if (this.props.fetching) {
      return <Spinner color='#dc5b5b' />
    }
  }
  render () {
    const { firstname, lastname, email, password } = this.state
    const { fetching } = this.props
    const { navigate } = this.props.navigation
    const editable = !fetching
    return (
      <Container>
        <Content>
          <Image resizeMode='cover' style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: 320 }} source={Images.signUpHeader}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 30, justifyContent: 'flex-end', alignItems: 'center'}}>
              <NBText style={{color: '#fff', fontSize: 30}}>SIGN UP</NBText>
            </View>
          </Image>
          <View style={Styles.form}>
            <Form style={{marginBottom: 20}}>
              <Item regular>
                <Input
                  ref='firstname'
                  placeholder='First name'
                  value={firstname}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={this.handleChangeFirstName}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.lastname._root.focus()}
                />
              </Item>
              <Item regular>
                <Input
                  ref='lastname'
                  placeholder='Last name'
                  value={lastname}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={this.handleChangeLastName}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.email._root.focus()}
                />
              </Item>
              <Item regular>
                <Input
                  ref='email'
                  placeholder='Email address'
                  value={email}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={this.handleChangeEmailAddress}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.password._root.focus()}
                />
              </Item>
              <Item regular>
                <Input
                  ref='password'
                  placeholder='Password'
                  value={password}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  secureTextEntry
                  autoCorrect={false}
                  onChangeText={this.handleChangePassword}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={this.handlePressSignup}
                />
              </Item>
            </Form>
            <View >
              <Button style={{ flex: 1, justifyContent: 'center' }} onPress={this.handlePressSignup} >
                <Left />
                <NBText>
                  Sign Up
                </NBText>
                <Right>
                  {this.renderSpinner()}
                </Right>
              </Button>
            </View>
          </View>
          {/* social */}
          {/*<View style={Styles.socialButton}>
            <Button style={{flex: 1, justifyContent: 'center', backgroundColor: Colors.facebook, marginRight: 5}} onPress={this.handleFacebookSignUp} >
              <NBText style={{fontSize: 13}}>
                Login via Facebook
              </NBText>
            </Button>
            <Button style={{flex: 1, justifyContent: 'center', backgroundColor: Colors.google, marginRight: 5}} onPress={this.handleFacebookSignUp} >
              <NBText style={{fontSize: 13}}>
                Login via Google
              </NBText>
            </Button>
          </View>*/}

          <View style={Styles.loginRow}>
            <Button transparent style={{flex: 1, justifyContent: 'center'}} onPress={() => navigate('LoginScreen')}>
              <Text style={{textAlign: 'center'}}>Already registered?</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.signup.fetching,
    error: state.signup.error,
    user: state.signup.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptSignup: (firstname, lastname, email, password, terms) => dispatch(SignupActions.signupRequest(firstname, lastname, email, password, terms)),
    // login: (user) => dispatch(LoginActions.loginRegister(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
